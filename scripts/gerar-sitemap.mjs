/**
 * Gera public/sitemap.xml a partir das rotas estáticas (App.tsx) e ids em src/data/blogPosts.ts.
 * Executar antes do build: npm run sitemap
 */
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { STATIC_PATHS, extractBlogIdsFromRepo } from './static-site-paths.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const SITE_URL = (process.env.VITE_SITE_URL || 'https://www.drserracruz.com.br').replace(/\/$/, '');

function escapeLoc(path) {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

function main() {
  const blogIds = extractBlogIdsFromRepo(root);
  const urls = [
    ...STATIC_PATHS.map((p) => ({ loc: escapeLoc(p), changefreq: p === '/' ? 'weekly' : 'monthly', priority: p === '/' ? '1.0' : '0.8' })),
    ...blogIds.map((id) => ({
      loc: escapeLoc(`/blog/${id}`),
      changefreq: 'monthly',
      priority: '0.7',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

  const out = join(root, 'public/sitemap.xml');
  writeFileSync(out, xml, 'utf8');
  console.log(`Sitemap escrito: ${out} (${urls.length} URLs)`);
}

main();
