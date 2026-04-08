import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { SeoHead } from '../src/components/SeoHead';
import { STATIC_PAGE_SEO } from '../src/seo/pageSeo';

const PalestrasCongressos: React.FC = () => {
  const seo = STATIC_PAGE_SEO['/palestras-e-congressos'];
  return (
    <div className="flex flex-col min-h-screen">
      <SeoHead title={seo.title} description={seo.description} path="/palestras-e-congressos" ogImagePath={seo.ogImagePath} />
      <Header />
      <main className="pt-20 flex-grow bg-slate-50">
        <section className="bg-blue-900 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Palestras e Congressos</h1>
            <h2 className="text-xl text-blue-200">Nacionais e Internacionais</h2>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Palestras e Congressos</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 border-b font-semibold">TÍTULO</th>
                      <th className="p-4 border-b font-semibold">EVENTO</th>
                      <th className="p-4 border-b font-semibold">PARTICIPAÇÃO</th>
                      <th className="p-4 border-b font-semibold w-24">ANO</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">A PREVENÇÃO DE LESÕES ORTOPÉDICAS DE REPETIÇÃO</td>
                      <td className="p-4 border-b">VI SIMPÓSIO BRASILEIRO DE SAÚDE E MEDICINA DO SURFE</td>
                      <td className="p-4 border-b">MODERADOR</td>
                      <td className="p-4 border-b">2021</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">MANEJO DE LESÕES MENISCAIS COMPLEXAS</td>
                      <td className="p-4 border-b">REUNIÃO CIENTÍFICA MENSAL SBCJ RIO DE JANEIRO</td>
                      <td className="p-4 border-b">MODERADOR</td>
                      <td className="p-4 border-b">2021</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">3D Spatiotemporal Parameters Of Gait In Individuals With Osteoarthritis Of The Knee Submitted To Treatment With Intra-Articular Viscosupplementation: A Prospective Double-Blinded Randomized Controlled Trial</td>
                      <td className="p-4 border-b">European Federation of National Associations of Orthopaedics and Traumatology Annual Meeting</td>
                      <td className="p-4 border-b">TEMA LIVRE</td>
                      <td className="p-4 border-b">2019</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">Pain And Quality Of Life In Individuals With Osteoarthritis Of The Knee Submitted To Treatment With Intra-Articular Viscosupplementation: A Prospective Double-Blinded Randomized Controlled Trial</td>
                      <td className="p-4 border-b">European Federation of National Associations of Orthopaedics and Traumatology Annual Meeting</td>
                      <td className="p-4 border-b">TEMA LIVRE</td>
                      <td className="p-4 border-b">2019</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">3D Knee Functional Range Of Motion During Gait In Individuals With Osteoarthritis Of The Knee Submitted To Treatment With Intra-Articular Viscosupplementation: A Double-Blinded Randomized Controlled Trial</td>
                      <td className="p-4 border-b">European Federation of National Associations of Orthopaedics and Traumatology Annual Meeting</td>
                      <td className="p-4 border-b">TEMA LIVRE</td>
                      <td className="p-4 border-b">2019</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">FATORES DE RISCO ENVOLVIDOS NAS LESÕES DO MEMBRO INFERIOR NA CORRIDA</td>
                      <td className="p-4 border-b">Congresso Nacional - Sociedade Brasileira de Ortopedia e Trauma do Esporte</td>
                      <td className="p-4 border-b">PALESTRANTE</td>
                      <td className="p-4 border-b">2019</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">TERAPIAS EMERGENTES NO TRAUMA DO ESPORTE</td>
                      <td className="p-4 border-b">Congresso Nacional - Sociedade Brasileira de Ortopedia e Trauma do Esporte</td>
                      <td className="p-4 border-b">PRESIDENTE DE SESSÃO</td>
                      <td className="p-4 border-b">2019</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">ESTADO DA ARTE NO TRATAMENTO DAS LESÕES MENISCAIS NO ATLETA</td>
                      <td className="p-4 border-b">Congresso Nacional - Sociedade Brasileira de Ortopedia e Trauma do Esporte</td>
                      <td className="p-4 border-b">PRESIDENTE DE SESSÃO</td>
                      <td className="p-4 border-b">2019</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">SYNDESMOSIS INJURIES IN FOOTBALL - HOW TO PICK THE WINNERS</td>
                      <td className="p-4 border-b">Congresso Nacional - Sociedade Brasileira de Ortopedia e Trauma do Esporte</td>
                      <td className="p-4 border-b">PRESIDENTE DE SESSÃO</td>
                      <td className="p-4 border-b">2019</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">EVOLUÇÃO NO DEPARTAMENTO MÉDICO DO FUTEBOL</td>
                      <td className="p-4 border-b">Congresso Nacional - Sociedade Brasileira de Ortopedia e Trauma do Esporte</td>
                      <td className="p-4 border-b">PRESIDENTE DE SESSÃO</td>
                      <td className="p-4 border-b">2019</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">AVALIAÇÃO DE TEMAS LIVRES</td>
                      <td className="p-4 border-b">Congresso Nacional - Sociedade Brasileira de Ortopedia e Trauma do Esporte</td>
                      <td className="p-4 border-b">AVALIADOR</td>
                      <td className="p-4 border-b">2019</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">Tenodese lateral do tipo Lemaire modificado associada a reconstrução articular do LCA com enxerto osso-tendão-osso utilizando mecanismo de fixação ajustável</td>
                      <td className="p-4 border-b">Congresso Brasileiro de Ortopedia e Traumatologia (SBOT)</td>
                      <td className="p-4 border-b">VIDEO</td>
                      <td className="p-4 border-b">2019</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">LESÃO DO LIGAMENTO CRUZADO POSTERIOR</td>
                      <td className="p-4 border-b">ORTOCURSO - SBOT - RJ</td>
                      <td className="p-4 border-b">PALESTRANTE</td>
                      <td className="p-4 border-b">2019</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">REVISÃO DE ATJ - ESCOLHA DA CONSTRICÇÃO</td>
                      <td className="p-4 border-b">JORNADA DE CIRURGIA DO JOELHO HSVP</td>
                      <td className="p-4 border-b">PALESTRANTE</td>
                      <td className="p-4 border-b">2019</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">MESA REDONDA - CONTROVÉRSIAS E ATJ EM SITUAÇÕES ESPECIAIS</td>
                      <td className="p-4 border-b">JORNADA DE CIRURGIA DO JOELHO HSVP</td>
                      <td className="p-4 border-b">MODERADOR</td>
                      <td className="p-4 border-b">2019</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">Técnica Cirúrgica Facilmente Reprodutível Para o Tratamento da Tendinopatia Patelar Crônica (CINE-SBOT)</td>
                      <td className="p-4 border-b">Congresso Brasileiro de Ortopedia e Traumatologia (SBOT)</td>
                      <td className="p-4 border-b">VIDEO</td>
                      <td className="p-4 border-b">2018</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">RAIZ MENISCAL: INDICAÇÕES E TÉCNICAS</td>
                      <td className="p-4 border-b">Jornada Regional da Sociedade Brasileira de Cirurgia do Joelho - Itaipava</td>
                      <td className="p-4 border-b">PALESTRANTE</td>
                      <td className="p-4 border-b">2018</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">LESÕES NO JOELHO EM ATLETAS DE FUTEBOL</td>
                      <td className="p-4 border-b">Simpósio de futebol de base do Clube de Regatas do Flamengo</td>
                      <td className="p-4 border-b">PALESTRANTE</td>
                      <td className="p-4 border-b">2018</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">Avaliação de novos membros SBCJ</td>
                      <td className="p-4 border-b">Congresso Brasileiro de Cirurgia do Joelho (SBCJ)</td>
                      <td className="p-4 border-b">AVALIADOR</td>
                      <td className="p-4 border-b">2018</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">LIGAMENTO ANTEROLATEREAL DO JOELHO - ESCOLA AMERICANA</td>
                      <td className="p-4 border-b">Encontro Regional da Sociedade Brasileira de Cirurgia do Joelho-RJ</td>
                      <td className="p-4 border-b">PALESTRANTE</td>
                      <td className="p-4 border-b">2017</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">LESÕES MENISCAIS ESPECIAIS (RAIZ E RAMPA)</td>
                      <td className="p-4 border-b">JORNADA DE CIRURGIA DO JOELHO HSVP</td>
                      <td className="p-4 border-b">PALESTRANTE</td>
                      <td className="p-4 border-b">2017</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">MESA REDONDA - TRATAMENTO DAS LESÕES MENISCAIS</td>
                      <td className="p-4 border-b">JORNADA DE CIRURGIA DO JOELHO HSVP</td>
                      <td className="p-4 border-b">MODERADOR</td>
                      <td className="p-4 border-b">2017</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">Internal and External Rotation Stabilizers of the Knee with Intact Cruciate and Collateral Ligaments: A Biomechanical Study</td>
                      <td className="p-4 border-b">American Academy of Orthopaedic Surgeons Annual Meeting</td>
                      <td className="p-4 border-b">TEMA LIVRE</td>
                      <td className="p-4 border-b">2017</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">Compreendendo as lesões das raízes posteriores dos meniscos: da ciencia básica ao tratamento (poster)</td>
                      <td className="p-4 border-b">Congresso Brasileiro de Cirurgia do Joelho (SBCJ)</td>
                      <td className="p-4 border-b">POSTER</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">Compreendendo as lesões das raízes meniscais</td>
                      <td className="p-4 border-b">Encontro Regional da Sociedade Brasileira de Cirurgia do Joelho-RJ</td>
                      <td className="p-4 border-b">PALESTRANTE</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">Patellofemoral Joint Reconstruction</td>
                      <td className="p-4 border-b">American Academy of Orthopaedic Surgeons Annual Meeting</td>
                      <td className="p-4 border-b">VIDEO</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">Inside-Out Meniscal Repair - Surgical Technique</td>
                      <td className="p-4 border-b">American Academy of Orthopaedic Surgeons Annual Meeting</td>
                      <td className="p-4 border-b">VIDEO</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">Fresh Osteochondral Allograft - Surgical Technique</td>
                      <td className="p-4 border-b">American Academy of Orthopaedic Surgeons Annual Meeting</td>
                      <td className="p-4 border-b">VIDEO</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">Anterolateral Ligament Reconstruction Combined With An Anterior Cruciate Ligament Reconstruction: An In Vitro Robotic Assessment Of The Anterolateral Ligament</td>
                      <td className="p-4 border-b">American Academy of Orthopaedic Surgeons Annual Meeting</td>
                      <td className="p-4 border-b">TEMA LIVRE</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">Robotic Assessment of Anterolateral Ligament: Secondary Role in the Setting of an Anterior Cruciate Ligament Injury</td>
                      <td className="p-4 border-b">European Society for Sports Traumatology, Knee Surgery and Arthroscopy - Congress</td>
                      <td className="p-4 border-b">TEMA LIVRE</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">Robotic assessment of anterolateral ligament: Reconstruction of the anterolateral and anterior cruciate ligament</td>
                      <td className="p-4 border-b">European Society for Sports Traumatology, Knee Surgery and Arthroscopy - Congress</td>
                      <td className="p-4 border-b">TEMA LIVRE</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">Anatomic Anterolateral Ligament Reconstruction of the Knee Leads to Overconstraint at Any Fixation Angle</td>
                      <td className="p-4 border-b">American Orthopaedic Society for Sports Medicine Annual Meeting</td>
                      <td className="p-4 border-b">TEMA LIVRE</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">Logística de sala para a reconstrução do canto póstero-lateral do joelho</td>
                      <td className="p-4 border-b">Current Concepts in Biomechanics and Surgery</td>
                      <td className="p-4 border-b">PALESTRANTE</td>
                      <td className="p-4 border-b">2015</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b">Satisfação pós Artroplastia total de joelho: correlação com idade e grau de acometimento articular.</td>
                      <td className="p-4 border-b">Congresso Brasileiro de Cirurgia do Joelho (SBCJ)</td>
                      <td className="p-4 border-b">PALESTRANTE</td>
                      <td className="p-4 border-b">2014</td>
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

export default PalestrasCongressos;
