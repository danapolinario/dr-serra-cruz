import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const MateriaisPacientes: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-20 flex-grow bg-slate-50">
        <section className="bg-blue-900 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Materiais para Pacientes</h1>
            <h2 className="text-xl text-blue-200">Disponíveis para Download!</h2>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Manual FIFA 11+<br/>(Português)</h2>
                <img 
                  src="/imagens/materiais-pacientes/capa-manual-fifa-11.webp" 
                  alt="Manual FIFA 11+ Português" 
                  className="w-full max-w-xs h-auto object-contain mb-8 rounded shadow-sm border border-slate-100"
                />
                <a 
                  href="https://www.drserracruz.com.br/wp-content/uploads/2025/08/MANUAL-FIFA-11-PORTUGUES.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition font-medium flex items-center gap-2"
                >
                  <i className="far fa-arrow-alt-circle-down"></i> Download
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Manual FIFA 11+<br/>(Inglês)</h2>
                <img 
                  src="/imagens/materiais-pacientes/capa-poster-fifa-11.webp" 
                  alt="Manual FIFA 11+ Inglês" 
                  className="w-full max-w-xs h-auto object-contain mb-8 rounded shadow-sm border border-slate-100"
                />
                <a 
                  href="https://www.drserracruz.com.br/wp-content/uploads/2025/08/POSTER-FIFA-11-INGLES.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition font-medium flex items-center gap-2"
                >
                  <i className="far fa-arrow-alt-circle-down"></i> Download
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default MateriaisPacientes;
