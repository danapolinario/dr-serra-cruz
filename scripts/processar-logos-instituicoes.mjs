/**
 * Converte logos (PNG/JPG) para WebP com remoção de fundo claro/escuro ligado às bordas
 * (branco típico de JPEG; preto em logos tipo faixa larga).
 * Altura máx. 120px, 72dpi.
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const fontesDir = path.join(root, 'public', 'imagens', 'instituicoes-excelencia', 'fontes');
const outDir = path.join(root, 'public', 'imagens', 'instituicoes-excelencia');

const pairs = [
  ['logo-sbrate-94616a53-4e07-489f-bcd9-8ad894b8055b.png', 'instituicao-sbrate.webp'],
  ['SBCJ-c50b2a5a-3022-4664-81cf-ba4ad776c059.png', 'instituicao-sbcj.webp'],
  ['efort-80427224-cab0-4f62-be01-d477e5e59ee2.png', 'instituicao-efort-01.webp'],
  ['amb-logo-1c6c8e1b-d57f-474a-a3b2-0ccda01eb638.png', 'instituicao-amb.webp'],
  ['fifa-medical-center-serra-cruz-37b5b06d-eefc-42b6-9962-1cee1a835e93.png', 'instituicao-fifa-centro-medico-excelencia.webp'],
  ['logomarca-uerj-b7ace902-b004-407c-b0f4-5b00fe094b51.png', 'instituicao-uerj.webp'],
  ['logo_into-be4f3529-1531-46d9-a8f0-7401c033b270.png', 'instituicao-into.webp'],
  ['AOSSM_OpenGraphImage_1x-81341493-2d56-40b6-be6b-c3609ef027e5.png', 'instituicao-aossm.webp'],
  ['steadman-clinic-02e8e67d-5187-4758-95aa-0899d195f5de.png', 'instituicao-steadman-clinic.webp'],
  ['efort-logo-73acd0f5-553c-4dc6-bf58-c19c5353cfd1.png', 'instituicao-efort-02.webp'],
];

const MAX_H = 120;

/**
 * Remove pixels de fundo ligados à borda da imagem (BFS).
 * Preserva branco/preto no interior do logótipo que não toca a moldura.
 */
function floodRemoveFromEdges(rgba, width, height, isBackground) {
  const out = Buffer.from(rgba);
  const visited = new Uint8Array(width * height);
  const queue = [];
  const pix = (x, y) => (y * width + x) * 4;
  const inBounds = (x, y) => x >= 0 && x < width && y >= 0 && y < height;

  const isCandidate = (x, y) => {
    const i = pix(x, y);
    if (out[i + 3] === 0) return false;
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    return isBackground(r, g, b);
  };

  const pushEdge = (x, y) => {
    if (!inBounds(x, y)) return;
    const p = y * width + x;
    if (visited[p]) return;
    if (!isCandidate(x, y)) return;
    visited[p] = 1;
    queue.push([x, y]);
  };

  for (let x = 0; x < width; x++) {
    pushEdge(x, 0);
    pushEdge(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    pushEdge(0, y);
    pushEdge(width - 1, y);
  }

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (queue.length) {
    const [x, y] = queue.shift();
    const i = pix(x, y);
    out[i + 3] = 0;
    for (const [dx, dy] of dirs) {
      const nx = x + dx;
      const ny = y + dy;
      if (!inBounds(nx, ny)) continue;
      const np = ny * width + nx;
      if (visited[np]) continue;
      if (!isCandidate(nx, ny)) continue;
      visited[np] = 1;
      queue.push([nx, ny]);
    }
  }
  return out;
}

/** Branco e cinza muito claro (artefatos JPEG). */
function nearWhite(r, g, b) {
  return Math.sqrt((255 - r) ** 2 + (255 - g) ** 2 + (255 - b) ** 2) < 44;
}

/** Preto e cinza muito escuro (fundos escuros ligados à borda). */
function nearBlack(r, g, b) {
  return Math.sqrt(r * r + g * g + b * b) < 52;
}

async function removeBackgroundsFromSharpInput(pipeline) {
  const { data, info } = await pipeline.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  let buf = floodRemoveFromEdges(data, width, height, nearWhite);
  buf = floodRemoveFromEdges(buf, width, height, nearBlack);
  return sharp(buf, {
    raw: { width, height, channels: 4 },
  });
}

fs.mkdirSync(outDir, { recursive: true });

for (const [file, outName] of pairs) {
  const src = path.join(fontesDir, file);
  if (!fs.existsSync(src)) {
    console.error('Em falta:', src);
    process.exit(1);
  }
  const dest = path.join(outDir, outName);
  const afterBg = await removeBackgroundsFromSharpInput(sharp(src).rotate());
  await afterBg
    .resize({ height: MAX_H, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82, effort: 4, alphaQuality: 95 })
    .withMetadata({ density: 72 })
    .toFile(dest);
  const st = fs.statSync(dest);
  console.log(outName, `${(st.size / 1024).toFixed(1)} KB`);
}
console.log('Concluído:', outDir);
