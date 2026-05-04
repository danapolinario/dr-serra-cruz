/**
 * Lista classes `fa-*` usadas no código (auditoria Font Awesome self-host via Vite).
 */
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

function walk(dir, files = []) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return files;
  }
  for (const ent of entries) {
    const p = join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (/\.(tsx|ts|jsx|js)$/.test(ent.name)) files.push(p);
  }
  return files;
}

function main() {
  const dirs = ['components', 'pages', 'src'].map((d) => join(root, d));
  /** @type {string[]} */
  const files = [];
  for (const d of dirs) {
    if (existsSync(d) && statSync(d).isDirectory()) walk(d, files);
  }

  const icons = new Set();
  const re = /\bfa[a-zA-Z0-9-]+\b/g;
  for (const f of files) {
    const text = readFileSync(f, 'utf8');
    let m;
    while ((m = re.exec(text)) !== null) {
      if (m[0].startsWith('fa')) icons.add(m[0]);
    }
  }

  const list = [...icons].sort();
  const outFile = join(root, 'scripts/fa-icons-used.txt');
  writeFileSync(outFile, list.join('\n') + '\n', 'utf8');
  console.log(`Ícones/tokens únicos (fa*): ${list.length}. Lista: ${outFile}`);
}

main();
