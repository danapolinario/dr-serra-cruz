/**
 * Garante que cada id em blogPosts.ts tem uma rota em App.tsx e vice-versa (posts /blog/*).
 */
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

function extractBlogIds() {
  const blogTs = readFileSync(join(root, 'src/data/blogPosts.ts'), 'utf8');
  const ids = [];
  for (const m of blogTs.matchAll(/^\s*id:\s*'([^']+)'/gm)) {
    if (m[1] === 'string') continue;
    ids.push(m[1]);
  }
  return ids;
}

function extractAppBlogSlugs() {
  const appTs = readFileSync(join(root, 'App.tsx'), 'utf8');
  const slugs = new Set();
  const re = /path=["']\s*\/blog\/([^"']+)["']/g;
  let m;
  while ((m = re.exec(appTs)) !== null) {
    slugs.add(m[1].trim());
  }
  return slugs;
}

function main() {
  const ids = extractBlogIds();
  const routes = extractAppBlogSlugs();

  const missingInApp = ids.filter((id) => !routes.has(id));
  const extraInApp = [...routes].filter((r) => !ids.includes(r));

  if (missingInApp.length || extraInApp.length) {
    console.error('blogPosts vs App.tsx desalinhados:');
    if (missingInApp.length) console.error('  Sem rota:', missingInApp);
    if (extraInApp.length) console.error('  Rota sem post:', extraInApp);
    process.exit(1);
  }
  console.log(`OK: ${ids.length} posts com rota /blog/<slug> correspondente.`);
}

main();
