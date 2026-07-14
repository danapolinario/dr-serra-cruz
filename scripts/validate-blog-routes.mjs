/**
 * Garante que cada id estático em blogPosts.ts tem rota em App.tsx
 * e que slugs dinâmicos não colidem com posts estáticos.
 */
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { extractStaticBlogIds, extractDynamicBlogIds } from './static-site-paths.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

function extractAppBlogSlugs() {
  const appTs = readFileSync(join(root, 'App.tsx'), 'utf8');
  const slugs = new Set();
  const re = /path=["']\s*\/blog\/([^"':]+)["']/g;
  let m;
  while ((m = re.exec(appTs)) !== null) {
    const slug = m[1].trim();
    if (slug.startsWith(':')) continue;
    slugs.add(slug);
  }
  return slugs;
}

function main() {
  const staticIds = extractStaticBlogIds(root);
  const dynamicIds = extractDynamicBlogIds(root);
  const routes = extractAppBlogSlugs();
  const staticSet = new Set(staticIds);

  const missingInApp = staticIds.filter((id) => !routes.has(id));
  const extraInApp = [...routes].filter((r) => !staticSet.has(r));
  const dynamicCollisions = dynamicIds.filter((id) => staticSet.has(id));
  const dynamicDuplicates = dynamicIds.filter((id, i) => dynamicIds.indexOf(id) !== i);

  if (missingInApp.length || extraInApp.length || dynamicCollisions.length || dynamicDuplicates.length) {
    console.error('Validação de rotas do blog falhou:');
    if (missingInApp.length) console.error('  Estático sem rota explícita:', missingInApp);
    if (extraInApp.length) console.error('  Rota explícita sem post estático:', extraInApp);
    if (dynamicCollisions.length) console.error('  Slug dinâmico colide com estático:', dynamicCollisions);
    if (dynamicDuplicates.length) console.error('  Slugs dinâmicos duplicados:', [...new Set(dynamicDuplicates)]);
    process.exit(1);
  }

  console.log(
    `OK: ${staticIds.length} posts estáticos, ${dynamicIds.length} dinâmico(s), rotas alinhadas.`,
  );
}

main();
