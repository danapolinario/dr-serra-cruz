import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const CapitulosLivros: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-20 flex-grow bg-slate-50">
        <section className="bg-blue-900 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Capítulos de Livros</h1>
            <h2 className="text-xl text-blue-200">Conheça algumas produções acadêmicas e pesquisas do Dr. Serra Cruz</h2>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Capítulos de Livros</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 border-b font-semibold">CAPÍTULOS DE LIVROS</th>
                      <th className="p-4 border-b font-semibold">LIVRO</th>
                      <th className="p-4 border-b font-semibold">EDITORA</th>
                      <th className="p-4 border-b font-semibold w-32">ANO</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">Lesões no Surfe</td>
                      <td className="p-4 border-b">Beira do Campo - Urgências e Emergências no Esporte : Conceitos e prática para o médico de equipe ou delegação</td>
                      <td className="p-4 border-b">Thieme-Revinter</td>
                      <td className="p-4 border-b">2022 (in press)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">Lesões no Skate</td>
                      <td className="p-4 border-b">Beira do Campo - Urgências e Emergências no Esporte : Conceitos e prática para o médico de equipe ou delegação</td>
                      <td className="p-4 border-b">Thieme-Revinter</td>
                      <td className="p-4 border-b">2022 (in press)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">Síndrome Compartimental</td>
                      <td className="p-4 border-b">Beira do Campo - Urgências e Emergências no Esporte : Conceitos e prática para o médico de equipe ou delegação</td>
                      <td className="p-4 border-b">Thieme-Revinter</td>
                      <td className="p-4 border-b">2022 (in press)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.researchgate.net/profile/Raphael_Serra_Cruz/publication/327639579_Sutura_Meniscal_Tecnica_Posterior_para_Ramp_Lesion" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Sutura Meniscal: Técnica Posterior para "Ramp Lesion"</a></td>
                      <td className="p-4 border-b">O Menisco: Da avaliação e lesão ao transplante</td>
                      <td className="p-4 border-b">Thieme-Revinter</td>
                      <td className="p-4 border-b">2018</td>
                    </tr>
                  </tbody>
                </table>
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

export default CapitulosLivros;
