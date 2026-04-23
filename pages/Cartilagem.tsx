import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { SeoHead } from '../src/components/SeoHead';
import { STATIC_PAGE_SEO } from '../src/seo/pageSeo';
import { WHATSAPP_AGENDAR_HREF } from '../src/config/whatsapp';

const Cartilagem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(1);

  const toggleTab = (tabIndex: number) => {
    setActiveTab(activeTab === tabIndex ? null : tabIndex);
  };

  const seo = STATIC_PAGE_SEO['/cartilagem'];
  return (
    <div className="flex flex-col min-h-screen">
      <SeoHead title={seo.title} description={seo.description} path="/cartilagem" ogImagePath={seo.ogImagePath} />
      <Header />
      <main className="pt-20 flex-grow bg-slate-50">
        <section
          style={{ backgroundImage: 'url(/imagens/inicio/mostrando-exame-na-tela.webp)' }}
          className="relative bg-blue-900 text-white py-40 bg-cover bg-center flex items-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent"></div>
          <div className="relative z-10 container mx-auto px-4 text-left">
            <h1 className="text-3xl md:text-5xl font-bold max-w-2xl">Lesões de cartilagem do joelho</h1>
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
                      Cartilagem articular
                      <i className={`fas fa-caret-${activeTab === 1 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 1 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li>
                            <a href="#funcao" className="hover:text-blue-600 transition">
                              Função da cartilagem
                            </a>
                          </li>
                          <li>
                            <a href="#lesoes" className="hover:text-blue-600 transition">
                              Como ocorrem as lesões
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
                      Avaliação clínica
                      <i className={`fas fa-caret-${activeTab === 2 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 2 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li>
                            <a href="#sintomas" className="hover:text-blue-600 transition">
                              Sintomas
                            </a>
                          </li>
                          <li>
                            <a href="#diagnostico" className="hover:text-blue-600 transition">
                              Diagnóstico por imagem
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
                      Tratamentos
                      <i className={`fas fa-caret-${activeTab === 3 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 3 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li>
                            <a href="#conservador" className="hover:text-blue-600 transition">
                              Abordagem conservadora
                            </a>
                          </li>
                          <li>
                            <a href="#cirurgicos" className="hover:text-blue-600 transition">
                              Procedimentos restaurativos
                            </a>
                          </li>
                          <li>
                            <a href="#visco" className="hover:text-blue-600 transition">
                              Viscosuplementação
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
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Cartilagem articular</h3>

                    <div id="funcao" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Função da cartilagem</h4>
                      <p className="text-slate-700 leading-relaxed">
                        A cartilagem hialina recobre as superfícies ósseas do joelho e permite movimento suave, distribui cargas e absorve impactos. Ela não tem vascularização abundante; por isso a capacidade de cicatrização espontânea é limitada quando há lesões profundas ou extensas.
                      </p>
                    </div>

                    <div id="lesoes" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Como ocorrem as lesões</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Podem ser traumáticas (torções, impactos, luxações) ou degenerativas (associadas à artrose). Existem também lesões "espontâneas" que, em geral, acometem pacientes adolescentes, conhecidas como osteocondrite dissecante. Lesões focais em pacientes jovens ou com boa expectativa de demanda física costumam ser avaliadas para tratamentos que visam restaurar a superfície articular, sempre priorizando o alívio sintomático e preservação funcional.
                      </p>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Avaliação clínica</h3>

                    <div id="sintomas" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Sintomas</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Dor localizada, sensação de travamento ou “clique”, inchaço após esforço e, em alguns casos, bloqueio. Os sintomas podem se sobrepor a lesões de menisco ou ligamentos; o exame clínico e a correlação com a história orientam os próximos passos.
                      </p>
                    </div>

                    <div id="diagnostico" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Diagnóstico por imagem</h4>
                      <p className="text-slate-700 leading-relaxed">
                        A ressonância magnética é o exame principal para mapear profundidade, localização e extensão da lesão de cartilagem, além de avaliar meniscos e ligamentos. Em Indaiatuba-SP, o Dr. Raphael Serra Cruz utiliza esses dados para indicar conduta conservadora ou cirúrgica e o tipo de procedimento mais adequado.
                      </p>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Tratamentos</h3>

                    <div id="conservador" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Abordagem conservadora</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Fortalecimento muscular, controle de atividades de impacto, fisioterapia e medicações conforme orientação médica podem melhorar sintomas em lesões leves ou em pacientes em que a cirurgia não é indicada.
                      </p>
                    </div>

                    <div id="cirurgicos" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Procedimentos restaurativos</h4>
                      <p className="text-slate-700 leading-relaxed">
                        É importante deixar bem claro que, mesmo com as técnicas mais avançadas e modernas presentes na literatura médica com o mais elevado nível de evidência científica, a cartilagem articular tem potencial mínimo ou quase nulo de <strong>regeneração</strong>. Portanto, pode ser considerado um erro chamar algumas técnicas de "medicina regenerativa". No entanto, existem sim procedimentos capazes de preencher os defeitos, restaurando a superfície articular e melhorando significativamente a qualidade de vida dos pacientes, permitindo inclusive o retorno a práticas esportivas. Estes procedimentos são apresentados ao paciente durante a consulta e, de acordo com algoritmos bem definidos na literatura médica, são indicados conforme o caso. Este é um dos tratamentos mais individualizados que existe na área de cirurgia do joelho, pois depende de muitas variáveis, incluindo a real capacidade do paciente em colaborar com os protocolos pós-operatórios, que podem ser muito restritivos, dependendo da técnica indicada.
                      </p>
                      <p className="mt-4 text-slate-700 leading-relaxed">
                        Estes procedimentos podem incluir desde <strong>microfratura/nanofratura</strong> (técnica desenvolvida pelo Dr. Richard Steadman, no mesmo hospital onde o Dr. Raphael Serra Cruz fez seu Fellowship internacional), <strong>transplante autólogo de cartilagem</strong> (OATS/Mosaicoplastia), enxertos osteocondrais homólogos, matriz de colágeno 3D/Hidrogel (CareS-1S) ou membranas de colágeno (Chondro-Gide), entre outras opções.
                      </p>
                      <p className="mt-4 text-slate-700 leading-relaxed">
                        A escolha depende do tamanho da lesão, localização, idade, nível de atividade e expectativas do paciente.
                      </p>
                    </div>

                    <div id="visco" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Viscosuplementação (ácido hialurônico)</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Em determinados quadros, especialmente com componente degenerativo ou dor mecânica, a <strong>viscosuplementação</strong> pode ser considerada como parte do manejo clínico. A indicação e o número de aplicações são definidos em consulta, com base em evidências e no seu perfil clínico. Na grande maioria das vezes, uma única aplicação, seguida de um bom plano de reabilitação, é suficiente.
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
              href={WHATSAPP_AGENDAR_HREF}
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

export default Cartilagem;
