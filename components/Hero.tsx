
import React, { useState, useEffect } from 'react';

const HERO_SLIDE_MS = 5000;

const heroSlides: { src: string; badgeLine: string }[] = [
  { src: '/imagens/inicio/retrato-de-frente.webp', badgeLine: 'Ortopedia e Traumatologia' },
  { src: '/imagens/inicio/examinando-paciente.webp', badgeLine: 'Cirurgia de joelho' },
  { src: '/imagens/inicio/dr-raphael-serra-cruz-rio-open-tenis.webp', badgeLine: 'Ortopedia esportiva' },
  { src: '/imagens/inicio/mostrando-exame-na-tela.webp', badgeLine: 'Produção acadêmica' },
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, HERO_SLIDE_MS);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroSlides[currentImageIndex];

  return (
    <section
      id="home"
      className="pt-24 lg:pt-40 pb-16 lg:pb-32 overflow-x-hidden scroll-mt-nav bg-gradient-to-t from-slate-300/30 from-0% via-blue-50/25 to-white to-100%"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 lg:flex-[1.1] text-center lg:text-left">
            <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <i className="fa-solid fa-award mr-2"></i> Ortopedista World-Class em Indaiatuba-SP
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              Excelência internacional <span className="bg-gradient-to-r from-blue-900 to-blue-500 text-transparent bg-clip-text font-bold">em cirurgia do joelho e ortopedia esportiva</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Atendimento humanizado e especializado em cirurgias complexas de joelho e trauma esportivo pelo <span className="font-semibold text-slate-800 underline decoration-blue-500 underline-offset-4">Dr. Raphael Serra Cruz</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <a
                href="https://wa.me/5519998321140"
                target="_blank"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full text-lg font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-xl shadow-green-600/20"
              >
                <i className="fa-brands fa-whatsapp text-2xl"></i>
                Agendar pelo WhatsApp
              </a>
              <a
                href="#sobre"
                className="w-full sm:w-auto px-8 py-4 text-slate-700 font-semibold flex items-center justify-center gap-2 hover:text-blue-700 transition group"
              >
                Conheça a Trajetória <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 md:gap-12 grayscale opacity-70">
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-slate-800">19+</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-slate-500">Anos de Exp.</span>
              </div>
              <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-slate-800">2k+</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-slate-500">Cirurgias</span>
              </div>
              <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-slate-800">UERJ + INTO/UFRJ</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-slate-500">Formação</span>
              </div>
            </div>
          </div>

          <div className="flex-1 lg:flex-[0.9] relative w-full">
            <div className="absolute inset-0 bg-blue-100 rounded-[2.5rem] -rotate-3 scale-105 z-0 lg:translate-x-4"></div>
            <div className="relative z-10 w-full">
              <div className="relative aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl">
                {heroSlides.map((slide, index) => (
                  <img
                    key={slide.src}
                    src={slide.src}
                    alt={`Dr. Raphael Serra Cruz, ortopedista em Indaiatuba — imagem ${index + 1} de ${heroSlides.length}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={index === 0 ? 'high' : undefined}
                  />
                ))}

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-6 right-6 z-20 flex gap-2.5">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'w-8 bg-blue-600 shadow-lg' : 'w-2 bg-white/70 hover:bg-white'}`}
                    aria-label={`Ver foto ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-20 mt-4 flex w-full max-w-md mx-auto items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl sm:gap-4 sm:p-5 md:absolute md:-bottom-6 md:left-auto md:mx-0 md:mt-0 md:w-max md:max-w-none md:-left-8 lg:-left-12 transform cursor-default transition-transform hover:scale-105">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl text-white shadow-lg shadow-blue-600/30 sm:h-14 sm:w-14 sm:text-2xl">
                <i className="fa-solid fa-stethoscope" aria-hidden />
              </div>
              <div className="min-w-0 text-left">
                <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Especialista RQE 107916</p>
                <p className="text-sm font-bold text-slate-800 sm:text-base">{currentSlide.badgeLine}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
