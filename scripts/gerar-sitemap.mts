/**
 * Gera public/sitemap.xml com lastmod (ISO) + xmlns:image.
 * Lê STATIC_PAGE_SEO (TS) e blogPosts (TS) directamente via tsx.
 * Executar: npm run sitemap
 */
import { writeFileSync, statSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { STATIC_PAGE_SEO } from '../src/seo/pageSeo.js';
import { blogPosts } from '../src/data/blogPosts.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const SITE_URL = (process.env.VITE_SITE_URL || 'https://www.drserracruz.com.br').replace(/\/$/, '');

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function abs(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

function fileMtimeIso(relPath: string): string | null {
  try {
    return statSync(join(root, relPath)).mtime.toISOString();
  } catch {
    return null;
  }
}

const STATIC_PATHS_ORDER = [
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
  '/artrose',
  '/cartilagem',
  '/trauma-do-esporte',
  '/condromalacia-patelar',
  '/blog',
];

type UrlEntry = {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
  imageLoc?: string;
  imageTitle?: string;
};

const todayIso = new Date().toISOString();

const staticEntries: UrlEntry[] = STATIC_PATHS_ORDER.filter((p) => !STATIC_PAGE_SEO[p]?.noindex).map((p) => {
  const seo = STATIC_PAGE_SEO[p];
  return {
    loc: abs(p),
    lastmod: fileMtimeIso('src/seo/pageSeo.ts') ?? todayIso,
    changefreq: p === '/' ? 'weekly' : 'monthly',
    priority: p === '/' ? '1.0' : '0.8',
    imageLoc: seo?.ogImagePath ? abs(seo.ogImagePath) : undefined,
    imageTitle: seo?.title,
  };
});

const blogEntries: UrlEntry[] = blogPosts.map((post) => ({
  loc: abs(`/blog/${post.id}`),
  lastmod: post.datePublishedIso,
  changefreq: 'monthly',
  priority: '0.7',
  imageLoc: post.image ? abs(post.image) : undefined,
  imageTitle: post.title,
}));

const all = [...staticEntries, ...blogEntries];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${all
  .map((u) => {
    const image = u.imageLoc
      ? `\n    <image:image>\n      <image:loc>${escapeXml(u.imageLoc)}</image:loc>${u.imageTitle ? `\n      <image:title>${escapeXml(u.imageTitle)}</image:title>` : ''}\n    </image:image>`
      : '';
    return `  <url>
    <loc>${escapeXml(u.loc)}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>${image}
  </url>`;
  })
  .join('\n')}
</urlset>
`;

const out = join(root, 'public/sitemap.xml');
writeFileSync(out, xml, 'utf8');
console.log(`Sitemap escrito: ${out} (${all.length} URLs, ${staticEntries.length} estáticas + ${blogEntries.length} posts)`);
