import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { SeoHead } from '../src/components/SeoHead';
import { STATIC_PAGE_SEO } from '../src/seo/pageSeo';

const CondromalaciaPatelar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(1);

  const toggleTab = (tabIndex: number) => {
    setActiveTab(activeTab === tabIndex ? null : tabIndex);
  };

  const seo = STATIC_PAGE_SEO['/condromalacia-patelar'];
  return (
    <div className="flex flex-col min-h-screen">
      <SeoHead title={seo.title} description={seo.description} path="/condromalacia-patelar" ogImagePath={seo.ogImagePath} />
      <Header />
      <main className="pt-20 flex-grow bg-slate-50">
        <section
          style={{ backgroundImage: 'url(/imagens/inicio/retrato-de-frente.webp)' }}
          className="relative bg-blue-900 text-white py-40 bg-cover bg-center flex items-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent"></div>
          <div className="relative z-10 container mx-auto px-4 text-left">
            <h1 className="text-3xl md:text-5xl font-bold max-w-2xl">Condromalácia patelar e dor anterior do joelho</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden sticky top-28">
                  <div className="border-b border-slate-100 last:border-0">
                    <button
                      type="button"
                      onClick={() => toggleTab(1)}
                      className={`w-full text-left px-6 py-4 font-bold flex justify-between items-center transition-colors ${activeTab === 1 ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'}`}
                    >
                      Patela e condromalácia
                      <i className={`fas fa-caret-${activeTab === 1 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 1 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li>
                            <a href="#o-que-e" className="hover:text-blue-600 transition">
                              O que é condromalácia patelar?
                            </a>
                          </li>
                          <li>
                            <a href="#dor-anterior" className="hover:text-blue-600 transition">
                              Dor na frente do joelho
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="border-b border-slate-100 last:border-0">
                    <button
                      type="button"
                      onClick={() => toggleTab(2)}
                      className={`w-full text-left px-6 py-4 font-bold flex justify-between items-center transition-colors ${activeTab === 2 ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'}`}
                    >
                      Causas e diagnóstico
                      <i className={`fas fa-caret-${activeTab === 2 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 2 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li>
                            <a href="#instabilidade" className="hover:text-blue-600 transition">
                              Instabilidade e alinhamento
                            </a>
                          </li>
                          <li>
                            <a href="#avaliacao" className="hover:text-blue-600 transition">
                              Avaliação clínica e imagem
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="border-b border-slate-100 last:border-0">
                    <button
                      type="button"
                      onClick={() => toggleTab(3)}
                      className={`w-full text-left px-6 py-4 font-bold flex justify-between items-center transition-colors ${activeTab === 3 ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'}`}
                    >
                      Tratamento
                      <i className={`fas fa-caret-${activeTab === 3 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 3 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li>
                            <a href="#conservador" className="hover:text-blue-600 transition">
                              Fisioterapia e exercícios
                            </a>
                          </li>
                          <li>
                            <a href="#cirurgico" className="hover:text-blue-600 transition">
                              Quando a cirurgia é considerada
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Patela e condromalácia</h3>

                    <div id="o-que-e" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">O que é condromalácia patelar?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        A <strong>condromalácia patelar</strong> refere-se ao amolecimento ou alteração da cartilagem da superfície posterior da patela (rótula), na zona de contato com o fêmur. É um dos componentes da <strong>condropatia patelofemoral</strong> — conjunto de alterações que podem gerar dor, estalos e sensação de “travamento” na frente do joelho, principalmente em agachamentos, escadas e corridas.
                      </p>
                    </div>

                    <div id="dor-anterior" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Dor na frente do joelho</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Dor anterior é um sintoma comum e tem várias causas possíveis além da condromalácia (tendinites, síndrome da banda iliotibial, problemas de menisco, etc.). O Dr. Raphael Serra Cruz em Indaiatuba-SP investiga o quadro de forma integrada para identificar a origem da dor e indicar o tratamento mais adequado.
                      </p>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Causas e diagnóstico</h3>

                    <div id="instabilidade" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Instabilidade patelar e alinhamento</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Fatores como desalinhamento da patela (lateralização), musculatura fraca ou desequilibrada (quadríceps e glúteos), sobrecarga em esportes com muita flexão de joelho, anatomia da extremidade inferior e histórico de luxações ou subluxações patelares podem contribuir para a sobrecarga da cartilagem patelar e para a dor.
                      </p>
                    </div>

                    <div id="avaliacao" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Avaliação clínica e imagem</h4>
                      <p className="text-slate-700 leading-relaxed">
                        O exame físico avalia rastreamento da patela, testes de compressão patelar, força muscular e marcha. Radiografias podem mostrar alinhamento; a ressonância magnética ajuda a graduar a lesão de cartilagem e a descartar outras patologias. Esse conjunto orienta se a prioridade é reabilitação, ajustes de atividade ou, em casos selecionados, procedimento cirúrgico.
                      </p>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Tratamento</h3>

                    <div id="conservador" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Fisioterapia e exercícios</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Na maioria dos casos, o tratamento conservador é a primeira linha: fortalecimento do quadríceps (especialmente vasto medial), glúteos e core, alongamentos, controle de volume de treino, técnicas de correção biomecânica e, quando indicado, uso de orteses ou taping. A progressão é individualizada conforme a resposta da dor e as metas do paciente.
                      </p>
                    </div>

                    <div id="cirurgico" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Quando a cirurgia é considerada</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Cirurgia pode ser discutida em casos de <strong>instabilidade patelar</strong> recorrente, lesões associadas que exigem correção ou falha do tratamento conservador bem conduzido. Procedimentos variam conforme o problema (liberações ou realinhamentos da extensora, tratamento de cartilagem, etc.) e devem ser decididos após conversa detalhada sobre objetivos e expectativas de recuperação.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Agende sua consulta com o Dr. Raphael Serra Cruz</h2>
            <p className="text-slate-600 mb-8 text-lg">Especialista em Cirurgia do Joelho e Traumatologia Esportiva em Indaiatuba-SP.</p>
            <a
              href="https://api.whatsapp.com/send?phone=5519998321140&text=Ol%C3%A1%20Dr.%20Raphael%20Serra%20Cruz!%20Tudo%20bem%3F%20Gostaria%20de%20agendar%20uma%20consulta!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition font-medium text-lg shadow-lg shadow-green-600/20"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              Agendar via WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default CondromalaciaPatelar;
