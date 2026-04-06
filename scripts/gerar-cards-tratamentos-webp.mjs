/**
 * Gera versões leves das imagens de hero (inicio/*.webp) para hover nos cards da secção Tratamentos.
 * Largura máx. 720px, WebP ~78% — adequado a cards ~400px com retina 2x.
 * Executar: node scripts/gerar-cards-tratamentos-webp.mjs
 */
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const inDir = path.join(root, 'public', 'imagens', 'inicio');
const outDir = path.join(inDir, 'cards');

const MAX_W = 720;
const QUALITY = 78;

/** Fonte em inicio/ → saída em inicio/cards/ */
const JOBS = [
  { src: 'mostrando-exame-na-tela.webp', out: 'card-mostrando-exame-na-tela.webp' },
  { src: 'examinando-paciente.webp', out: 'card-examinando-paciente.webp' },
  { src: 'dr-raphael-serra-cruz-rio-open-tenis.webp', out: 'card-rio-open-tenis.webp' },
  { src: 'retrato-de-frente.webp', out: 'card-retrato-de-frente.webp' },
];

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  for (const { src, out } of JOBS) {
    const from = path.join(inDir, src);
    const dest = path.join(outDir, out);
    if (!fs.existsSync(from)) {
      console.warn(`Ignorado (ficheiro em falta): ${from}`);
      continue;
    }
    const buf = await sharp(from).rotate().resize(MAX_W, null, { fit: 'inside', withoutEnlargement: true }).webp({ quality: QUALITY, effort: 4 }).toBuffer();
    await fs.promises.writeFile(dest, buf);
    const kb = (buf.length / 1024).toFixed(1);
    console.log(`${out} (${kb} KB)`);
  }
  console.log('Concluído:', outDir);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
