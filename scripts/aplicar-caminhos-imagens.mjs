/**
 * Substitui URLs absolutas de imagens WordPress por /imagens/... nos ficheiros fonte.
 * Executar após otimizar-imagens.mjs. Não altera links .pdf.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const map = [
  ['https://www.drserracruz.com.br/wp-content/uploads/2020/05/Raphael-Serra-Cruz19-01-removebg-preview-1.png', '/imagens/marca/retrato-raphael-serra-cruz.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/EXPLICANDO-NO-CONSULTORIO-1536x1024.jpg', '/imagens/inicio/explicando-no-consultorio.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/09/RETRATO-DE-FRENTE-683x1024.jpg', '/imagens/inicio/retrato-de-frente.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/EXAMINANDO-PACIENTE-CORTAR-O-PE-DA-PACIENTE-DA-FOTO-scaled-e1627286635435.jpg', '/imagens/inicio/examinando-paciente.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/MOSTRANDO-EXAME-NA-TELA-scaled.jpg', '/imagens/inicio/mostrando-exame-na-tela.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/BIOGRAFICA-SENTADO-NA-CADEIRA-scaled.jpg', '/imagens/sobre/fundo-biografico-sentado.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/PALESTRANDO-NO-HSVP-300x225.jpg', '/imagens/sobre/palestrando-no-hsvp.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/MOSTRANDO-EXAME-NA-TELA-200x300.jpg', '/imagens/sobre/mostrando-exame-pequeno.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/EXAMINANDO-PACIENTE-CORTAR-O-PE-DA-PACIENTE-DA-FOTO-scaled-e1627286635435-300x192.jpg', '/imagens/sobre/examinando-paciente-pequeno.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/08/banner-3-e1630176694460-300x133.jpg', '/imagens/sobre/banner-3.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/09/ENFERMARIA-UERJ.jpg', '/imagens/sobre/enfermaria-uerj.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/09/CADEIRA-FORMATURA.jpg', '/imagens/sobre/cadeira-formatura.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/1.jpg', '/imagens/sobre/formacao-into-01.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/09/ENTRADA-DE-STANFORD.jpg', '/imagens/sobre/entrada-stanford.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/09/COM-BERTRAND-LYON.jpg', '/imagens/sobre/com-bertrand-lyon.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/10.jpg', '/imagens/sobre/chelsea-estadio.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/Com-dr.-Jose-Luis-Runco.jpg', '/imagens/sobre/com-dr-jose-luis-runco.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/Estadio-do-Morumbi-SP.jpg', '/imagens/sobre/estadio-morumbi.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/OLHANDO-PRA-LUVA-CC-225x300.jpg', '/imagens/sobre/olhando-para-luva-cc.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-01-at-16.28.07-1-300x296.jpeg', '/imagens/sobre/cirurgia-centro.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/STAFF-VAIL-INTERNATIONAL-KNEE-COMPLEX-SURGERY.jpg', '/imagens/sobre/staff-vail.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/LABORATORIO-DISSECANDO-COM-LAPRADE-E-JORGE-CHAHLA-CLOSE-EM-NOS-3-e1627286718919.jpg', '/imagens/sobre/laboratorio-laprace-chahla.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/ESCRITORIO-LAPRADE.jpg', '/imagens/sobre/escritorio-laprace.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/ENTRANDO-EM-CAMPO-PARA-ATENDIMENTO.jpg', '/imagens/sobre/entrando-em-campo.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/08/OLIMPIADAS-EM-FRENTE-A-BANDEIRA-e1630058837939.jpg', '/imagens/sobre/olimpiadas-bandeira.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/08/LANC387AMENTO_LIVRO_COM_GRANGEIRO_E_RODRIGO_GOES-150x150.jpg', '/imagens/sobre/lancamento-livro.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/08/AULA-PARA-RESIDENTES-SBOT-150x150.jpg', '/imagens/sobre/aula-residentes-sbot.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/08/COM-DIRETORIASBRATE-NO-CONGRESSO-150x150.jpg', '/imagens/sobre/diretoria-sbrate-congresso.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/08/CONGRESSO-SBRATE-scaled-e1630058210688-150x150.jpg', '/imagens/sobre/congresso-sbrate.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/GRAMADO-DE-STANFORD-150x150.jpg', '/imagens/sobre/gramado-stanford.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/EM-FRENTE-AO-SANTY-LYON-150x150.jpg', '/imagens/sobre/frente-santy-lyon.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/CC-COM-LAPRADE-150x150.jpg', '/imagens/sobre/cc-com-laprace.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/07/NORUEGA-OLYMPIATOPPEN-150x150.jpg', '/imagens/sobre/noruega-olympiatoppen.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/03/image6-150x150.jpg', '/imagens/sobre/tenis-01.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/03/image5-150x150.jpg', '/imagens/sobre/tenis-02.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/03/image4-150x150.jpg', '/imagens/sobre/tenis-03.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/03/image7-150x150.jpg', '/imagens/sobre/tenis-04.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/03/image2-150x150.jpg', '/imagens/sobre/tenis-05.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/03/image9.jpg', '/imagens/sobre/indaiatuba-01.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/03/image8.jpg', '/imagens/sobre/indaiatuba-02.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/03/image10.jpg', '/imagens/sobre/indaiatuba-03.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/08/MANUAL-FIFA-11-PORTUGUES-pdf-1-722x1024.jpg', '/imagens/materiais-pacientes/capa-manual-fifa-11.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/08/POSTER-FIFA-11-INGLES-pdf-1-724x1024.jpg', '/imagens/materiais-pacientes/capa-poster-fifa-11.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/09/RETRATO-BRACO-CRUZADO-scaled-e1630935023289.jpg', '/imagens/blog/retrato-braco-cruzado.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2022/06/pexels-kindel-media-7298659-577x1024-1.jpg', '/imagens/blog/lesao-menisco-hero.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2026/03/Imagem-futurista-de-medico-atendendo-paciente-a-distancia-pelo-computador-sendo-capaz-de-alcancar-todo-o-mundo-1024x1024.png', '/imagens/blog/telemedicina-europa-hero.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2026/03/Dr.-Raphael-Serra-Cruz-atendendo-via-telemedicina-fora-do-Brasil-1024x683.jpg', '/imagens/blog/telemedicina-atendimento.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/07/Cartaz-jornada-820x1024.jpeg', '/imagens/blog/jornada-lyonesa-cartaz.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/07/Lyon-2012-300x300.jpg', '/imagens/blog/jornada-lyon-2012.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/07/Bertrand-e-Mathieu-768x523.jpg', '/imagens/blog/jornada-bertrand-mathieu.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/07/Paper-1-768x748.jpg', '/imagens/blog/jornada-paper.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/07/Livro-768x774.jpg', '/imagens/blog/jornada-livro.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/08/2.-Formacao.png', '/imagens/blog/inicio-carreira-formacao.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/08/1.-Apresentacao-1024x1006.jpeg', '/imagens/blog/conheca-apresentacao.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/08/4.-Fellow.png', '/imagens/blog/fellowship-usa.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/08/5.-Premiacoes.png', '/imagens/blog/premiacoes.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/08/Flamengo-1024x1024.png', '/imagens/blog/flamengo.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/09/ATP-1024x1024.png', '/imagens/blog/atp-rio-open.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2025/09/Legado-1024x1024.png', '/imagens/blog/legado.webp'],
  // Certificados (full)
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/08/Certificado-aossm-Pro-Banner-e-pra-estante-virtual-de-certificados.jpg', '/imagens/certificados/certificado-aossm.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/08/Certificado-Efort.jpg', '/imagens/certificados/certificado-efort.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/08/CERTIFICADO-Lyon.png', '/imagens/certificados/certificado-lyon.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/08/Certificado-Residencia-Medica.png', '/imagens/certificados/certificado-residencia-medica.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/08/CERTIFICADO-SPRI.png', '/imagens/certificados/certificado-spri.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/08/CERTIFICADO-Stanford.png', '/imagens/certificados/certificado-stanford.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/08/SBCJ.png', '/imagens/certificados/certificado-sbcj.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/08/SBOT.png', '/imagens/certificados/certificado-sbot.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/08/UERJ.png', '/imagens/certificados/certificado-uerj.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/2021/08/SBRATE.jpg', '/imagens/certificados/certificado-sbrate.webp'],
  // Miniaturas WordPress (substituir por geradas localmente)
  ['https://www.drserracruz.com.br/wp-content/uploads/elementor/thumbs/Certificado-aossm-Pro-Banner-e-pra-estante-virtual-de-certificados-plhrjl2lc1ftq5u0ova5dzccn6145u5v00h6hvufug.jpg', '/imagens/certificados/miniaturas/certificado-aossm.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/elementor/thumbs/Certificado-Efort-plhrjl2lc1ftq5u0ova5dzccn6145u5v00h6hvufug.jpg', '/imagens/certificados/miniaturas/certificado-efort.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/elementor/thumbs/CERTIFICADO-Lyon-plhrjl2lc1ftq5u0ova5dzccn6145u5v00h6hvufug.png', '/imagens/certificados/miniaturas/certificado-lyon.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/elementor/thumbs/Certificado-Residencia-Medica-plhrjl2lc1ftq5u0ova5dzccn6145u5v00h6hvufug.png', '/imagens/certificados/miniaturas/certificado-residencia-medica.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/elementor/thumbs/CERTIFICADO-SPRI-plhrjl2lc1ftq5u0ova5dzccn6145u5v00h6hvufug.png', '/imagens/certificados/miniaturas/certificado-spri.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/elementor/thumbs/CERTIFICADO-Stanford-plhrjl2lc1ftq5u0ova5dzccn6145u5v00h6hvufug.png', '/imagens/certificados/miniaturas/certificado-stanford.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/elementor/thumbs/SBCJ-plhrjl2lc1ftq5u0ova5dzccn6145u5v00h6hvufug.png', '/imagens/certificados/miniaturas/certificado-sbcj.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/elementor/thumbs/SBOT-plhrjl2lc1ftq5u0ova5dzccn6145u5v00h6hvufug.png', '/imagens/certificados/miniaturas/certificado-sbot.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/elementor/thumbs/UERJ-plhrjl2lc1ftq5u0ova5dzccn6145u5v00h6hvufug.png', '/imagens/certificados/miniaturas/certificado-uerj.webp'],
  ['https://www.drserracruz.com.br/wp-content/uploads/elementor/thumbs/SBRATE-plhrjnw3wjjoozpx8ei13gmqfbn7sxh20efmxpq9bs.jpg', '/imagens/certificados/miniaturas/certificado-sbrate.webp'],
];

map.sort((a, b) => b[0].length - a[0].length);

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) {
      if (name === 'node_modules' || name === 'dist' || name === '.git') continue;
      walk(p, files);
    } else if (/\.(tsx|ts|jsx|js)$/.test(name) && !name.includes('.d.ts')) {
      files.push(p);
    }
  }
  return files;
}

const files = walk(root);
let total = 0;
for (const file of files) {
  if (file.includes(`${path.sep}scripts${path.sep}`)) continue;
  let s = fs.readFileSync(file, 'utf8');
  const orig = s;
  for (const [from, to] of map) {
    if (s.includes(from)) {
      s = s.split(from).join(to);
    }
  }
  if (s !== orig) {
    fs.writeFileSync(file, s);
    total++;
    console.log('Atualizado:', path.relative(root, file));
  }
}
console.log('Ficheiros alterados:', total);
