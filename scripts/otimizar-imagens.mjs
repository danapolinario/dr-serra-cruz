/**
 * Descarrega imagens do site WordPress, otimiza (WebP, largura máx., ~72dpi de metadados via sharp)
 * e grava em public/imagens/. Executar: node scripts/otimizar-imagens.mjs
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'public', 'imagens');

const B = 'https://www.drserracruz.com.br/wp-content/uploads';

/** @typedef {{ url: string, out: string, maxW?: number, thumb?: { out: string, maxW: number } }} Asset */

/** @type {Asset[]} */
const assets = [
  { url: `${B}/2020/05/Raphael-Serra-Cruz19-01-removebg-preview-1.png`, out: 'marca/retrato-raphael-serra-cruz.webp', maxW: 480 },
  { url: `${B}/2021/07/EXPLICANDO-NO-CONSULTORIO-1536x1024.jpg`, out: 'inicio/explicando-no-consultorio.webp', maxW: 1600 },
  { url: `${B}/2021/09/RETRATO-DE-FRENTE-683x1024.jpg`, out: 'inicio/retrato-de-frente.webp', maxW: 900 },
  { url: `${B}/2021/07/EXAMINANDO-PACIENTE-CORTAR-O-PE-DA-PACIENTE-DA-FOTO-scaled-e1627286635435.jpg`, out: 'inicio/examinando-paciente.webp', maxW: 1920 },
  { url: `${B}/2021/07/MOSTRANDO-EXAME-NA-TELA-scaled.jpg`, out: 'inicio/mostrando-exame-na-tela.webp', maxW: 1920 },
  { url: `${B}/2021/07/BIOGRAFICA-SENTADO-NA-CADEIRA-scaled.jpg`, out: 'sobre/fundo-biografico-sentado.webp', maxW: 1920 },
  { url: `${B}/2021/07/PALESTRANDO-NO-HSVP-300x225.jpg`, out: 'sobre/palestrando-no-hsvp.webp', maxW: 800 },
  { url: `${B}/2021/07/MOSTRANDO-EXAME-NA-TELA-200x300.jpg`, out: 'sobre/mostrando-exame-pequeno.webp', maxW: 600 },
  { url: `${B}/2021/07/EXAMINANDO-PACIENTE-CORTAR-O-PE-DA-PACIENTE-DA-FOTO-scaled-e1627286635435-300x192.jpg`, out: 'sobre/examinando-paciente-pequeno.webp', maxW: 600 },
  { url: `${B}/2021/08/banner-3-e1630176694460-300x133.jpg`, out: 'sobre/banner-3.webp', maxW: 800 },
  { url: `${B}/2021/09/ENFERMARIA-UERJ.jpg`, out: 'sobre/enfermaria-uerj.webp', maxW: 900 },
  { url: `${B}/2021/09/CADEIRA-FORMATURA.jpg`, out: 'sobre/cadeira-formatura.webp', maxW: 900 },
  { url: `${B}/2021/07/1.jpg`, out: 'sobre/formacao-into-01.webp', maxW: 900 },
  { url: `${B}/2021/09/ENTRADA-DE-STANFORD.jpg`, out: 'sobre/entrada-stanford.webp', maxW: 900 },
  { url: `${B}/2021/09/COM-BERTRAND-LYON.jpg`, out: 'sobre/com-bertrand-lyon.webp', maxW: 900 },
  { url: `${B}/2021/07/10.jpg`, out: 'sobre/chelsea-estadio.webp', maxW: 900 },
  { url: `${B}/2021/07/Com-dr.-Jose-Luis-Runco.jpg`, out: 'sobre/com-dr-jose-luis-runco.webp', maxW: 1200 },
  { url: `${B}/2021/07/Estadio-do-Morumbi-SP.jpg`, out: 'sobre/estadio-morumbi.webp', maxW: 1200 },
  { url: `${B}/2021/07/OLHANDO-PRA-LUVA-CC-225x300.jpg`, out: 'sobre/olhando-para-luva-cc.webp', maxW: 600 },
  { url: `${B}/2021/07/WhatsApp-Image-2021-07-01-at-16.28.07-1-300x296.jpeg`, out: 'sobre/cirurgia-centro.webp', maxW: 600 },
  { url: `${B}/2021/07/STAFF-VAIL-INTERNATIONAL-KNEE-COMPLEX-SURGERY.jpg`, out: 'sobre/staff-vail.webp', maxW: 900 },
  { url: `${B}/2021/07/LABORATORIO-DISSECANDO-COM-LAPRADE-E-JORGE-CHAHLA-CLOSE-EM-NOS-3-e1627286718919.jpg`, out: 'sobre/laboratorio-laprace-chahla.webp', maxW: 900 },
  { url: `${B}/2021/07/ESCRITORIO-LAPRADE.jpg`, out: 'sobre/escritorio-laprace.webp', maxW: 900 },
  { url: `${B}/2021/07/ENTRANDO-EM-CAMPO-PARA-ATENDIMENTO.jpg`, out: 'sobre/entrando-em-campo.webp', maxW: 1200 },
  { url: `${B}/2021/08/OLIMPIADAS-EM-FRENTE-A-BANDEIRA-e1630058837939.jpg`, out: 'sobre/olimpiadas-bandeira.webp', maxW: 1200 },
  { url: `${B}/2021/08/LANC387AMENTO_LIVRO_COM_GRANGEIRO_E_RODRIGO_GOES-150x150.jpg`, out: 'sobre/lancamento-livro.webp', maxW: 400 },
  { url: `${B}/2021/08/AULA-PARA-RESIDENTES-SBOT-150x150.jpg`, out: 'sobre/aula-residentes-sbot.webp', maxW: 400 },
  { url: `${B}/2021/08/COM-DIRETORIASBRATE-NO-CONGRESSO-150x150.jpg`, out: 'sobre/diretoria-sbrate-congresso.webp', maxW: 400 },
  { url: `${B}/2021/08/CONGRESSO-SBRATE-scaled-e1630058210688-150x150.jpg`, out: 'sobre/congresso-sbrate.webp', maxW: 400 },
  { url: `${B}/2021/07/GRAMADO-DE-STANFORD-150x150.jpg`, out: 'sobre/gramado-stanford.webp', maxW: 400 },
  { url: `${B}/2021/07/EM-FRENTE-AO-SANTY-LYON-150x150.jpg`, out: 'sobre/frente-santy-lyon.webp', maxW: 400 },
  { url: `${B}/2021/07/CC-COM-LAPRADE-150x150.jpg`, out: 'sobre/cc-com-laprace.webp', maxW: 400 },
  { url: `${B}/2021/07/NORUEGA-OLYMPIATOPPEN-150x150.jpg`, out: 'sobre/noruega-olympiatoppen.webp', maxW: 400 },
  { url: `${B}/2025/03/image6-150x150.jpg`, out: 'sobre/tenis-01.webp', maxW: 400 },
  { url: `${B}/2025/03/image5-150x150.jpg`, out: 'sobre/tenis-02.webp', maxW: 400 },
  { url: `${B}/2025/03/image4-150x150.jpg`, out: 'sobre/tenis-03.webp', maxW: 400 },
  { url: `${B}/2025/03/image7-150x150.jpg`, out: 'sobre/tenis-04.webp', maxW: 400 },
  { url: `${B}/2025/03/image2-150x150.jpg`, out: 'sobre/tenis-05.webp', maxW: 400 },
  { url: `${B}/2025/03/image9.jpg`, out: 'sobre/indaiatuba-01.webp', maxW: 1200 },
  { url: `${B}/2025/03/image8.jpg`, out: 'sobre/indaiatuba-02.webp', maxW: 1200 },
  { url: `${B}/2025/03/image10.jpg`, out: 'sobre/indaiatuba-03.webp', maxW: 1200 },
  {
    url: `${B}/2021/08/Certificado-aossm-Pro-Banner-e-pra-estante-virtual-de-certificados.jpg`,
    out: 'certificados/certificado-aossm.webp',
    maxW: 1600,
    thumb: { out: 'certificados/miniaturas/certificado-aossm.webp', maxW: 420 },
  },
  {
    url: `${B}/2021/08/Certificado-Efort.jpg`,
    out: 'certificados/certificado-efort.webp',
    maxW: 1600,
    thumb: { out: 'certificados/miniaturas/certificado-efort.webp', maxW: 420 },
  },
  {
    url: `${B}/2021/08/CERTIFICADO-Lyon.png`,
    out: 'certificados/certificado-lyon.webp',
    maxW: 1600,
    thumb: { out: 'certificados/miniaturas/certificado-lyon.webp', maxW: 420 },
  },
  {
    url: `${B}/2021/08/Certificado-Residencia-Medica.png`,
    out: 'certificados/certificado-residencia-medica.webp',
    maxW: 1600,
    thumb: { out: 'certificados/miniaturas/certificado-residencia-medica.webp', maxW: 420 },
  },
  {
    url: `${B}/2021/08/CERTIFICADO-SPRI.png`,
    out: 'certificados/certificado-spri.webp',
    maxW: 1600,
    thumb: { out: 'certificados/miniaturas/certificado-spri.webp', maxW: 420 },
  },
  {
    url: `${B}/2021/08/CERTIFICADO-Stanford.png`,
    out: 'certificados/certificado-stanford.webp',
    maxW: 1600,
    thumb: { out: 'certificados/miniaturas/certificado-stanford.webp', maxW: 420 },
  },
  {
    url: `${B}/2021/08/SBCJ.png`,
    out: 'certificados/certificado-sbcj.webp',
    maxW: 1600,
    thumb: { out: 'certificados/miniaturas/certificado-sbcj.webp', maxW: 420 },
  },
  {
    url: `${B}/2021/08/SBOT.png`,
    out: 'certificados/certificado-sbot.webp',
    maxW: 1600,
    thumb: { out: 'certificados/miniaturas/certificado-sbot.webp', maxW: 420 },
  },
  {
    url: `${B}/2021/08/UERJ.png`,
    out: 'certificados/certificado-uerj.webp',
    maxW: 1600,
    thumb: { out: 'certificados/miniaturas/certificado-uerj.webp', maxW: 420 },
  },
  {
    // Original SBRATE.jpg em 2021/08 devolve 404; usar miniatura do Elementor como fonte.
    url: `${B}/elementor/thumbs/SBRATE-plhrjnw3wjjoozpx8ei13gmqfbn7sxh20efmxpq9bs.jpg`,
    out: 'certificados/certificado-sbrate.webp',
    maxW: 1200,
    thumb: { out: 'certificados/miniaturas/certificado-sbrate.webp', maxW: 420 },
  },
  { url: `${B}/2025/08/MANUAL-FIFA-11-PORTUGUES-pdf-1-722x1024.jpg`, out: 'materiais-pacientes/capa-manual-fifa-11.webp', maxW: 900 },
  { url: `${B}/2025/08/POSTER-FIFA-11-INGLES-pdf-1-724x1024.jpg`, out: 'materiais-pacientes/capa-poster-fifa-11.webp', maxW: 900 },
  { url: `${B}/2021/09/RETRATO-BRACO-CRUZADO-scaled-e1630935023289.jpg`, out: 'blog/retrato-braco-cruzado.webp', maxW: 1200 },
  { url: `${B}/2022/06/pexels-kindel-media-7298659-577x1024-1.jpg`, out: 'blog/lesao-menisco-hero.webp', maxW: 1200 },
  {
    url: `${B}/2026/03/Imagem-futurista-de-medico-atendendo-paciente-a-distancia-pelo-computador-sendo-capaz-de-alcancar-todo-o-mundo-1024x1024.png`,
    out: 'blog/telemedicina-europa-hero.webp',
    maxW: 1200,
  },
  { url: `${B}/2026/03/Dr.-Raphael-Serra-Cruz-atendendo-via-telemedicina-fora-do-Brasil-1024x683.jpg`, out: 'blog/telemedicina-atendimento.webp', maxW: 1200 },
  { url: `${B}/2025/07/Cartaz-jornada-820x1024.jpeg`, out: 'blog/jornada-lyonesa-cartaz.webp', maxW: 1000 },
  { url: `${B}/2025/07/Lyon-2012-300x300.jpg`, out: 'blog/jornada-lyon-2012.webp', maxW: 600 },
  { url: `${B}/2025/07/Bertrand-e-Mathieu-768x523.jpg`, out: 'blog/jornada-bertrand-mathieu.webp', maxW: 1000 },
  { url: `${B}/2025/07/Paper-1-768x748.jpg`, out: 'blog/jornada-paper.webp', maxW: 1000 },
  { url: `${B}/2025/07/Livro-768x774.jpg`, out: 'blog/jornada-livro.webp', maxW: 1000 },
  { url: `${B}/2025/08/2.-Formacao.png`, out: 'blog/inicio-carreira-formacao.webp', maxW: 1200 },
  { url: `${B}/2025/08/1.-Apresentacao-1024x1006.jpeg`, out: 'blog/conheca-apresentacao.webp', maxW: 1200 },
  { url: `${B}/2025/08/4.-Fellow.png`, out: 'blog/fellowship-usa.webp', maxW: 1200 },
  { url: `${B}/2025/08/5.-Premiacoes.png`, out: 'blog/premiacoes.webp', maxW: 1200 },
  { url: `${B}/2025/08/Flamengo-1024x1024.png`, out: 'blog/flamengo.webp', maxW: 1200 },
  { url: `${B}/2025/09/ATP-1024x1024.png`, out: 'blog/atp-rio-open.webp', maxW: 1200 },
  { url: `${B}/2025/09/Legado-1024x1024.png`, out: 'blog/legado.webp', maxW: 1200 },
];

async function processBuffer(buf, maxW) {
  const img = sharp(buf).rotate();
  const meta = await img.metadata();
  const w = meta.width || maxW;
  const shouldResize = w > maxW;
  let pipeline = img;
  if (shouldResize) {
    pipeline = pipeline.resize(maxW, null, { fit: 'inside', withoutEnlargement: true });
  }
  return pipeline.webp({ quality: 82, effort: 4 }).withMetadata({ density: 72 });
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  for (const a of assets) {
    const dest = path.join(outDir, a.out);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    console.log('Fetching', a.url);
    const res = await fetch(a.url);
    if (!res.ok) throw new Error(`HTTP ${res.status} ${a.url}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const maxW = a.maxW ?? 1920;
    const webp = await processBuffer(buf, maxW);
    await webp.toFile(dest);
    console.log('  ->', a.out);
    if (a.thumb) {
      const tdest = path.join(outDir, a.thumb.out);
      fs.mkdirSync(path.dirname(tdest), { recursive: true });
      const thumbBuf = await processBuffer(buf, a.thumb.maxW);
      await thumbBuf.toFile(tdest);
      console.log('  ->', a.thumb.out);
    }
  }
  console.log('Concluído.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
