
import React from 'react';

const baseImg =
  'w-auto shrink-0 object-contain grayscale hover:grayscale-0 transition-[filter] duration-300';

const logos: { src: string; alt: string; imgClass: string }[] = [
  {
    src: '/imagens/instituicoes-excelencia/instituicao-sbrate.webp',
    alt: 'SBRATE — Sociedade Brasileira de Artroscopia e Traumatologia do Esporte',
    imgClass: `${baseImg} h-[4.5rem] md:h-20 max-w-[min(100%,320px)]`,
  },
  {
    src: '/imagens/instituicoes-excelencia/instituicao-sbcj.webp',
    alt: 'SBCJ — Sociedade Brasileira de Cirurgia do Joelho',
    imgClass: `${baseImg} h-[4.5rem] md:h-20 max-w-[min(100%,320px)]`,
  },
  {
    src: '/imagens/instituicoes-excelencia/instituicao-amb.webp',
    alt: 'AMB — Associação Médica Brasileira',
    imgClass: `${baseImg} h-10 md:h-12 max-w-[min(100%,200px)]`,
  },
  {
    src: '/imagens/instituicoes-excelencia/instituicao-uerj.webp',
    alt: 'UERJ — Universidade do Estado do Rio de Janeiro',
    imgClass: `${baseImg} h-14 md:h-16 max-w-[min(100%,280px)]`,
  },
  {
    src: '/imagens/instituicoes-excelencia/instituicao-into.webp',
    alt: 'INTO — Instituto Nacional de Traumatologia e Ortopedia',
    imgClass: `${baseImg} h-[4.5rem] md:h-20 max-w-[min(100%,320px)]`,
  },
  {
    src: '/imagens/instituicoes-excelencia/instituicao-fifa-centro-medico-excelencia.webp',
    alt: 'FIFA Medical Centre of Excellence',
    imgClass: `${baseImg} h-14 md:h-16 max-w-[min(100%,280px)]`,
  },
  {
    src: '/imagens/instituicoes-excelencia/instituicao-aossm.webp',
    alt: 'AOSSM — American Orthopaedic Society for Sports Medicine',
    imgClass: `${baseImg} h-14 md:h-16 max-w-[min(100%,280px)]`,
  },
  {
    src: '/imagens/instituicoes-excelencia/instituicao-steadman-clinic.webp',
    alt: 'The Steadman Clinic e Steadman Philippon Research Institute',
    imgClass: `${baseImg} h-14 md:h-16 max-w-[min(100%,280px)]`,
  },
  {
    src: '/imagens/instituicoes-excelencia/instituicao-efort-02.webp',
    alt: 'EFORT — Joint Efforts',
    imgClass: `${baseImg} h-14 md:h-16 max-w-[min(100%,280px)]`,
  },
];

const Certificates: React.FC = () => {
  const track = [...logos, ...logos];

  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Formação em Instituições de Excelência Nacionais e Internacionais
        </p>
        <div className="relative overflow-hidden py-2" aria-label="Logos de instituições de formação">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent md:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent md:w-20" />
          <div className="marquee-instituicoes-track opacity-90 hover:opacity-100 transition-opacity">
            {track.map((logo, idx) => (
              <img
                key={`${logo.src}-${idx}`}
                src={logo.src}
                alt={logo.alt}
                className={logo.imgClass}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
