import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { SeoHead } from '../src/components/SeoHead';
import { STATIC_PAGE_SEO } from '../src/seo/pageSeo';
import { WHATSAPP_AGENDAR_HREF } from '../src/config/whatsapp';

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
            <h1 className="text-3xl md:text-5xl font-bold max-w-2xl">Condromalácia e Instabilidade Patelar</h1>
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
                      Condromalácia e Instabilidade Patelar
                      <i className={`fas fa-caret-${activeTab === 1 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 1 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li>
                            <a href="#biomecanica" className="hover:text-blue-600 transition">
                              Condromalácia patelar e a importância da Biomecânica
                            </a>
                          </li>
                          <li>
                            <a href="#o-que-e-condromalacia" className="hover:text-blue-600 transition">
                              Mas afinal, o que é condromalácia patelar?
                            </a>
                          </li>
                          <li>
                            <a href="#como-diagnosticar" className="hover:text-blue-600 transition">
                              Como diagnosticar?
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
                      Tratamento
                      <i className={`fas fa-caret-${activeTab === 2 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 2 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li>
                            <a href="#tratamento-conservador" className="hover:text-blue-600 transition">
                              Tratamento conservador
                            </a>
                          </li>
                          <li>
                            <a href="#quando-cirurgia" className="hover:text-blue-600 transition">
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
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Condromalácia e Instabilidade Patelar</h3>

                    <div id="biomecanica" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Condromalácia patelar e a importância da Biomecânica</h4>
                      <p className="text-slate-700 leading-relaxed">
                        A dor anterior do joelho e a condropatia patelar são as queixas mais comuns no consultório de ortopedia e um dos temas nos quais o Dr. Raphael Serra Cruz tem uma abordagem extremamente diferenciada. Isso porque na imensa maioria dos casos, a origem do problema é biomecânica e muitos profissionais (mesmo especialistas em joelho) não têm conhecimento desta disciplina, por não fazer parte dos currículos das faculdades de medicina nem nas residências de ortopedia.
                      </p>
                      <p className="mt-4 text-slate-700 leading-relaxed">
                        A obsessão por melhores resultados para seus pacientes levou o Dr. Raphael Serra Cruz a buscar novos conhecimentos e decidiu que cobriria esta lacuna aprendendo com os maiores conhecedores de biomecânica: os fisioterapeutas. Realizou cursos formais e participou de fóruns de discussões onde era sempre o único médico presente. Por anos, esteve junto do grupo mais importante do Brasil de análise de movimento, chegando a publicar artigos e receber um prêmio internacional (EFORT). E esse conhecimento mudou a vida de seus pacientes.
                      </p>
                    </div>

                    <div id="o-que-e-condromalacia" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Mas afinal, o que é condromalácia patelar?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        De maneira bem simplificada, a condromalácia é uma espécie de amolecimento/degeneração que pode acontecer em qualquer cartilagem, tendo como causa principal uma sobrecarga mecânica, mas levando-se em consideração também possíveis fatores metabólicos, genéticos e ambientais.
                      </p>
                      <p className="mt-4 text-slate-700 leading-relaxed">
                        A condromalácia em si não deve encerrar um diagnóstico, mas ser uma comprovação de que algo está afetando a cartilagem. Por isso, é essencial ter uma abordagem individualizada, uma vez que cada paciente apresenta fatores biomecânicos únicos. Consequentemente, não necessariamente o mesmo tratamento proposto a um paciente rotulado com condromalácia terá êxito em outro, exigindo uma proposta personalizada.
                      </p>
                    </div>

                    <div id="como-diagnosticar" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Como diagnosticar?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        A investigação deve incluir o histórico de atividades do paciente, a presença ou não de patologias de base que possam afetar a cartilagem, a ocorrência ou não de lesões prévias, a anatomia do indivíduo, mas, principalmente, a biomecânica e possíveis desequilíbrios musculares. Exames físicos específicos e testes biomecânicos podem ser realizados no consultório, já pensando na provável etiologia.
                      </p>
                      <p className="mt-4 text-slate-700 leading-relaxed">
                        No entanto, para se ter uma documentação mais precisa do grau de acometimento e para fazer uma análise evolutiva, o exame padrão-ouro é a ressonância magnética. Além da ressonância, podem ser solicitados outros exames como radiografias em incidências especiais e análises laboratoriais da biomecânica do movimento.
                      </p>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Tratamento</h3>

                    <div id="tratamento-conservador" className="mb-8 scroll-mt-24">
                      <p className="text-slate-700 leading-relaxed">
                        Na maioria dos casos, o tratamento conservador é suficiente, sendo essencial a individualização de acordo com os parâmetros encontrados na fase de investigação diagnóstica. O "clássico" fortalecimento de quadríceps, com foco no vasto medial oblíquo (VMO), já caiu por terra há muitos anos, de acordo com a literatura especializada, confirmado através dos resultados clínicos.
                      </p>
                      <p className="mt-4 text-slate-700 leading-relaxed">
                        Na grande maioria dos pacientes, é possível corrigir os fatores biomecânicos identificados através de educação do paciente e técnicas de fisioterapia. Eventualmente, a correção pode ser realizada por profissionais de educação física (que também têm conhecimento de biomecânica) na própria academia. Em casos selecionados, a viscosuplementação com ácido hialurônico pode ser recomendada para facilitar este processo e proteger a cartilagem.
                      </p>
                    </div>

                    <div id="quando-cirurgia" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Quando a cirurgia é considerada</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Cirurgia é exceção nestes casos, sendo indicada para tratar as consequências de casos cronicamente negligenciados ou que foram conduzidos de maneira adequada inicialmente, levando a lesões irreversíveis da cartilagem. Para estes casos, além da abordagem biomecânica para alívio da pressão femoropatelar, o tratamento vai incluir as mesmas opções mencionadas na seção "cartilagem", que podem ir desde desbridamento/microfraturas, passando pelas estratégias com AMIC (Autologous Matrix-Induced Chondrogenesis - membrana de colágeno), matrizes de hidrogel 3D até o transplante autólogo ou homólogo de cartilagem.
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

export default CondromalaciaPatelar;
