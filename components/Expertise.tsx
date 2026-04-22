
import React from 'react';
import { Link } from 'react-router-dom';

const CARD_IMG = {
  mostrandoExame: '/imagens/inicio/cards/card-mostrando-exame-na-tela.webp',
  examinando: '/imagens/inicio/cards/card-examinando-paciente.webp',
  rioOpen: '/imagens/inicio/cards/card-rio-open-tenis.webp',
  retrato: '/imagens/inicio/cards/card-retrato-de-frente.webp',
} as const;

const Expertise: React.FC = () => {
  const treatments = [
    {
      title: 'Trauma do Esporte',
      icon: 'fa-solid fa-medal',
      desc: 'Atendimento ortopédico geral a atletas profissionais e amadores, focando em prevenção de lesões e no retorno seguro à atividade esportiva.',
      link: '/trauma-do-esporte',
      cardImage: CARD_IMG.rioOpen,
    },
    {
      title: 'Lesões Ligamentares',
      icon: 'fa-solid fa-bone',
      desc: 'De tratamentos não-cirúrgicos a reconstruções complexas de todos os ligamentos do joelho.',
      link: '/lesoes-ligamentares',
      cardImage: CARD_IMG.mostrandoExame,
    },
    {
      title: 'Meniscos',
      icon: 'fa-solid fa-wave-square',
      desc: 'Foco em preservação meniscal, desde protocolos conservadores a todos os tipos de sutura.',
      link: '/meniscos',
      cardImage: CARD_IMG.examinando,
    },
    {
      title: 'Cartilagem',
      icon: 'fa-solid fa-microscope',
      desc: 'Tratamentos específicos: membrana de colágeno (AMIC - Chondro-Gide), matriz de hidrogel 3D (CareS-1S) transplante osteocondral autólogo e osteotomias.',
      link: '/cartilagem',
      cardImage: CARD_IMG.mostrandoExame,
    },
    {
      title: 'Condromalácia patelar',
      icon: 'fa-solid fa-circle-dot',
      desc: 'Abordagem diferenciada com foco em diagnósticos biomecânicos e protocolos individualizados.',
      link: '/condromalacia-patelar',
      cardImage: CARD_IMG.retrato,
    },
    {
      title: 'Artrose',
      icon: 'fa-solid fa-person-walking-with-cane',
      desc: 'Viscosuplementação com ácido hialurônico, atroplastias convencionais (unicompartimental e total) e robótica.',
      link: '/artrose',
      cardImage: CARD_IMG.examinando,
    }
  ];

  return (
    <section id="tratamentos" className="py-24 bg-slate-900 text-white scroll-mt-nav">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-4">Patologias e Tratamentos</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Excelência Clínica & Cirúrgica</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Protocolos modernos e individualizados para garantir o melhor resultado funcional para o seu joelho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((t, i) => {
            const CardContent = (
              <>
                <div className="bg-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-blue-400 mb-6 transition duration-500 group-hover:bg-white/95 group-hover:text-blue-800 group-hover:shadow-md">
                  <i className={t.icon}></i>
                </div>
                <h4 className="text-xl font-bold mb-3 transition-colors duration-500 group-hover:text-white">{t.title}</h4>
                <p className="text-slate-400 transition-colors duration-500 group-hover:text-white/90">{t.desc}</p>
                {t.link && (
                  <div className="mt-6 text-blue-400 font-medium transition-colors duration-500 group-hover:text-white flex items-center gap-2">
                    Saiba mais <i className="fa-solid fa-arrow-right text-sm"></i>
                  </div>
                )}
              </>
            );

            const cardShell =
              'group relative block overflow-hidden rounded-3xl border border-slate-700 transition-shadow duration-500 h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900';

            const hoverLayers = (
              <>
                <div
                  className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 ease-out motion-reduce:transition-none group-hover:opacity-100 group-focus-visible:opacity-100 motion-safe:scale-105 motion-safe:group-hover:scale-100 motion-safe:group-focus-visible:scale-100 motion-reduce:scale-100 motion-safe:transition-transform motion-safe:duration-700"
                  style={{ backgroundImage: `url(${t.cardImage})` }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-800/78 to-blue-700/65 opacity-0 backdrop-blur-[1px] transition-opacity duration-500 ease-out motion-reduce:backdrop-blur-none group-hover:opacity-100 group-focus-visible:opacity-100"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-slate-800/50 transition-opacity duration-500 group-hover:opacity-0 group-focus-visible:opacity-0"
                  aria-hidden
                />
              </>
            );

            return t.link ? (
              <Link to={t.link} key={i} className={`${cardShell} hover:shadow-xl hover:shadow-blue-950/40`}>
                {hoverLayers}
                <div className="relative z-10 p-8">{CardContent}</div>
              </Link>
            ) : (
              <div key={i} className={cardShell}>
                {hoverLayers}
                <div className="relative z-10 p-8">{CardContent}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
