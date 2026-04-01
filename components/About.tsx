
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/** Decoração lateral do slideshow: PNG em public/imagens/inicio/premiacoes-decor-lateral.png */
const AWARD_SIDE_DECOR_SRC = '/imagens/inicio/premiacoes-decor-lateral.png';

const AWARD_SLIDE_MS = 5500;

type AwardSlide = {
  group: 'internacional' | 'nacional';
  groupLabel: string;
  acronym: string;
  fullName: string;
};

const AWARD_SLIDES: AwardSlide[] = [
  {
    group: 'internacional',
    groupLabel: 'Prêmios internacionais',
    acronym: 'AOSSM',
    fullName: 'American Orthopaedic Society for Sports Medicine',
  },
  {
    group: 'internacional',
    groupLabel: 'Prêmios internacionais',
    acronym: 'ESSKA',
    fullName:
      'European Society of Sports Traumatology, Knee Surgery & Arthroscopy',
  },
  {
    group: 'internacional',
    groupLabel: 'Prêmios internacionais',
    acronym: 'EFORT',
    fullName:
      'European Federation of National Associations of Orthopaedics and Traumatology',
  },
  {
    group: 'nacional',
    groupLabel: 'Prêmios nacionais',
    acronym: 'Instituto Brasil de Tecnologias da Saúde',
    fullName: 'Jorge Paulo Lemann Award',
  },
  {
    group: 'nacional',
    groupLabel: 'Prêmios nacionais',
    acronym: 'Sociedade Brasileira de Ortopedia e Traumatologia',
    fullName: 'Medalha Barata Ribeiro — Ensino no Brasil',
  },
  {
    group: 'nacional',
    groupLabel: 'Prêmios nacionais',
    acronym: 'Sociedade Brasileira de Artroscopia e Trauma do Esporte',
    fullName: 'Traveling Fellowship Award',
  },
];

const About: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = window.setInterval(() => {
      setSlideIndex((i) => (i + 1) % AWARD_SLIDES.length);
    }, AWARD_SLIDE_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const slide = AWARD_SLIDES[slideIndex];

  return (
    <section
      id="sobre"
      className="py-20 scroll-mt-nav bg-gradient-to-b from-slate-300/30 from-0% via-blue-50/25 to-white to-100%"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-blue-700 font-bold tracking-widest text-sm uppercase mb-4">Experiência & Autoridade</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Um dos maiores especialistas em joelho do Brasil, agora em Indaiatuba.
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-50 w-12 h-12 flex-shrink-0 rounded-lg flex items-center justify-center text-blue-600">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Formação Acadêmica de Ponta</h4>
                  <p className="text-slate-600">Graduado pela UERJ, com especialização e mestrado pelo prestigiado INTO (Instituto Nacional de Traumatologia e Ortopedia).</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-50 w-12 h-12 flex-shrink-0 rounded-lg flex items-center justify-center text-blue-600">
                  <i className="fa-solid fa-earth-americas"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Carreira Internacional</h4>
                  <p className="text-slate-600">Fez 1 ano de fellowship nos EUA com o Dr. Robert LaPrade, autoridade mundial em joelho, e passagens por Stanford e Lyon.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-50 w-12 h-12 flex-shrink-0 rounded-lg flex items-center justify-center text-blue-600">
                  <i className="fa-solid fa-running"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Vivência no Esporte de Elite</h4>
                  <p className="text-slate-600">Médico do Boxe nas Olimpíadas Rio 2016, Médico ATP do Rio Open de Tênis e passagens pelo C.R. Flamengo.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-slate-900 rounded-2xl text-white">
              <p className="italic text-lg mb-4">"Minha missão é trazer o padrão 'world-class' de ortopedia esportiva internacional para cada paciente em Indaiatuba."</p>
              <p className="font-bold">— Dr. Raphael Serra Cruz</p>
            </div>

            <div className="mt-8">
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 text-blue-700 font-bold transition hover:text-blue-800"
              >
                Conheça mais sobre a trajetória do Dr. Serra Cruz <i className="fa-solid fa-arrow-right" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="flex min-w-0 flex-col gap-4">
              <img
                src="/imagens/inicio/explicando-no-consultorio.webp"
                alt="Dr. Raphael Serra Cruz explicando exame ao paciente no consultório em Indaiatuba"
                className="mt-8 w-full rounded-2xl shadow-lg"
                loading="lazy"
                decoding="async"
              />

              <div
                className="flex w-full items-stretch gap-1 rounded-2xl border border-slate-200 bg-white/90 py-4 pl-1 pr-1 shadow-sm backdrop-blur-sm sm:gap-2 sm:py-5 sm:pl-2 sm:pr-2 md:py-6 md:pl-3 md:pr-3"
                aria-roledescription={reduceMotion ? undefined : 'slideshow'}
                aria-label="Premiações e reconhecimentos"
              >
                <img
                  src={AWARD_SIDE_DECOR_SRC}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-[7.5rem] w-auto max-w-[min(100%,4rem)] shrink-0 scale-x-[-1] object-contain object-center sm:h-[8.5rem] sm:max-w-[4rem]"
                  aria-hidden
                />
                <div className="min-w-1 flex-1 px-1 text-center sm:px-1">
                  {reduceMotion ? (
                    <div className="space-y-6 text-sm">
                      <div>
                        <p className="text-[0.65rem] font-bold uppercase tracking-wider text-blue-700">Prêmios internacionais</p>
                        <ul className="mt-2 list-inside list-disc space-y-2 text-slate-700">
                          {AWARD_SLIDES.filter((s) => s.group === 'internacional').map((s) => (
                            <li key={s.acronym + s.fullName} className="text-balance">
                              <span className="font-semibold text-slate-900">{s.acronym}</span>
                              {' — '}
                              {s.fullName}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[0.65rem] font-bold uppercase tracking-wider text-blue-700">Prêmios nacionais</p>
                        <ul className="mt-2 list-inside list-disc space-y-2 text-slate-700">
                          {AWARD_SLIDES.filter((s) => s.group === 'nacional').map((s) => (
                            <li key={s.acronym + s.fullName} className="text-balance">
                              <span className="font-semibold text-slate-900">{s.acronym}</span>
                              {' — '}
                              {s.fullName}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-[0.65rem] font-bold uppercase tracking-wider text-blue-700">{slide.groupLabel}</p>
                      <div className="mt-3 min-h-[5.5rem] md:min-h-[5rem]" aria-live="polite">
                        <div key={slideIndex} className="about-award-slide-active">
                          <p className="text-lg font-bold text-balance text-slate-900">{slide.acronym}</p>
                          <p className="mt-2 text-sm leading-snug text-balance text-slate-600">{slide.fullName}</p>
                        </div>
                      </div>
                      <div
                        className="mt-4 flex justify-center gap-1.5"
                        role="tablist"
                        aria-label="Indicadores do slideshow de premiações"
                      >
                        {AWARD_SLIDES.map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            role="tab"
                            aria-selected={i === slideIndex}
                            aria-label={`Prêmio ${i + 1} de ${AWARD_SLIDES.length}`}
                            className={`h-1.5 rounded-full transition-all ${
                              i === slideIndex ? 'w-6 bg-blue-700' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                            }`}
                            onClick={() => setSlideIndex(i)}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <img
                  src={AWARD_SIDE_DECOR_SRC}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-[7.5rem] w-auto max-w-[min(100%,4rem)] shrink-0 object-contain object-center sm:h-[8.5rem] sm:max-w-[4rem]"
                  aria-hidden
                />
              </div>
            </div>

            <div className="min-w-0">
              <img
                src="/imagens/inicio/retrato-de-frente.webp"
                alt="Retrato do Dr. Raphael Serra Cruz, ortopedista especialista em joelho"
                className="mb-8 w-full rounded-2xl shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
