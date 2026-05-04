/**
 * Valida redirects HTTP contra uma base (produção ou preview).
 *
 * - Segue cadeias 308 → 301 (Vercel com `trailingSlash: false` normaliza barras antes do destino).
 * - Aceita 301, 302, 307, 308 como hops intermédios; o último estado não-redirect deve ser 200.
 * - Compara o path final (pathname + search) com o destino esperado.
 * - Ignora redirects "identidade" (origem = destino).
 *
 * Por defeito só lê `vercel.json`. O CSV de migração é notas humanas e costuma dessincronizar.
 *   VERIFY_MERGE_CSV=1 — inclui linhas 301 do CSV que ainda não existem no mapa do vercel.json.
 *
 * Uso:
 *   VERIFY_BASE=https://dr-raphael-serra-cruz.vercel.app npm run verify:redirects
 */
import { readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const BASE = (process.env.VERIFY_BASE ?? 'https://www.drserracruz.com.br').replace(/\/$/, '');
const MERGE_CSV = process.env.VERIFY_MERGE_CSV === '1';

const REDIRECT_STATUSES = new Set([301, 302, 307, 308]);

/** pathname + search, barra final removida exceto na raiz */
function canonicalPath(pathname, search = '') {
  let p = pathname || '/';
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  return p + (search || '');
}

function normalizeDest(s) {
  if (!s) return '';
  const t = s.trim();
  if (t.startsWith('http')) {
    try {
      const u = new URL(t);
      return canonicalPath(u.pathname, u.search);
    } catch {
      return t;
    }
  }
  const path = t.startsWith('/') ? t : `/${t}`;
  if (path.includes('?')) {
    const i = path.indexOf('?');
    return canonicalPath(path.slice(0, i), path.slice(i));
  }
  return canonicalPath(path, '');
}

function buildStartUrl(sourcePath) {
  if (sourcePath.startsWith('http')) return sourcePath;
  if (sourcePath.startsWith('/?')) return `${BASE}${sourcePath}`;
  if (sourcePath === '/') return `${BASE}/`;
  const p = sourcePath.startsWith('/') ? sourcePath : `/${sourcePath}`;
  return `${BASE}${p}`;
}

/** Segmentos dinâmicos Vercel (`:slug`, `:path*`, `...-:rest*`) — não são URLs pedíveis literalmente */
function hasDynamicSegments(sourcePath) {
  return /(^|[/-]):([a-zA-Z][a-zA-Z0-9]*)(\*|\+)?(?=\/|$)/.test(sourcePath);
}

/** Um URL concreto por padrão dinâmico em vercel.json */
const DYNAMIC_PATTERN_SAMPLES = [
  { label: '/page/:path*', sourcePath: '/page/2', expectedFinalPath: '/blog' },
  { label: '/tag/:path*', sourcePath: '/tag/exemplo', expectedFinalPath: '/blog' },
  { label: '/category/:path*', sourcePath: '/category/noticias', expectedFinalPath: '/blog' },
  { label: '/author/:path*', sourcePath: '/author/exemplo', expectedFinalPath: '/sobre' },
  {
    label: 'slug WP com sufixo (:rest*)',
    sourcePath:
      '/futebol-e-medicina-o-brasil-mostrando-sua-forca-no-cenario-global-%e2%9a%bd%f0%9f%a9%ba%f0%9f%87%a7%f0%9f%87%b7',
    expectedFinalPath: '/blog/experiencia-no-esporte-clube-de-regatas-do-flamengo',
  },
];

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

/**
 * Segue redirects até status final não-redireção. Devolve path canónico da URL onde paramos.
 */
async function followToFinalPath(startUrl, maxHops = 20) {
  let url = startUrl;
  for (let hop = 0; hop < maxHops; hop++) {
    const res = await fetch(url, {
      redirect: 'manual',
      headers: { 'user-agent': 'verify-redirects/1.0' },
    });

    if (!REDIRECT_STATUSES.has(res.status)) {
      const u = new URL(url);
      return {
        ok: true,
        finalPath: canonicalPath(u.pathname, u.search),
        finalStatus: res.status,
        hops: hop,
      };
    }

    const loc = res.headers.get('location');
    if (!loc) {
      return {
        ok: false,
        error: `redirect ${res.status} sem Location`,
        finalStatus: res.status,
        hops: hop,
      };
    }

    url = new URL(loc, url).href;
  }

  return { ok: false, error: 'demasiados redirects', hops: maxHops };
}

async function main() {
  const vercelPath = join(root, 'vercel.json');
  const vercel = JSON.parse(readFileSync(vercelPath, 'utf8'));

  /** @type {Map<string, string>} sourcePath → destination path */
  const bySource = new Map();

  for (const r of vercel.redirects ?? []) {
    /** `has` / `missing` = condicionais; não são um único par path→destino para fetch */
    if (Array.isArray(r.has) && r.has.length > 0) continue;
    if (Array.isArray(r.missing) && r.missing.length > 0) continue;
    const src = r.source.startsWith('/') ? r.source : `/${r.source}`;
    if (hasDynamicSegments(src)) continue;
    bySource.set(src, r.destination);
  }

  const csvPath = join(root, 'scripts/wordpress-migration-redirects.csv');
  if (MERGE_CSV && existsSync(csvPath)) {
    const lines = readFileSync(csvPath, 'utf8').trim().split('\n');
    for (let i = 1; i < lines.length; i++) {
      const cols = parseCsvLine(lines[i]);
      const src = cols[0]?.trim();
      const dst = cols[1]?.trim();
      const code = cols[2]?.trim();
      if (!src || !dst || code !== '301') continue;
      const sourcePath = src.startsWith('/') ? src : `/${src}`;
      if (!bySource.has(sourcePath)) {
        bySource.set(sourcePath, dst);
      }
    }
  }

  /** Redirects condicionais do vercel.json (`has`) não são listados como paths literais — cobrir aqui */
  const extraChecks = [
    {
      label: 'legacy WordPress ?p=4457',
      startUrl: buildStartUrl('/?p=4457'),
      expectedFinalPath: normalizeDest('/blog/ortopedista-brasileiro-na-europa-telemedicina'),
    },
    {
      label: 'legacy WordPress ?s=',
      startUrl: buildStartUrl('/?s=menisco'),
      expectedFinalPath: '/blog',
    },
  ];

  /** Destinos esperados após cadeia (mesmo URL que utilizadores/crawlers obtêm sem assumir um único hop) */
  const checks = [...bySource.entries()].map(([sourcePath, dest]) => ({
    label: sourcePath,
    startUrl: buildStartUrl(sourcePath),
    expectedFinalPath: normalizeDest(dest),
  }));

  const dynamicChecks = DYNAMIC_PATTERN_SAMPLES.map((s) => ({
    label: `${s.label} (ex.: ${s.sourcePath})`,
    startUrl: buildStartUrl(s.sourcePath),
    expectedFinalPath: normalizeDest(s.expectedFinalPath),
  }));

  const allChecks = [...checks, ...dynamicChecks, ...extraChecks];

  console.log(`VERIFY_BASE=${BASE}`);
  console.log(`VERIFY_MERGE_CSV=${MERGE_CSV ? '1 (CSV ligado)' : '0 (só vercel.json)'}`);
  console.log(`A verificar ${allChecks.length} destinos…`);

  let failed = 0;
  let skipped = 0;

  for (const c of allChecks) {
    const start = new URL(c.startUrl);
    const startPathNorm = canonicalPath(start.pathname, start.search);

    if (startPathNorm === c.expectedFinalPath) {
      skipped++;
      continue;
    }

    const result = await followToFinalPath(c.startUrl);

    if (!result.ok) {
      failed++;
      console.error(`FAIL: ${c.label} → ${result.error ?? 'erro'}`);
      continue;
    }

    const match = result.finalPath === c.expectedFinalPath;

    if (!match || result.finalStatus !== 200) {
      failed++;
      console.error(
        `FAIL: ${c.label}\n       esperado path final ${c.expectedFinalPath} (HTTP 200)\n       obtido ${result.finalPath} (HTTP ${result.finalStatus}) após ${result.hops} hop(s)`,
      );
    }
  }

  if (skipped > 0) console.log(`Ignorados (origem = destino): ${skipped}`);

  if (failed > 0) {
    console.error(`\n${failed} falha(s).`);
    process.exit(1);
  }
  console.log('OK: todos os redirects verificados (path final após cadeia).');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
