/**
 * Valida redirects HTTP contra uma base (produção ou preview).
 *
 * Uso:
 *   VERIFY_BASE=https://www.drserracruz.com.br npm run verify:redirects
 *   VERIFY_BASE=https://preview-xxx.vercel.app npm run verify:redirects
 *
 * Verifica:
 * - Todas as entradas `redirects` em vercel.json (status 301 + Location)
 * - Linhas em scripts/wordpress-migration-redirects.csv com redirect 301
 */
import { readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const BASE = (process.env.VERIFY_BASE ?? 'https://www.drserracruz.com.br').replace(/\/$/, '');

function normalizeLoc(h) {
  if (!h) return '';
  const s = h.trim();
  if (s.startsWith('http')) {
    try {
      const u = new URL(s);
      return u.pathname + (u.search || '');
    } catch {
      return s;
    }
  }
  return s.startsWith('/') ? s : `/${s}`;
}

function parseCsvLine(line) {
  const cols = [];
  let cur = '';
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (inQ) {
      if (c === '"') {
        if (line[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQ = false;
        }
      } else {
        cur += c;
      }
    } else if (c === '"') {
      inQ = true;
    } else if (c === ',') {
      cols.push(cur);
      cur = '';
    } else {
      cur += c;
    }
  }
  cols.push(cur);
  return cols;
}

async function checkRedirect(sourcePath, expectedDest, statusCode = 301) {
  const url = `${BASE}${sourcePath.startsWith('/') ? sourcePath : `/${sourcePath}`}`;
  const res = await fetch(url, { redirect: 'manual', headers: { 'user-agent': 'verify-redirects/1.0' } });
  const loc = res.headers.get('location');
  const normLoc = normalizeLoc(loc ?? '');
  const normExp = normalizeLoc(expectedDest);

  const ok =
    res.status === statusCode &&
    (normLoc === normExp || normLoc.replace(/\/$/, '') === normExp.replace(/\/$/, ''));

  return { ok, url, status: res.status, location: normLoc, expected: normExp };
}

async function main() {
  const vercelPath = join(root, 'vercel.json');
  const vercel = JSON.parse(readFileSync(vercelPath, 'utf8'));
  /** @type {Map<string, { dest: string; code: number }>} */
  const bySource = new Map();

  for (const r of vercel.redirects ?? []) {
    const sourcePath = r.source.startsWith('/') ? r.source : `/${r.source}`;
    bySource.set(sourcePath, { dest: r.destination, code: r.statusCode ?? 301 });
  }

  const csvPath = join(root, 'scripts/wordpress-migration-redirects.csv');
  if (existsSync(csvPath)) {
    const lines = readFileSync(csvPath, 'utf8').trim().split('\n');
    for (let i = 1; i < lines.length; i++) {
      const cols = parseCsvLine(lines[i]);
      const src = cols[0]?.trim();
      const dst = cols[1]?.trim();
      const code = cols[2]?.trim();
      if (!src || !dst || code !== '301') continue;
      const sourcePath = src.startsWith('/') ? src : `/${src}`;
      if (!bySource.has(sourcePath)) {
        bySource.set(sourcePath, { dest: dst, code: 301 });
      }
    }
  }

  const checks = [...bySource.entries()].map(([sourcePath, v]) => ({
    sourcePath,
    dest: v.dest,
    code: v.code,
  }));

  console.log(`VERIFY_BASE=${BASE}`);
  console.log(`A verificar ${checks.length} redirects…`);

  let failed = 0;
  for (const c of checks) {
    const r = await checkRedirect(c.sourcePath, c.dest, c.code);
    if (!r.ok) {
      failed++;
      console.error(
        `FAIL: ${c.sourcePath} → esperado ${c.code} ${c.dest}; obtido ${r.status} ${r.location || '(sem Location)'}`,
      );
    }
  }

  if (failed > 0) {
    console.error(`\n${failed} falha(s).`);
    process.exit(1);
  }
  console.log('OK: todos os redirects verificados.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
