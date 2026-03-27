import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'public', 'imagens', 'redes-sociais');

/** PNGs em public/imagens/redes-sociais/fontes/ (ou SEGUIDORES_ASSETS) */
const assetsDir =
  process.env.SEGUIDORES_ASSETS || path.join(root, 'public', 'imagens', 'redes-sociais', 'fontes');

const pairs = [
  ['avatar1-f15a5313-0448-443c-a8a4-1bcfde1ba8ab.png', 'seguidor-instagram-01.webp'],
  ['avatar2-18ee030c-d6e8-4601-b506-8382b69fa87d.png', 'seguidor-instagram-02.webp'],
  ['avatar3-2be2c169-42c9-4ee8-9873-b26e821bb41e.png', 'seguidor-instagram-03.webp'],
  ['avatar4-8cc17703-d7d9-474d-b289-764ad378e242.png', 'seguidor-instagram-04.webp'],
  ['avatar5-b1359db2-16af-4cdd-b8ff-10d7f7339bcd.png', 'seguidor-instagram-05.webp'],
];

fs.mkdirSync(outDir, { recursive: true });

for (const [file, outName] of pairs) {
  const src = path.join(assetsDir, file);
  if (!fs.existsSync(src)) {
    console.error('Ficheiro em falta:', src);
    process.exit(1);
  }
  const dest = path.join(outDir, outName);
  await sharp(src)
    .rotate()
    .resize(96, 96, { fit: 'cover', position: 'centre' })
    .webp({ quality: 80, effort: 4 })
    .withMetadata({ density: 72 })
    .toFile(dest);
  const st = fs.statSync(dest);
  console.log(outName, `${(st.size / 1024).toFixed(1)} KB`);
}
console.log('Concluído:', outDir);
