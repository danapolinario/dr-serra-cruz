
import React from 'react';

const InstagramSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <i className="fa-brands fa-instagram text-lg"></i> Conteúdo Educativo
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Acompanhe as <span className="text-blue-700">novidades</span> no Instagram.
          </h2>
          
          <p className="text-lg text-slate-600 mb-10">
            Informação técnica para pacientes, dicas de recuperação e a rotina do Dr. Raphael Serra Cruz. Junte-se à nossa comunidade com mais de 3 mil pessoas interessadas em saúde e ortopedia de ponta.
          </p>

          <div className="flex flex-col items-center gap-8">
            <a 
              href="https://www.instagram.com/dr.serracruz/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white px-12 py-5 rounded-full font-bold shadow-xl hover:shadow-pink-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 text-lg"
            >
              <i className="fa-brands fa-instagram text-2xl"></i>
              Seguir @dr.serracruz
            </a>

            <div className="flex flex-col items-center">
              <div className="flex -space-x-3 mb-2">
                {[
                  '/imagens/redes-sociais/seguidor-instagram-01.webp',
                  '/imagens/redes-sociais/seguidor-instagram-02.webp',
                  '/imagens/redes-sociais/seguidor-instagram-03.webp',
                  '/imagens/redes-sociais/seguidor-instagram-04.webp',
                  '/imagens/redes-sociais/seguidor-instagram-05.webp',
                ].map((src) => (
                  <img
                    key={src}
                    src={src}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover"
                    alt="Membro da comunidade no Instagram"
                    width={48}
                    height={48}
                    decoding="async"
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">+3K SEGUIDORES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
