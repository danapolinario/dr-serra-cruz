import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { SeoHead } from '../src/components/SeoHead';
import { STATIC_PAGE_SEO } from '../src/seo/pageSeo';
import { WHATSAPP_AGENDAR_HREF } from '../src/config/whatsapp';

const Artrose: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(1);

  const toggleTab = (tabIndex: number) => {
    setActiveTab(activeTab === tabIndex ? null : tabIndex);
  };

  const seo = STATIC_PAGE_SEO['/artrose'];
  return (
    <div className="flex flex-col min-h-screen">
      <SeoHead title={seo.title} description={seo.description} path="/artrose" ogImagePath={seo.ogImagePath} />
      <Header />
      <main className="pt-20 flex-grow bg-slate-50">
        <section
          style={{ backgroundImage: 'url(/imagens/inicio/examinando-paciente.webp)' }}
          className="relative bg-blue-900 text-white py-40 bg-cover bg-center flex items-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent"></div>
          <div className="relative z-10 container mx-auto px-4 text-left">
            <h1 className="text-3xl md:text-5xl font-bold max-w-2xl">Artrose do joelho</h1>
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
                      Entendendo a artrose
                      <i className={`fas fa-caret-${activeTab === 1 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 1 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li>
                            <a href="#o-que-e" className="hover:text-blue-600 transition">
                              O que é a artrose do joelho?
                            </a>
                          </li>
                          <li>
                            <a href="#causas" className="hover:text-blue-600 transition">
                              Causas e fatores de risco
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
                      Sintomas e diagnóstico
                      <i className={`fas fa-caret-${activeTab === 2 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 2 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li>
                            <a href="#sintomas" className="hover:text-blue-600 transition">
                              Principais sintomas
                            </a>
                          </li>
                          <li>
                            <a href="#diagnostico" className="hover:text-blue-600 transition">
                              Como é feito o diagnóstico?
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
                              Tratamento conservador
                            </a>
                          </li>
                          <li>
                            <a href="#cirurgico" className="hover:text-blue-600 transition">
                              Infiltrações e opções biológicas
                            </a>
                          </li>
                          <li>
                            <a href="#protese" className="hover:text-blue-600 transition">
                              Artroplastia do joelho
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
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Entendendo a artrose</h3>

                    <div id="o-que-e" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">O que é a artrose do joelho?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        A artrose (osteoartrite) do joelho é uma doença degenerativa da cartilagem articular e das estruturas adjacentes. Com o tempo, a cartilagem que recobre os ossos (fêmur, tíbia e patela) vai perdendo espessura e qualidade, o que pode gerar dor, rigidez, estalos e limitação para caminhar, subir escadas ou agachar. É uma causa muito frequente de incapacidade, especialmente após os 50 anos, mas pode aparecer mais cedo em joelhos com lesões antigas ou sobrecarga repetitiva.
                      </p>
                    </div>

                    <div id="causas" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Causas e fatores de risco</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Fatores como idade, sobrepeso, histórico de lesões ligamentares ou meniscais, alinhamento do membro (varo ou valgo), sobrecarga laboral ou esportiva e predisposição genética aumentam o risco. A abordagem do Dr. Raphael Serra Cruz em Indaiatuba-SP considera o seu perfil clínico, exames de imagem e expectativas de vida para definir o melhor plano — conservador ou cirúrgico.
                      </p>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Sintomas e diagnóstico</h3>

                    <div id="sintomas" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Principais sintomas</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Dor mecânica (pior com esforço e melhora com repouso), inchaço ocasional, rigidez matinal ou após períodos sentado, redução progressiva do perímetro de movimento e, em fases avançadas, deformidade em varo ou valgo. Nem toda dor no joelho é artrose; por isso a avaliação com ortopedista especialista em joelho é essencial.
                      </p>
                    </div>

                    <div id="diagnostico" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Como é feito o diagnóstico?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        O diagnóstico combina história clínica, exame físico (testes de compartimento patelofemoral e tibiofemoral) e exames de imagem. Radiografias em aparelho ajudam a avaliar o estreitamento do espaço articular, osteófitos e alinhamento. A ressonância magnética pode detalhar cartilagem, meniscos e ligamentos associados, quando necessário para planejar tratamento.
                      </p>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Tratamentos</h3>

                    <div id="conservador" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Tratamento conservador</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Educação, controle de peso, atividade física guiada (fortalecimento de quadríceps e glúteos), fisioterapia, uso racional de analgésicos/anti-inflamatórios conforme prescrição e modificações no dia a dia costumam ser a primeira linha. Muitos pacientes ganham alívio significativo e adiam ou evitam cirurgia.
                      </p>
                    </div>

                    <div id="cirurgico" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Infiltrações e opções biológicas</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Em casos selecionados, podem ser discutidas infiltrações com corticosteroide (efeito anti-inflamatório), ácido hialurônico (viscosuplementação) ou outras estratégias conforme evidência e perfil do paciente. A decisão é individualizada, com explicação transparente de benefícios e limitações.
                      </p>
                    </div>

                    <div id="protese" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Artroplastia total e parcial do joelho</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Quando a dor e a limitação são graves e o tratamento conservador não alcança qualidade de vida aceitável, a cirurgia pode ser indicada. A <strong>artroplastia parcial</strong> substitui apenas o compartimento mais afetado; a <strong>artroplastia total</strong> substitui toda a articulação. O Dr. Raphael Serra Cruz discute indicações, próteses e recuperação com base em protocolos modernos e na sua rotina em Indaiatuba-SP.
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

export default Artrose;
