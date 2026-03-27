import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { SeoHead } from '../src/components/SeoHead';
import { STATIC_PAGE_SEO } from '../src/seo/pageSeo';

const LinksUteis: React.FC = () => {
  const seo = STATIC_PAGE_SEO['/links'];
  return (
    <div className="flex flex-col min-h-screen">
      <SeoHead title={seo.title} description={seo.description} path="/links" />
      <Header />
      <main className="pt-20 flex-grow bg-slate-50">
        <section className="bg-blue-900 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Links Úteis</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-2">SOCIEDADES</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li>
                  <a href="http://www.sbrate.com.br/index.php" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Sociedade Brasileira de Artroscopia e Trauma do Esporte</span>
                  </a>
                </li>
                <li>
                  <a href="http://www.sbot.org.br" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Sociedade Brasileira de Ortopedia e Traumatologia</span>
                  </a>
                </li>
                <li>
                  <a href="http://www.sbcj.org.br" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Sociedade Brasileira de Cirurgia do Joelho</span>
                  </a>
                </li>
                <li>
                  <a href="http://www.lyon-knee-surgery.com" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Escola Lyonesa de Cirurgia do Joelho</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.aaos.org" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>American Academy of Orthopaedic Surgeons</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.isakos.com" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>International Society of Arthroscopy, Knee Surgery and Orthopaedic Sports Medicine</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.esska.org" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>European Society of Sports Traumatology, Knee Surgery and Arthroscopy</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.sportsmed.org/aossmimis" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>American Orthopedic Society for Sports Medicine</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.sportsmed.org/aossmimis" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Arbeitsgemeinschaft für Osteosynthesefragen</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-2">PARCEIROS / INSTUIÇÕES DE REFERÊNCIA</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li>
                  <a href="https://www.sprivail.org" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Steadman-Philippon Research Institute</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.brasilsaude.org.br" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Instituto Brasil de Tecnologias da Saúde</span>
                  </a>
                </li>
                <li>
                  <a href="https://fundacaolemann.org.br" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Fundação Lemann</span>
                  </a>
                </li>
                <li>
                  <a href="http://www.biocinetica.com.br" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Biocinética</span>
                  </a>
                </li>
                <li>
                  <a href="http://www.stanfordsportsmedicine.com" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Medicina Esportiva da Universidade de Stanford</span>
                  </a>
                </li>
                <li>
                  <a href="http://centre-orthopedique-santy.com" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Centro Ortopédico Santy (Lyon – França)</span>
                  </a>
                </li>
                <li>
                  <a href="http://www.metsavaht.com.br" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Dr. Leonardo Metsavaht (diretor científico do IBTS)</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.into.saude.gov.br" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Instituto Nacional de Traumatologia e Ortopedia</span>
                  </a>
                </li>
                <li>
                  <a href="https://surfinjurydata.org" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Medicina do Surfe</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.brazilhealth.com" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Plataforma com dicas de saúde e indicações de médicos de referência nas mais diversas áreas.</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-2">EDUCAÇÃO MÉDICA</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li>
                  <a href="https://www.sportsoracle.com/Medicine/Home/" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Educação Médica do Comitê Olímpico Internacional (IOC)</span>
                  </a>
                </li>
                <li>
                  <a href="http://xrayhead.com" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Atlas de ressonância magnética da Universidade de Stanford</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/playlist?list=PL6nhZYquQOw_GVsM8d35HkxNUpw1vCcRB" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Série de vídeos do Dr. Robert LaPrade sobre interpretação de Ressonância Magnética de Joelho</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.fifamedicalnetwork.com" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Programa de Educação Médica da FIFA</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.f-marc.com/files/downloads/workbook/11plus_workbook_ptbr.pdf" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Programa de Aquecimento da FIFA para prevenir lesões no futebol</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.orthoillustrated.com" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Vídeos médicos educativos</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.aaos.org/videos/" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Vídeos médicos com técnicas cirúrgicas em ortopedia</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.arthroscopytechniques.org" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Artigos com vídeos de técnicas cirúrgicas do grupo Arthroscopy (AANA)</span>
                  </a>
                </li>
                <li>
                  <a href="https://journals.lww.com/jbjsest/pages/default.aspx" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>JBJS essential surgical techniques – técnicas cirúrgicas em ortopedia</span>
                  </a>
                </li>
                <li>
                  <a href="http://www.orthopaedicscore.com" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Escores em Ortopedia (observar validação para a língua portuguesa)</span>
                  </a>
                </li>
                <li>
                  <a href="http://www.wada-ama.org/en/content/what-is-prohibited" target="_blank" rel="noopener noreferrer" className="flex items-start text-blue-700 hover:text-blue-900 transition group">
                    <i className="fas fa-globe mt-1 mr-3 text-slate-400 group-hover:text-blue-600"></i>
                    <span>Agência anti-doping mundial - lista de substâncias proibidas</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default LinksUteis;
