/**
 * Monta vercel.json = vercel.base.json + rewrites dinâmicos (rotas válidas + catch-all 404)
 * + headers de Cache-Control para HTML nas rotas da app (sem sobrescrever /assets|imagens|documentos).
 * Legacy ?p= / ?s= ficam em vercel.base.json como redirects 307 → /api/wp-legacy.
 *
 * Executar sempre que STATIC_PATHS ou posts mudarem: npm run vercel:config
 * A Vercel lê vercel.json antes do build — este ficheiro deve estar commitado após gerar.
 */
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { STATIC_PATHS, getRouteRewrites } from './static-site-paths.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const HTML_CACHE =
  'public, max-age=300, s-maxage=86400, stale-while-revalidate=604800';

function main() {
  const basePath = join(root, 'vercel.base.json');
  if (!existsSync(basePath)) {
    console.error('Em falta vercel.base.json');
    process.exit(1);
  }
  const base = JSON.parse(readFileSync(basePath, 'utf8'));

  const routeRewrites = getRouteRewrites(root);

  /** Admin SPA — em dev o Vite serve `/`; em produção `dist/index.html` */
  const adminRewrites = [
    { source: '/admin', destination: '/' },
    { source: '/admin/:path*', destination: '/' },
  ];

  /** Rewrites para superfícies WP descontinuadas → 410 (handler gone) */
  const wpBlockedRewrites = [
    { source: '/wp-json/:path*', destination: '/api/gone' },
    { source: '/xmlrpc.php', destination: '/api/gone' },
    { source: '/wp-login.php', destination: '/api/gone' },
    { source: '/wp-admin/:path*', destination: '/api/gone' },
  ];

  /** Legacy ?p= / ?s= tratados em vercel.base.json como redirects 307 → /api/wp-legacy (antes do estático /). */

  /**
   * 404 real só para rotas “de página” (sem extensão de ficheiro, sem /@vite, etc.).
   * Evita interceptar /index.tsx, /@vite/client e outros assets do Vite em `vercel dev`.
   */
  const catchAll = [
    { source: '/:a([^/.@]+)/:b([^/.@]+)/:c([^/.@]+)', destination: '/api/not-found' },
    { source: '/:a([^/.@]+)/:b([^/.@]+)', destination: '/api/not-found' },
    { source: '/:a([^/.@]+)', destination: '/api/not-found' },
  ];

  base.rewrites = [...wpBlockedRewrites, ...routeRewrites, ...adminRewrites, ...catchAll];

  const htmlHeaders = [];

  htmlHeaders.push({
    source: '/',
    headers: [{ key: 'Cache-Control', value: HTML_CACHE }],
  });

  for (const p of STATIC_PATHS) {
    if (p === '/' || p === '/blog') continue;
    htmlHeaders.push({
      source: p,
      headers: [{ key: 'Cache-Control', value: HTML_CACHE }],
    });
  }

  htmlHeaders.push({
    source: '/blog',
    headers: [{ key: 'Cache-Control', value: HTML_CACHE }],
  });

  htmlHeaders.push({
    source: '/blog/:slug+',
    headers: [{ key: 'Cache-Control', value: HTML_CACHE }],
  });

  htmlHeaders.push({
    source: '/admin',
    headers: [
      { key: 'Cache-Control', value: 'no-store' },
      { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
    ],
  });

  htmlHeaders.push({
    source: '/admin/:path*',
    headers: [
      { key: 'Cache-Control', value: 'no-store' },
      { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
    ],
  });

  base.headers = [...(base.headers ?? []), ...htmlHeaders];

  const out = join(root, 'vercel.json');
  writeFileSync(out, JSON.stringify(base, null, 2) + '\n', 'utf8');
  console.log('vercel.json gerado:', out);
  console.log('  rewrites:', base.rewrites.length, '| headers:', base.headers.length);
}

main();
