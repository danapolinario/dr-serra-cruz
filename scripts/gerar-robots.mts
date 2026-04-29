/**
 * Gera public/robots.txt a partir de VITE_SITE_URL.
 * - Allow geral.
 * - Disallow /api/ (serverless/HTTP) e /api/gone (410 handler).
 * - Sitemap absoluto.
 */
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const SITE_URL = (process.env.VITE_SITE_URL || 'https://www.drserracruz.com.br').replace(/\/$/, '');

const content = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
`;

const out = join(root, 'public/robots.txt');
writeFileSync(out, content, 'utf8');
console.log(`robots.txt escrito: ${out}`);
