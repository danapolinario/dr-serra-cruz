/**
 * Relatório de links internos entre páginas clínicas e posts do blog.
 * Saída: scripts/internal-linking-report.md
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const CLINICAL_PATHS = [
  '/meniscos',
  '/artrose',
  '/cartilagem',
  '/lesoes-ligamentares',
  '/condromalacia-patelar',
  '/trauma-do-esporte',
];

const BLOG_SKIP = new Set(['BlogPostLayout.tsx', 'BlogIndex.tsx']);

function countOccurrences(text, needle) {
  let n = 0;
  let i = 0;
  while ((i = text.indexOf(needle, i)) !== -1) {
    n++;
    i += needle.length;
  }
  return n;
}

function main() {
  const blogDir = join(root, 'src/pages/blog');
  const blogFiles = readdirSync(blogDir).filter((f) => f.endsWith('.tsx') && !BLOG_SKIP.has(f));

  /** @type {string[]} */
  const lines = [
    '# Auditoria de linking interno (clínica ↔ blog)',
    '',
    'Gerado por `npm run audit:linking`. Meta: pelo menos 1 link contextual por direção onde aplicável.',
    '',
    '## Posts → páginas clínicas (`to="/..."`)',
    '',
    '| Ficheiro | ' + CLINICAL_PATHS.map((p) => p.replace('/', '')).join(' | ') + ' |',
    '|---|' + CLINICAL_PATHS.map(() => '---').join('|') + '|',
  ];

  for (const bf of blogFiles.sort()) {
    const text = readFileSync(join(blogDir, bf), 'utf8');
    const cells = CLINICAL_PATHS.map((p) => {
      const patterns = [`to="${p}"`, `to='${p}'`, `href="${p}"`, `href='${p}'`];
      const sum = patterns.reduce((acc, pat) => acc + countOccurrences(text, pat), 0);
      return String(sum);
    });
    lines.push(`| ${bf} | ${cells.join(' | ')} |`);
  }

  lines.push('', '## Páginas clínicas → blog', '', '| Página | Links /blog/* |', '|---|---|');

  const clinicalFiles = [
    ['Meniscos.tsx', '/meniscos'],
    ['Artrose.tsx', '/artrose'],
    ['Cartilagem.tsx', '/cartilagem'],
    ['LesoesLigamentares.tsx', '/lesoes-ligamentares'],
    ['CondromalaciaPatelar.tsx', '/condromalacia-patelar'],
    ['TraumaDoEsporte.tsx', '/trauma-do-esporte'],
  ];

  for (const [fname] of clinicalFiles) {
    const p = join(root, 'pages', fname);
    if (!existsSync(p)) continue;
    const text = readFileSync(p, 'utf8');
    const n =
      countOccurrences(text, 'to="/blog/') +
      countOccurrences(text, "to='/blog/") +
      countOccurrences(text, 'href="/blog/') +
      countOccurrences(text, "href='/blog/");
    lines.push(`| ${fname} | ${n} |`);
  }

  lines.push('');
  const out = join(root, 'scripts/internal-linking-report.md');
  writeFileSync(out, lines.join('\n') + '\n', 'utf8');
  console.log('Escrito:', out);
}

main();
