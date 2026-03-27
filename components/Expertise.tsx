
import React from 'react';
import { Link } from 'react-router-dom';

const Expertise: React.FC = () => {
  const treatments = [
    { title: 'Ligamentos', icon: 'fa-solid fa-bone', desc: 'Reconstrução de LCA, LCP, lesões complexas multiligamentares e canto póstero-lateral do joelho.', link: '/lesoes-ligamentares' },
    { title: 'Meniscos', icon: 'fa-solid fa-wave-square', desc: 'Sutura meniscal, meniscectomia parcial e transplante de menisco para preservação articular.', link: '/meniscos' },
    { title: 'Artrose', icon: 'fa-solid fa-person-walking-with-cane', desc: 'Artroplastia total e parcial do joelho, infiltrações e tratamentos biológicos para artrose.' },
    { title: 'Cartilagem', icon: 'fa-solid fa-microscope', desc: 'Procedimentos regenerativos, microfratura e transplante de cartilagem para lesões condrais.' },
    { title: 'Trauma do Esporte', icon: 'fa-solid fa-medal', desc: 'Atendimento a atletas profissionais e amadores com retorno seguro à atividade esportiva.' },
    { title: 'Femoropatelar', icon: 'fa-solid fa-circle-dot', desc: 'Tratamento de instabilidade patelar, condropatia e dores na frente do joelho.' }
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
                <div className="bg-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-blue-400 mb-6 group-hover:bg-white group-hover:text-blue-700 transition">
                  <i className={t.icon}></i>
                </div>
                <h4 className="text-xl font-bold mb-3">{t.title}</h4>
                <p className="text-slate-400 group-hover:text-white/80 transition">{t.desc}</p>
                {t.link && (
                  <div className="mt-6 text-blue-400 font-medium group-hover:text-white transition flex items-center gap-2">
                    Saiba mais <i className="fa-solid fa-arrow-right text-sm"></i>
                  </div>
                )}
              </>
            );

            const cardClasses = "bg-slate-800/50 border border-slate-700 p-8 rounded-3xl hover:bg-blue-700 transition duration-500 group block h-full";

            return t.link ? (
              <Link to={t.link} key={i} className={cardClasses}>
                {CardContent}
              </Link>
            ) : (
              <div key={i} className={cardClasses}>
                {CardContent}
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/5519998321140" 
            target="_blank"
            className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-white transition"
          >
            Ver todos os tratamentos <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
