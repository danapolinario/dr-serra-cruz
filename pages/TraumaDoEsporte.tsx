import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { SeoHead } from '../src/components/SeoHead';
import { STATIC_PAGE_SEO } from '../src/seo/pageSeo';

const TraumaDoEsporte: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(1);

  const toggleTab = (tabIndex: number) => {
    setActiveTab(activeTab === tabIndex ? null : tabIndex);
  };

  const seo = STATIC_PAGE_SEO['/trauma-do-esporte'];
  return (
    <div className="flex flex-col min-h-screen">
      <SeoHead title={seo.title} description={seo.description} path="/trauma-do-esporte" ogImagePath={seo.ogImagePath} />
      <Header />
      <main className="pt-20 flex-grow bg-slate-50">
        <section
          style={{ backgroundImage: 'url(/imagens/inicio/dr-raphael-serra-cruz-rio-open-tenis.webp)' }}
          className="relative bg-blue-900 text-white py-40 bg-cover bg-center flex items-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent"></div>
          <div className="relative z-10 container mx-auto px-4 text-left">
            <h1 className="text-3xl md:text-5xl font-bold max-w-2xl">Trauma do esporte no joelho</h1>
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
                      Visão geral
                      <i className={`fas fa-caret-${activeTab === 1 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 1 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li>
                            <a href="#atleta" className="hover:text-blue-600 transition">
                              Atletas e lesões do joelho
                            </a>
                          </li>
                          <li>
                            <a href="#tipos" className="hover:text-blue-600 transition">
                              Principais tipos de lesão
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
                      Avaliação
                      <i className={`fas fa-caret-${activeTab === 2 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 2 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li>
                            <a href="#urgencia" className="hover:text-blue-600 transition">
                              Quando procurar ajuda
                            </a>
                          </li>
                          <li>
                            <a href="#imagem" className="hover:text-blue-600 transition">
                              Exames de imagem
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
                      Tratamento e retorno
                      <i className={`fas fa-caret-${activeTab === 3 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 3 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li>
                            <a href="#conduta" className="hover:text-blue-600 transition">
                              Conservador ou cirúrgico
                            </a>
                          </li>
                          <li>
                            <a href="#reabilitacao" className="hover:text-blue-600 transition">
                              Reabilitação
                            </a>
                          </li>
                          <li>
                            <a href="#retorno" className="hover:text-blue-600 transition">
                              Retorno ao esporte
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
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Visão geral</h3>

                    <div id="atleta" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Atletas profissionais e amadores</h4>
                      <p className="text-slate-700 leading-relaxed">
                        O joelho é uma das articulações mais exigidas em esportes de corrida, mudanças de direção, saltos e contato. O Dr. Raphael Serra Cruz atende atletas de diferentes níveis em Indaiatuba-SP, com foco em diagnóstico preciso, tratamento alinhado às metas de cada pessoa e planejamento seguro para voltar à atividade — seja competição de alto rendimento ou lazer no fim de semana.
                      </p>
                    </div>

                    <div id="tipos" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Principais tipos de lesão</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Entre as causas mais comuns estão rupturas de <strong>ligamentos</strong> (como o LCA), lesões de <strong>menisco</strong>, contusões ósseas, fraturas por estresse, lesões de <strong>cartilagem</strong> e problemas na patela. Muitas vezes há combinação de estruturas lesionadas; por isso a avaliação completa do joelho é fundamental antes de definir a conduta.
                      </p>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Avaliação</h3>

                    <div id="urgencia" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Quando procurar ajuda</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Dor intensa após trauma, incapacidade de apoiar o membro, joelho “que saiu do lugar”, inchaço importante em poucas horas ou sensação de instabilidade merecem avaliação ortopédica. Em lesões agudas, o tempo entre o evento e o diagnóstico pode influenciar opções de tratamento e recuperação.
                      </p>
                    </div>

                    <div id="imagem" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Exames de imagem</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Radiografias podem descartar fraturas; a ressonância magnética detalha ligamentos, meniscos e cartilagem. O ortopedista correlaciona os achados com o exame físico e com o esporte praticado para propor o melhor plano — que pode incluir repouso guiado, reabilitação intensiva ou cirurgia quando indicada.
                      </p>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Tratamento e retorno ao esporte</h3>

                    <div id="conduta" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Conservador ou cirúrgico</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Nem toda lesão exige cirurgia; algumas respondem bem a fisioterapia e modificações de treino. Quando há indicação operatória (por exemplo, reconstrução do LCA ou reparo meniscal), a técnica e o timing são discutidos de forma transparente, com explicação de riscos, benefícios e prazos de recuperação.
                      </p>
                    </div>

                    <div id="reabilitacao" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Reabilitação</h4>
                      <p className="text-slate-700 leading-relaxed">
                        A reabilitação é parte central do tratamento do trauma esportivo no joelho. Fortalecimento progressivo, controle de carga, trabalho de propriocepção e retorno gradual aos gestos do esporte reduzem o risco de nova lesão e melhoram o desempenho.
                      </p>
                    </div>

                    <div id="retorno" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Retorno seguro à atividade</h4>
                      <p className="text-slate-700 leading-relaxed">
                        O retorno ao esporte deve ser baseado em critérios funcionais — força, amplitude de movimento, ausência de dor e testes específicos — e não apenas em tempo fixo desde a cirurgia. O acompanhamento com especialista em joelho ajuda a alinhar expectativas e a evitar retornos prematuros que comprometam o resultado a longo prazo.
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

export default TraumaDoEsporte;
