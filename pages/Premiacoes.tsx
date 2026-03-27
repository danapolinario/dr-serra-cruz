import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const Premiacoes: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-20 flex-grow bg-slate-50">
        <section className="bg-blue-900 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Premiações</h1>
            <h2 className="text-xl text-blue-200">Conheça algumas premiações nacionais e internacionais do Dr. Serra Cruz</h2>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Premiações</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 border-b font-semibold">PRÊMIOS</th>
                      <th className="p-4 border-b font-semibold">EMISSOR</th>
                      <th className="p-4 border-b font-semibold">TÍTULO</th>
                      <th className="p-4 border-b font-semibold w-24">ANO</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b font-medium">EFORT MICHAEL FREEMAN AWARD</td>
                      <td className="p-4 border-b">European Federation of National Associations of Orthopaedics and Traumatology</td>
                      <td className="p-4 border-b">3D Spatiotemporal Parameters Of Gait In Individuals With Osteoarthritis Of The Knee Submitted To Treatment With Intra-Articular Viscosupplementation: A Prospective Double-Blinded Randomized Controlled Trial</td>
                      <td className="p-4 border-b">2019</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b font-medium">ESSKA BASIC SCIENTIST TRAVEL GRANT</td>
                      <td className="p-4 border-b">European Society for Sports Traumatology, Knee Surgery and Arthroscopy</td>
                      <td className="p-4 border-b">An In Vitro Robotic Assessment of the Anterolateral Ligament, Part 2: Anterolateral Ligament Reconstruction Combined With Anterior Cruciate Ligament Reconstruction</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b font-medium">EXCELLENCE IN RESEARCH</td>
                      <td className="p-4 border-b">American Orthopaedic Society for Sports Medicine</td>
                      <td className="p-4 border-b">Anatomic Anterolateral Ligament Reconstruction of the Knee Leads to Overconstraint at any Fixation Angle</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b font-medium">PRÊMIO INTERNACIONAL JORGE PAULO LEMMAN DE PESQUISA CIENTÍFICA EM BIOMECÂNICA E ARTROSCOPIA E BIOMECÂNICA DO JOELHO</td>
                      <td className="p-4 border-b">Instituto Brasil de Tecnologias da Saúde</td>
                      <td className="p-4 border-b">International Fellowship</td>
                      <td className="p-4 border-b">2015</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b font-medium">TRAVELLING FELLOWSHIP</td>
                      <td className="p-4 border-b">Sociedade Brasileira de Artroscopia e Trauma do Esporte</td>
                      <td className="p-4 border-b">Travelling Fellowship</td>
                      <td className="p-4 border-b">2012</td>
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

export default Premiacoes;
