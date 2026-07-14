/**
 * Aplica scripts/db/schema.sql via driver Neon (sem precisar de psql).
 * Uso: npm run db:schema
 * Lê DATABASE_URL de process.env ou de .env.local / .env
 */
import { readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { neon } from '@neondatabase/serverless';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

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

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error('[db:schema] DATABASE_URL não encontrado.');
  console.error('  Conecte o Neon na Vercel e rode: npx vercel env pull .env.local --yes');
  process.exit(1);
}

const sql = neon(databaseUrl);

async function main() {
  console.log('[db:schema] Criando tabela posts…');

  await sql`
    CREATE TABLE IF NOT EXISTS posts (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      excerpt TEXT NOT NULL DEFAULT '',
      category TEXT NOT NULL DEFAULT 'Ortopedia',
      content_html TEXT NOT NULL DEFAULT '',
      hero_image_url TEXT NOT NULL DEFAULT '',
      hero_alt TEXT NOT NULL DEFAULT '',
      status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
      date_published DATE,
      date_reviewed DATE,
      reviewer_credentials TEXT,
      schema_about TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  await sql`CREATE INDEX IF NOT EXISTS posts_status_idx ON posts (status)`;
  await sql`CREATE INDEX IF NOT EXISTS posts_date_published_idx ON posts (date_published DESC NULLS LAST)`;

  const rows = await sql`
    SELECT column_name
    FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'posts'
    ORDER BY ordinal_position
  `;

  console.log(`[db:schema] OK — tabela posts com ${rows.length} colunas.`);
}

main().catch((e) => {
  console.error('[db:schema] Erro:', e.message);
  process.exit(1);
});
