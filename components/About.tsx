
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

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-4">
            <div className="relative col-span-2 mt-8 min-h-0 lg:contents">
              <img
                src="/imagens/inicio/explicando-no-consultorio.webp"
                alt="Dr. Raphael Serra Cruz explicando exame ao paciente no consultório em Indaiatuba"
                className="w-full min-w-0 rounded-2xl shadow-lg lg:col-start-1 lg:row-start-1 lg:mt-8"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/imagens/inicio/retrato-de-frente.webp"
                alt="Retrato do Dr. Raphael Serra Cruz, ortopedista especialista em joelho"
                className="absolute right-0 top-1/2 z-10 w-[44%] max-w-[200px] -translate-x-3 -translate-y-1/2 rounded-2xl object-cover shadow-xl ring-2 ring-white/95 lg:relative lg:right-auto lg:top-auto lg:z-auto lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-8 lg:w-full lg:max-w-none lg:translate-x-0 lg:translate-y-0 lg:self-start lg:object-contain lg:ring-0 lg:shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div
              className="col-span-2 row-start-2 flex w-full min-w-0 max-w-full items-stretch gap-0.5 self-start rounded-2xl border border-slate-200 bg-white/90 py-3 pl-2 pr-2 shadow-sm backdrop-blur-sm sm:gap-1 sm:py-5 sm:pl-2 sm:pr-2 md:py-6 md:pl-3 md:pr-3 lg:col-span-1 lg:row-start-2 lg:col-start-1 lg:gap-2 lg:py-6"
              aria-roledescription={reduceMotion ? undefined : 'slideshow'}
              aria-label="Premiações e reconhecimentos"
            >
              <img
                src={AWARD_SIDE_DECOR_SRC}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-[6.25rem] w-auto max-w-[2.35rem] shrink-0 scale-x-[-1] object-contain object-center min-[380px]:max-w-[2.75rem] sm:h-[8rem] sm:max-w-[3.5rem] md:h-[8.5rem] md:max-w-[4rem]"
                aria-hidden
              />
              <div className="min-w-0 flex-1 px-0.5 text-center sm:px-1">
                {reduceMotion ? (
                  <div className="space-y-6 text-left text-sm sm:text-sm">
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-wider text-blue-700">Prêmios internacionais</p>
                      <ul className="mt-2 list-outside list-disc space-y-2 pl-4 text-slate-700 marker:text-blue-600">
                        {AWARD_SLIDES.filter((s) => s.group === 'internacional').map((s) => (
                          <li key={s.acronym + s.fullName} className="text-pretty pl-1">
                            <span className="font-semibold text-slate-900">{s.acronym}</span>
                            {' — '}
                            {s.fullName}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-wider text-blue-700">Prêmios nacionais</p>
                      <ul className="mt-2 list-outside list-disc space-y-2 pl-4 text-slate-700 marker:text-blue-600">
                        {AWARD_SLIDES.filter((s) => s.group === 'nacional').map((s) => (
                          <li key={s.acronym + s.fullName} className="text-pretty pl-1">
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
                    <div className="mt-2 min-h-[4rem] sm:mt-3 sm:min-h-[5.5rem] lg:min-h-[5rem]" aria-live="polite">
                      <div key={slideIndex} className="about-award-slide-active">
                        <p className="text-sm font-bold text-pretty text-slate-900 sm:text-base md:text-lg">{slide.acronym}</p>
                        <p className="mt-1.5 text-[0.7rem] leading-snug text-pretty text-slate-600 sm:mt-2 sm:text-xs md:text-sm">{slide.fullName}</p>
                      </div>
                    </div>
                    <div
                      className="mt-3 flex flex-nowrap justify-center gap-0.5 px-0 sm:mt-4 sm:gap-1.5 md:gap-2"
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
                          className="group flex h-9 w-8 shrink-0 items-center justify-center p-1 touch-manipulation sm:h-11 sm:w-11 sm:p-2"
                          onClick={() => setSlideIndex(i)}
                        >
                          <span
                            className={`block h-1.5 rounded-full transition-all ${
                              i === slideIndex ? 'w-6 bg-blue-700' : 'w-1.5 bg-slate-300 group-hover:bg-slate-400'
                            }`}
                          />
                        </button>
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
                className="h-[6.25rem] w-auto max-w-[2.35rem] shrink-0 object-contain object-center min-[380px]:max-w-[2.75rem] sm:h-[8rem] sm:max-w-[3.5rem] md:h-[8.5rem] md:max-w-[4rem]"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
