/**
 * Lista canónica de paths do repositório (App.tsx + blogPosts.ts) para cruzar com redirects WP.
 * Saída: scripts/app-canonical-urls.csv
 */
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const SITE_URL = (process.env.VITE_SITE_URL || 'https://www.drserracruz.com.br').replace(/\/$/, '');

const STATIC_PATHS = [
  '/',
  '/sobre',
  '/artigos',
  '/capitulos-de-livros',
  '/palestras-e-congressos',
  '/materiais-para-pacientes',
  '/premiacoes',
  '/links',
  '/lesoes-ligamentares',
  '/meniscos',
  '/blog',
];

function extractBlogIds() {
  const blogTs = readFileSync(join(root, 'src/data/blogPosts.ts'), 'utf8');
  const ids = [];
  for (const m of blogTs.matchAll(/^\s*id:\s*'([^']+)'/gm)) {
    if (m[1] === 'string') continue;
    ids.push(m[1]);
  }
  return ids;
}

function main() {
  const ids = extractBlogIds();
  const lines = ['path,full_url,kind'];
  for (const p of STATIC_PATHS) {
    lines.push(`${p},${SITE_URL}${p},static`);
  }
  for (const id of ids) {
    const p = `/blog/${id}`;
    lines.push(`${p},${SITE_URL}${p},blog_post`);
  }
  const out = join(root, 'scripts/app-canonical-urls.csv');
  writeFileSync(out, lines.join('\n') + '\n', 'utf8');
  console.log(`Manifest: ${out} (${lines.length - 1} URLs)`);
}

main();
