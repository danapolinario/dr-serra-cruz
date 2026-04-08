import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { SeoHead } from '../src/components/SeoHead';
import { STATIC_PAGE_SEO } from '../src/seo/pageSeo';

const Meniscos: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(1);

  const toggleTab = (tabIndex: number) => {
    setActiveTab(activeTab === tabIndex ? null : tabIndex);
  };

  const seo = STATIC_PAGE_SEO['/meniscos'];
  return (
    <div className="flex flex-col min-h-screen">
      <SeoHead title={seo.title} description={seo.description} path="/meniscos" ogImagePath={seo.ogImagePath} />
      <Header />
      <main className="pt-20 flex-grow bg-slate-50">
        <section 
          style={{ backgroundImage: 'url(/imagens/inicio/examinando-paciente.webp)' }}
          className="relative bg-blue-900 text-white py-40 bg-cover bg-center flex items-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-left">
            <h1 className="text-3xl md:text-5xl font-bold max-w-2xl">Lesões Meniscais</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Accordion Column */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden sticky top-28">
                  
                  {/* Tab 1 */}
                  <div className="border-b border-slate-100 last:border-0">
                    <button 
                      onClick={() => toggleTab(1)}
                      className={`w-full text-left px-6 py-4 font-bold flex justify-between items-center transition-colors ${activeTab === 1 ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'}`}
                    >
                      Sobre os Meniscos
                      <i className={`fas fa-caret-${activeTab === 1 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 1 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li><a href="#oque" className="hover:text-blue-600 transition">O que são os meniscos?</a></li>
                          <li><a href="#funcao" className="hover:text-blue-600 transition">Qual a função dos meniscos?</a></li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Tab 2 */}
                  <div className="border-b border-slate-100 last:border-0">
                    <button 
                      onClick={() => toggleTab(2)}
                      className={`w-full text-left px-6 py-4 font-bold flex justify-between items-center transition-colors ${activeTab === 2 ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'}`}
                    >
                      Lesões e Sintomas
                      <i className={`fas fa-caret-${activeTab === 2 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 2 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li><a href="#causas" className="hover:text-blue-600 transition">Como ocorrem as lesões meniscais?</a></li>
                          <li><a href="#sintomas" className="hover:text-blue-600 transition">Quais são os principais sintomas?</a></li>
                          <li><a href="#diagnostico" className="hover:text-blue-600 transition">Como é feito o diagnóstico?</a></li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Tab 3 */}
                  <div className="border-b border-slate-100 last:border-0">
                    <button 
                      onClick={() => toggleTab(3)}
                      className={`w-full text-left px-6 py-4 font-bold flex justify-between items-center transition-colors ${activeTab === 3 ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'}`}
                    >
                      Tratamentos
                      <i className={`fas fa-caret-${activeTab === 3 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 3 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li><a href="#conservador" className="hover:text-blue-600 transition">Tratamento conservador (sem cirurgia)</a></li>
                          <li><a href="#cirurgia" className="hover:text-blue-600 transition">Quando a cirurgia é indicada?</a></li>
                          <li><a href="#sutura" className="hover:text-blue-600 transition">Sutura Meniscal vs. Meniscectomia</a></li>
                          <li><a href="#posoperatorio" className="hover:text-blue-600 transition">Como é a recuperação pós-operatória?</a></li>
                        </ul>
                      </div>
                    )}
                  </div>

                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
                  
                  {/* Sobre os Meniscos Section */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Sobre os Meniscos</h3>
                    
                    <div id="oque" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">O que são os meniscos?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Os meniscos são estruturas de fibrocartilagem em formato de "C" localizadas dentro da articulação do joelho, entre o fêmur (osso da coxa) e a tíbia (osso da perna). Cada joelho possui dois meniscos: o menisco medial (na parte interna do joelho) e o menisco lateral (na parte externa). Eles atuam como verdadeiros "amortecedores" da articulação.
                      </p>
                    </div>

                    <div id="funcao" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Qual a função dos meniscos?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        A principal função dos meniscos é absorver o impacto e distribuir o peso do corpo de forma uniforme sobre a cartilagem articular. Além disso, eles contribuem para a estabilidade do joelho, auxiliam na lubrificação da articulação e ajudam na propriocepção (percepção da posição da articulação no espaço). A preservação dos meniscos é fundamental para evitar o desgaste precoce da cartilagem, conhecido como artrose.
                      </p>
                    </div>
                  </div>

                  {/* Lesões e Sintomas Section */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Lesões e Sintomas</h3>
                    
                    <div id="causas" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Como ocorrem as lesões meniscais?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        As lesões dos meniscos podem ser divididas basicamente em dois tipos: traumáticas e degenerativas. As lesões traumáticas ocorrem frequentemente em pacientes jovens e ativos, geralmente durante a prática de esportes, através de um movimento de torção (entorse) do joelho com o pé fixo no chão. Já as lesões degenerativas ocorrem em pacientes mais velhos, devido ao desgaste natural e enfraquecimento do tecido meniscal ao longo do tempo, podendo romper-se até mesmo em atividades rotineiras, como agachar ou levantar de uma cadeira.
                      </p>
                    </div>

                    <div id="sintomas" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Quais são os principais sintomas?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Os sintomas mais comuns incluem dor na linha da articulação (interna ou externa, dependendo do menisco afetado), inchaço (derrame articular), estalos durante o movimento e, em casos de lesões maiores (como a lesão em "alça de balde"), pode ocorrer o bloqueio articular, onde o paciente não consegue esticar ou dobrar o joelho completamente. A sensação de falseio também pode estar presente.
                      </p>
                    </div>

                    <div id="diagnostico" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Como é feito o diagnóstico?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        O diagnóstico é essencialmente clínico, baseado na história do paciente e no exame físico detalhado realizado pelo ortopedista especialista em joelho, através de manobras específicas que provocam dor ou estalidos. Para confirmar a lesão, avaliar sua extensão, tipo e verificar a presença de lesões associadas (como lesões de ligamentos ou cartilagem), o exame padrão-ouro é a Ressonância Magnética.
                      </p>
                    </div>
                  </div>

                  {/* Tratamentos Section */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Tratamentos</h3>
                    
                    <div id="conservador" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Tratamento conservador (sem cirurgia)</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Nem toda lesão de menisco precisa de cirurgia. Lesões pequenas, estáveis, degenerativas ou localizadas na periferia do menisco (onde há melhor vascularização) podem responder muito bem ao tratamento conservador. Este tratamento envolve repouso relativo, uso de medicações anti-inflamatórias, gelo e, fundamentalmente, fisioterapia para fortalecimento muscular e reequilíbrio biomecânico.
                      </p>
                    </div>

                    <div id="cirurgia" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Quando a cirurgia é indicada?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        A cirurgia é indicada quando o tratamento conservador falha, quando há bloqueio articular (o joelho trava), em lesões grandes e instáveis, ou em pacientes jovens e atletas com lesões traumáticas agudas. O objetivo principal da cirurgia moderna do menisco é preservar o máximo de tecido meniscal possível para proteger a articulação contra a artrose futura.
                      </p>
                    </div>

                    <div id="sutura" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Sutura Meniscal vs. Meniscectomia</h4>
                      <p className="text-slate-700 leading-relaxed">
                        A cirurgia é realizada por artroscopia (por vídeo), um procedimento minimamente invasivo. Existem duas abordagens principais:
                      </p>
                      <ul className="list-disc pl-6 mt-4 text-slate-700 space-y-2">
                        <li><strong>Sutura Meniscal:</strong> É o procedimento de escolha sempre que possível. Consiste em "costurar" a lesão, preservando todo o menisco. É indicada para lesões na zona vermelha (vascularizada) do menisco, onde há potencial de cicatrização.</li>
                        <li><strong>Meniscectomia Parcial:</strong> Consiste na remoção apenas da parte rompida e instável do menisco, preservando o tecido saudável restante. É realizada quando a lesão não tem potencial de cicatrização (zona branca, avascular) ou quando o tecido está muito degenerado para ser suturado.</li>
                      </ul>
                    </div>

                    <div id="posoperatorio" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Como é a recuperação pós-operatória?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        A recuperação depende do procedimento realizado. Na <strong>meniscectomia parcial</strong>, a recuperação é mais rápida. O paciente geralmente recebe alta no mesmo dia, pode pisar com o auxílio de muletas por poucos dias e inicia a fisioterapia precocemente, retornando às atividades normais em poucas semanas. 
                      </p>
                      <p className="text-slate-700 leading-relaxed mt-4">
                        Já na <strong>sutura meniscal</strong>, a reabilitação é mais cautelosa para permitir a cicatrização do menisco. O paciente pode precisar usar muletas e um imobilizador (brace) por 4 a 6 semanas, com restrição de carga e de flexão do joelho. O retorno aos esportes de impacto pode levar de 4 a 6 meses. O Dr. Raphael Serra Cruz, atendendo em Indaiatuba-SP, acompanha de perto cada etapa da reabilitação para garantir o melhor resultado.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Agende sua consulta com o Dr. Raphael Serra Cruz</h2>
            <p className="text-slate-600 mb-8 text-lg">
              Especialista em Cirurgia do Joelho e Traumatologia Esportiva em Indaiatuba-SP.
            </p>
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

export default Meniscos;
