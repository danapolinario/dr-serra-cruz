
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    { name: 'Raquel Iendrick', text: 'O Raphael é um excelente profissional, além de muito qualificado e habilidoso, é extremamente atencioso, explica tudo nos mínimos detalhes.' },
    { name: 'Angelo Cataldo', text: 'Operei os dois meniscos com ele e desde então nunca mais tive problemas. Profissional sério, competente, de muita experiência.' },
    { name: 'Arthur Pires', text: 'Tive uma lesão complexa no ligamento canto posterolateral. Minha recuperação foi um sucesso podendo retornar sem sequelas ao Jiu Jitsu.' },
    { name: 'Marina Lipkin', text: 'Ultra graduado, seguro e experiente, Dr Raphael me salvou de uma lesão séria. Meu joelho agradece!!!' }
  ];

  return (
    <section id="avaliacoes" className="py-24 bg-slate-50 scroll-mt-nav overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-700 font-bold text-sm uppercase tracking-widest mb-4">Experiência do Paciente</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Histórias de Sucesso e Superação</h3>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            <div className="flex text-yellow-400">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <span className="font-bold text-slate-700">5.0</span>
            <span className="text-slate-400 text-sm">no Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="text-blue-200 text-5xl mb-4 italic">"</div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {r.text}
                </p>
              </div>
              <p className="font-bold text-slate-900">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
