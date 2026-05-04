/**
 * Compara wordpress-urls-live.csv com app-canonical-urls.csv e regras em vercel.json.
 * Saída: scripts/migration-gap-report.md
 *
 * Requer: scripts/wordpress-urls-live.csv (rodar auditar-wordpress-urls.mjs antes, ou usar CSV vazio com nota)
 */
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

function normalizePath(p) {
  if (!p || p === '/') return '/';
  let s = p.trim();
  try {
    if (s.startsWith('http')) {
      const u = new URL(s);
      s = u.pathname + (u.search || '');
    }
  } catch {
    /* ignore */
  }
  if (s.length > 1 && s.endsWith('/')) s = s.slice(0, -1);
  return s || '/';
}

function loadCsvPaths(csvPath, pathCol = 0) {
  if (!existsSync(csvPath)) return [];
  const text = readFileSync(csvPath, 'utf8');
  const lines = text.trim().split('\n');
  const out = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    const cols = line.split(',');
    const raw = cols[pathCol]?.replace(/^"|"$/g, '').replace(/""/g, '"') ?? '';
    out.push(normalizePath(raw));
  }
  return out;
}

function loadVercelRules() {
  const vercelPath = join(root, 'vercel.json');
  const j = JSON.parse(readFileSync(vercelPath, 'utf8'));
  /** @type {Map<string, { dest: string; kind: string }>} */
  const bySource = new Map();
  for (const r of j.redirects ?? []) {
    const src = normalizePath(r.source);
    bySource.set(src, { dest: r.destination, kind: 'redirect' });
  }
  for (const r of j.rewrites ?? []) {
    const src = normalizePath(r.source);
    if (!bySource.has(src)) {
      bySource.set(src, { dest: r.destination, kind: 'rewrite' });
    }
  }
  return bySource;
}

function main() {
  const wpCsv = join(root, 'scripts/wordpress-urls-live.csv');
  const appCsv = join(root, 'scripts/app-canonical-urls.csv');

  const wpPaths = loadCsvPaths(wpCsv, 0);
  const appPaths = new Set(loadCsvPaths(appCsv, 0));
  const rules = loadVercelRules();

  const lines = [
    '# Relatório: gaps de migração WordPress → app',
    '',
    'Gerado por `scripts/diff-wordpress-vs-app.mjs`. Cruze com o Top 50 do Google Search Console.',
    '',
  ];

  if (!existsSync(wpCsv)) {
    lines.push(
      '## Aviso',
      '',
      '`scripts/wordpress-urls-live.csv` não existe. Execute `npm run audit:wordpress-urls` após o site WP estar acessível.',
      '',
    );
  }

  lines.push('## Resumo', '', `- URLs no sitemap WP: ${wpPaths.length}`, `- URLs canónicas da app: ${appPaths.size}`, '');

  /** @type {string[]} */
  const noRule = [];
  /** @type {string[]} */
  const toBlogGeneric = [];
  /** @type {string[]} */
  const toGone = [];
  /** @type {string[]} */
  const samePathOk = [];

  for (const p of wpPaths) {
    if (appPaths.has(p)) {
      samePathOk.push(p);
      continue;
    }
    const rule = rules.get(p);
    if (!rule) {
      noRule.push(p);
      continue;
    }
    if (rule.dest === '/api/gone' || rule.dest.includes('/api/gone')) {
      toGone.push(`${p} → ${rule.dest}`);
      continue;
    }
    if (rule.dest === '/blog' || rule.dest === '/blog/') {
      toBlogGeneric.push(`${p} → ${rule.dest}`);
      continue;
    }
  }

  lines.push(
    '## URLs WP que já existem na app (mesmo path)',
    '',
    String(samePathOk.length),
    '',
  );

  lines.push('## Gaps críticos: URL WP sem regra e sem path equivalente na app', '', String(noRule.length), '');
  for (const p of noRule.slice(0, 200)) {
    lines.push(`- \`${p}\``);
  }
  if (noRule.length > 200) lines.push(`- … e mais ${noRule.length - 200}`);
  lines.push('');

  lines.push(
    '## URLs com destino `/blog` genérico (rever equity)',
    '',
    String(toBlogGeneric.length),
    '',
  );
  for (const x of toBlogGeneric.slice(0, 80)) lines.push(`- ${x}`);
  lines.push('');

  lines.push('## URLs para `/api/gone` ou gone (confirmar intenção)', '', String(toGone.length), '');
  for (const x of toGone.slice(0, 80)) lines.push(`- ${x}`);
  lines.push('');

  const outPath = join(root, 'scripts/migration-gap-report.md');
  writeFileSync(outPath, lines.join('\n') + '\n', 'utf8');
  console.log('Escrito:', outPath);
}

main();
