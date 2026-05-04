/**
 * Extrai URLs do sitemap WordPress em produção (recursivo para sitemap index).
 * Saída: scripts/wordpress-urls-live.csv
 *
 * Uso: WORDPRESS_SITEMAP_URL=https://www.drserracruz.com.br/sitemap.xml node scripts/auditar-wordpress-urls.mjs
 */
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const DEFAULT_SITEMAP =
  process.env.WORDPRESS_SITEMAP_URL ?? 'https://www.drserracruz.com.br/sitemap.xml';

function extractLocs(xml) {
  const locs = [];
  for (const m of xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)) {
    locs.push(m[1].trim());
  }
  return locs;
}

/** Extrai [url, lastmod] por bloco <url> num urlset */
function extractUrlEntries(xml) {
  const entries = [];
  const blocks = xml.split(/<url>/i);
  for (const block of blocks.slice(1)) {
    const locM = block.match(/<loc>\s*([^<]+)<\/loc>/i);
    const lmM = block.match(/<lastmod>\s*([^<]+)<\/lastmod>/i);
    if (locM) {
      entries.push({ loc: locM[1].trim(), lastmod: lmM ? lmM[1].trim() : '' });
    }
  }
  return entries;
}

function classifyPath(pathname) {
  const p = pathname.toLowerCase();
  if (p.endsWith('.pdf')) return 'attachment_pdf';
  if (p.includes('/wp-content/uploads/')) return 'upload';
  if (p === '/feed' || p === '/comments/feed' || p.endsWith('/feed')) return 'feed';
  if (p.startsWith('/wp-json/')) return 'wp_json';
  if (p.startsWith('/category/')) return 'category';
  if (p.startsWith('/tag/')) return 'tag';
  if (p.startsWith('/author/')) return 'author';
  if (/\/page\/\d+\/?$/.test(p)) return 'pagination';
  if (p.startsWith('/?') && p.includes('p=')) return 'query_post';
  return 'url';
}

function pathnameFromUrl(urlStr) {
  try {
    const u = new URL(urlStr);
    return u.pathname + (u.search || '');
  } catch {
    return urlStr;
  }
}

async function fetchText(url) {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status} ao buscar ${url}`);
  return res.text();
}

function escapeCsv(s) {
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

async function main() {
  console.log('Sitemap seed:', DEFAULT_SITEMAP);

  const visitedSitemaps = new Set();
  /** @type {Map<string, string>} loc -> lastmod */
  const urlMeta = new Map();

  async function crawl(url) {
    if (visitedSitemaps.has(url)) return;
    visitedSitemaps.add(url);

    const xml = await fetchText(url);
    const isIndex = /<sitemapindex/i.test(xml);

    if (isIndex) {
      for (const loc of extractLocs(xml)) {
        await crawl(loc);
      }
      return;
    }

    if (/<urlset/i.test(xml)) {
      for (const { loc, lastmod } of extractUrlEntries(xml)) {
        urlMeta.set(loc, lastmod);
      }
    }
  }

  await crawl(DEFAULT_SITEMAP);

  const unique = [...urlMeta.keys()].sort();

  const lines = ['path,full_url,lastmod,type'];
  for (const full of unique) {
    const path = pathnameFromUrl(full);
    const lastmod = urlMeta.get(full) ?? '';
    const type = classifyPath(path.split('?')[0] || path);
    lines.push(
      [escapeCsv(path), escapeCsv(full), escapeCsv(lastmod), type].join(','),
    );
  }

  const out = join(root, 'scripts/wordpress-urls-live.csv');
  writeFileSync(out, lines.join('\n') + '\n', 'utf8');
  console.log(`Escrito: ${out} (${unique.length} URLs)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
