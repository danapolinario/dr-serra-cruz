
import React from 'react';

const WHATSAPP_AGENDAR =
  'https://wa.me/5519998321140?text=' +
  encodeURIComponent('Olá! Gostaria de agendar uma consulta com o Dr. Raphael Serra Cruz.');

/** Consulta no Google Maps (embed sem API key; alinha o pin ao endereço). */
function mapEmbedSrc(enderecoParaBusca: string): string {
  const q = encodeURIComponent(enderecoParaBusca);
  return `https://maps.google.com/maps?q=${q}&hl=pt&z=16&output=embed`;
}

const locais = [
  {
    nome: 'IMAP Life',
    endereco: 'R. Cerqueira César, 315 — Jd. Feris — Indaiatuba — SP',
    enderecoEmbed: 'R. Cerqueira César, 315, Jardim Feris, Indaiatuba, SP, Brasil',
    mapaUrl: 'https://maps.app.goo.gl/1GsAABKuEans7qUk9',
    imagem: '/imagens/localizacoes/imap.webp',
    imagemAlt:
      'Fachada da clínica IMAP Life em Indaiatuba, com parede branca perfurada, logotipo azul, cactos decorativos e placa listando especialidades médicas como Ortopedia e Fisioterapia.',
  },
  {
    nome: 'Indacor',
    endereco: 'R. Sebastião Nicolau, 54 — Vila Nossa Sra. Aparecida — Indaiatuba — SP',
    enderecoEmbed: 'R. Sebastião Nicolau, 54, Vila Nossa Senhora Aparecida, Indaiatuba, SP, Brasil',
    mapaUrl: 'https://maps.app.goo.gl/ih4nsf2hExBhs4SR9',
    imagem: '/imagens/localizacoes/indacor.webp',
    imagemAlt:
      'Fachada moderna da clínica Indacor em Indaiatuba, com painéis de vidro reflexivo, parede de pedra clara e letreiro com logotipo de cardiologia.',
  },
] as const;

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-slate-50 scroll-mt-nav">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center lg:mb-12 lg:text-left">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-700">Onde estamos</h2>
          <h3 className="text-3xl font-bold text-slate-900 md:text-4xl">Localização &amp; Contato</h3>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600 lg:mx-0">
            Dois locais de atendimento em Indaiatuba-SP.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3 lg:items-start lg:gap-8">
          {locais.map((local) => (
            <article
              key={local.nome}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <a
                href={local.mapaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/3] w-full shrink-0 overflow-hidden bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                aria-label={`Abrir ${local.nome} no Google Maps em nova aba`}
              >
                <img
                  src={local.imagem}
                  alt={local.imagemAlt}
                  width={720}
                  height={540}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </a>
              <div className="flex flex-col p-5">
                <h4 className="mb-1 text-lg font-bold text-slate-900">{local.nome}</h4>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">{local.endereco}</p>
                <a
                  href={local.mapaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
                >
                  <i className="fa-solid fa-up-right-from-square text-xs" aria-hidden />
                  Abrir no Google Maps
                </a>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-200">
                  <iframe
                    title={`Mapa de localização — ${local.nome}`}
                    src={mapEmbedSrc(local.enderecoEmbed)}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </article>
          ))}

          <div className="flex h-70 min-h-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-20 lg:p-8">
            
            <div className="flex flex-1 flex-col gap-6">
              <div className="flex gap-4">
                <div className="text-xl text-blue-600">
                  <i className="fa-solid fa-phone" aria-hidden />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Telefone / WhatsApp</h4>
                  <p className="mt-1 text-slate-600">
                    <a href="tel:+5519998321140" className="hover:text-blue-700">
                      (19) 99832-1140
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl text-blue-600">
                  <i className="fa-solid fa-envelope" aria-hidden />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">E-mail</h4>
                  <p className="mt-1 break-all text-sm text-slate-600">
                    <a href="mailto:contato@drserracruz.com.br" className="hover:text-blue-700">
                      contato@drserracruz.com.br
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-auto border-t border-slate-100 pt-8">
              <a
                href={WHATSAPP_AGENDAR}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-4 text-center text-base font-bold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-800"
              >
                <i className="fa-brands fa-whatsapp text-xl" aria-hidden />
                Agendar consulta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
