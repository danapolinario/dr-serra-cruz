
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
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
              <p className="italic text-lg mb-4">"Minha missão é trazer o padrão 'world-class' de medicina esportiva internacional para cada paciente em Indaiatuba."</p>
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

          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/imagens/inicio/explicando-no-consultorio.webp"
                alt="Dr. Raphael Serra Cruz explicando exame ao paciente no consultório em Indaiatuba"
                className="rounded-2xl shadow-lg mt-8"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/imagens/inicio/retrato-de-frente.webp"
                alt="Retrato do Dr. Raphael Serra Cruz, ortopedista especialista em joelho"
                className="rounded-2xl shadow-lg mb-8"
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
