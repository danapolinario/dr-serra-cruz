/**
 * Busca posts publicados no Neon e grava src/data/dynamicPosts.json para o build estático.
 * Sem DATABASE_URL, grava [] e o build continua normalmente.
 */
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { neon } from '@neondatabase/serverless';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outPath = join(root, 'src/data/dynamicPosts.json');

function loadEnvFile(filename) {
  const path = join(root, filename);
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq);
    let value = trimmed.slice(eq + 1);
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadEnvFile('.env');
loadEnvFile('.env.local');

function toDateOnly(value) {
  if (!value) return '';
  const str = String(value);
  return str.includes('T') ? str.slice(0, 10) : str;
}

function formatDatePtBr(isoDate) {
  const dateOnly = toDateOnly(isoDate);
  if (!dateOnly) return '';
  const d = new Date(`${dateOnly}T12:00:00-03:00`);
  return d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
}

async function main() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    console.warn('[fetch-posts] DATABASE_URL ausente — dynamicPosts.json = []');
    writeFileSync(outPath, '[]\n', 'utf8');
    return;
  }

  const sql = neon(databaseUrl);

  let rows;
  try {
    rows = await sql`
      SELECT
        slug, title, excerpt, category, content_html,
        hero_image_url, hero_alt,
        date_published, date_reviewed,
        reviewer_credentials, schema_about
      FROM posts
      WHERE status = 'published'
      ORDER BY date_published DESC NULLS LAST, updated_at DESC
    `;
  } catch (e) {
    console.error('[fetch-posts] Erro ao consultar banco:', e.message);
    console.warn('[fetch-posts] Mantendo dynamicPosts.json = []');
    writeFileSync(outPath, '[]\n', 'utf8');
    return;
  }

  const posts = rows.map((row) => ({
    id: row.slug,
    title: row.title,
    excerpt: row.excerpt ?? '',
    image: row.hero_image_url ?? '',
    date: formatDatePtBr(row.date_published),
    datePublishedIso: toDateOnly(row.date_published) || new Date().toISOString().slice(0, 10),
    dateReviewedIso: toDateOnly(row.date_reviewed) || undefined,
    reviewerCredentials: row.reviewer_credentials ?? undefined,
    schemaAbout: row.schema_about ?? undefined,
    category: row.category ?? 'Ortopedia',
    contentHtml: row.content_html ?? '',
    heroAlt: row.hero_alt ?? row.title,
  }));

  writeFileSync(outPath, JSON.stringify(posts, null, 2) + '\n', 'utf8');
  console.log(`[fetch-posts] ${posts.length} post(s) publicado(s) → ${outPath}`);
}

main();
