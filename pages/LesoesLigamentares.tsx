import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { SeoHead } from '../src/components/SeoHead';
import { STATIC_PAGE_SEO } from '../src/seo/pageSeo';
import { WHATSAPP_AGENDAR_HREF } from '../src/config/whatsapp';

const LesoesLigamentares: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(1);

  const toggleTab = (tabIndex: number) => {
    setActiveTab(activeTab === tabIndex ? null : tabIndex);
  };

  const seo = STATIC_PAGE_SEO['/lesoes-ligamentares'];
  return (
    <div className="flex flex-col min-h-screen">
      <SeoHead title={seo.title} description={seo.description} path="/lesoes-ligamentares" ogImagePath={seo.ogImagePath} />
      <Header />
      <main className="pt-20 flex-grow bg-slate-50">
        <section 
          style={{ backgroundImage: 'url(/imagens/inicio/mostrando-exame-na-tela.webp)' }}
          className="relative bg-blue-900 text-white py-40 bg-cover bg-center flex items-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-left">
            <h1 className="text-3xl md:text-5xl font-bold max-w-2xl">Lesões ligamentares isoladas</h1>
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
                      Ligamento Cruzado Anterior (LCA)
                      <i className={`fas fa-caret-${activeTab === 1 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 1 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li><a href="#lca" className="hover:text-blue-600 transition">O que é o Ligamento Cruzado Anterior?</a></li>
                          <li><a href="#qlca" className="hover:text-blue-600 transition">Quando o ligamento cruzado anterior rompe, precisa operar?</a></li>
                          <li><a href="#reconslca" className="hover:text-blue-600 transition">Como é a cirurgia de reconstrução do ligamento cruzado anterior?</a></li>
                          <li><a href="#enxlca" className="hover:text-blue-600 transition">Qual o melhor enxerto para a reconstrução do ligamento cruzado anterior?</a></li>
                          <li><a href="#posoplca" className="hover:text-blue-600 transition">Como é o pós-operatório da cirurgia de reconstrução do ligamento cruzado anterior?</a></li>
                          <li><a href="#timelca" className="hover:text-blue-600 transition">Quanto tempo depois de operar o ligamento cruzado anterior, pode-se voltar a praticar esportes?</a></li>
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
                      Ligamento Anterolateral (LAL)
                      <i className={`fas fa-caret-${activeTab === 2 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 2 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li><a href="#lal" className="hover:text-blue-600 transition">O que é o ligamento anterolateral do joelho?</a></li>
                          <li><a href="#lalexiste" className="hover:text-blue-600 transition">O ligamento anterolateral do joelho existe mesmo?</a></li>
                          <li><a href="#comolal" className="hover:text-blue-600 transition">Como se lesiona o ligamento anterolateral do joelho?</a></li>
                          <li><a href="#reconslal" className="hover:text-blue-600 transition">Precisa reconstruir o ligamento anterolateral?</a></li>
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
                      Ligamento Cruzado Posterior (LCP)
                      <i className={`fas fa-caret-${activeTab === 3 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 3 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li><a href="#lcp" className="hover:text-blue-600 transition">Para que serve o Ligamento Cruzado Posterior?</a></li>
                          <li><a href="#lesaolcp" className="hover:text-blue-600 transition">Como acontece a lesão do LCP?</a></li>
                          <li><a href="#desclcp" className="hover:text-blue-600 transition">Como desconfiar da lesão do LCP?</a></li>
                          <li><a href="#examelcp" className="hover:text-blue-600 transition">Qual o melhor exame para diagnosticar a lesão do LCP?</a></li>
                          <li><a href="#cirurgialcp" className="hover:text-blue-600 transition">A lesão do Ligamento Cruzado Posterior precisa de cirurgia?</a></li>
                          <li><a href="#cirurgialcp2" className="hover:text-blue-600 transition">Como é a cirurgia para a reconstrução do Ligamento Cruzado Posterior?</a></li>
                          <li><a href="#poslcp" className="hover:text-blue-600 transition">E como é o pós-operatório da reconstrução do LCP?</a></li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Tab 4 */}
                  <div className="border-b border-slate-100 last:border-0">
                    <button 
                      onClick={() => toggleTab(4)}
                      className={`w-full text-left px-6 py-4 font-bold flex justify-between items-center transition-colors ${activeTab === 4 ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'}`}
                    >
                      Ligamento Colateral Medial (LCM)
                      <i className={`fas fa-caret-${activeTab === 4 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 4 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li><a href="#lcm" className="hover:text-blue-600 transition">Qual a função do ligamento colateral medial do joelho?</a></li>
                          <li><a href="#lcm2" className="hover:text-blue-600 transition">Quais os sintomas da lesão do ligamento colateral medial?</a></li>
                          <li><a href="#lcm3" className="hover:text-blue-600 transition">Como é o tratamento da lesão do ligamento colateral medial do joelho? Tem que operar?</a></li>
                          <li><a href="#lcm4" className="hover:text-blue-600 transition">Em quanto tempo eu volto a praticar esportes após uma lesão do ligamento colateral medial sem cirurgia?</a></li>
                          <li><a href="#lcm5" className="hover:text-blue-600 transition">E quanto tempo eu demoro para voltar a praticar esportes se operar o LCM?</a></li>
                          <li><a href="#lcm6" className="hover:text-blue-600 transition">Qual a diferença entre reparo e reconstrução do ligamento colateral medial?</a></li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Tab 5 */}
                  <div className="border-b border-slate-100 last:border-0">
                    <button 
                      onClick={() => toggleTab(5)}
                      className={`w-full text-left px-6 py-4 font-bold flex justify-between items-center transition-colors ${activeTab === 5 ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'}`}
                    >
                      Ligamento Colateral Lateral (LCL)
                      <i className={`fas fa-caret-${activeTab === 5 ? 'up' : 'right'} transition-transform`}></i>
                    </button>
                    {activeTab === 5 && (
                      <div className="px-6 py-4 bg-white text-sm text-slate-600">
                        <ul className="space-y-2">
                          <li><a href="#lcl" className="hover:text-blue-600 transition">O que é o ligamento colateral lateral do joelho?</a></li>
                          <li><a href="#lcl2" className="hover:text-blue-600 transition">Qual a função do ligamento colateral lateral?</a></li>
                          <li><a href="#lcl3" className="hover:text-blue-600 transition">Lesão do ligamento colateral lateral do joelho precisa operar?</a></li>
                          <li><a href="#lcl4" className="hover:text-blue-600 transition">Como é a recuperação da cirurgia do ligamento colateral lateral?</a></li>
                          <li><a href="#lcl5" className="hover:text-blue-600 transition">Em quanto tempo volto a praticar esportes depois da cirurgia do ligamento colateral lateral?</a></li>
                        </ul>
                      </div>
                    )}
                  </div>

                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
                  
                  {/* LCA Section */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Ligamento Cruzado Anterior (LCA)</h3>
                    
                    <div id="lca" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">O que é o Ligamento Cruzado Anterior?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        O ligamento cruzado anterior (LCA) do joelho é uma estrutura firme, que conecta o osso da coxa (fêmur) ao principal osso da perna (tíbia), restringindo movimentos excessivos tanto de translação anterior, como de rotação. A lesão deste ligamento pode ocorrer durante a prática de atividade esportivas, com ou sem contato com outro praticante. Em nosso meio, um dos esportes onde esta lesão acontece mais comumente é o futebol, através de um mecanismo de rotação sobre o eixo do próprio corpo com o pé fixo ao chão. Em geral, é possível sentir ou mesmo ouvir um estalido e nota-se o surgimento de edema no joelho, que tende a ficar dolorido e evoluir com sensação de instabilidade.
                      </p>
                    </div>

                    <div id="qlca" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Quando o ligamento cruzado anterior rompe, precisa operar?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        O tratamento varia de acordo com diversos parâmetros que precisam ser avaliados. Em alguns casos, existe espaço para o tratamento não cirúrgico, mas esta situação deve ser muito bem individualizada durante a consulta médica. No geral, para pacientes ativos que desejem continuar praticando esportes que incluam movimentos de pivot, deslocamento lateral, aterrisagens, etc, é recomendada a reconstrução cirúrgica.
                      </p>
                    </div>

                    <div id="reconslca" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Como é a cirurgia de reconstrução do ligamento cruzado anterior?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Para realizar a reconstrução é preciso recriar o ligamento. Para isto, é necessária a utilização de um enxerto que pode ser autlólogo (do próprio paciente) ou homólogo (de doador de tecidos). Em pacientes de alta demanda, os enxertos autólogos apresentam resultados superiores, sendo a principal escolha. Dentre os enxertos autólogos, dois tipos são os mais utilizados: tendões flexores (grácil e semitendíneo) e o tendão patelar.
                      </p>
                    </div>

                    <div id="enxlca" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Qual o melhor enxerto para a reconstrução do ligamento cruzado anterior?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Não existe resposta consensual para esta pergunta. Cada técnica possui prós e contras, de modo que não há um enxerto que seja mais adequado para todos os pacientes. Em geral, no médio e longo prazo, os resultados de ambos os tipos de enxerto tendem a ser semelhantes. Como o Dr. Serra Cruz tem experiência com ambas as técnicas, a escolha do enxerto é discutida na consulta pré-operatória, sendo individualizada de acordo com a demanda e as características de cada paciente, sendo a decisão tomada em conjunto.
                      </p>
                    </div>

                    <div id="posoplca" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Como é o pós-operatório da cirurgia de reconstrução do ligamento cruzado anterior?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Após a cirurgia, é necessário um programa rigoroso de reabilitação para recuperação do arco de movimento, controle neuromuscular e força. É extremamente importante planejar-se com antecedência visando o melhor resultado final. Em geral, com 3 meses de operado, intensifica-se o trabalho de reforço muscular.
                      </p>
                    </div>

                    <div id="timelca" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Quanto tempo depois de operar o ligamento cruzado anterior, pode-se voltar a praticar esportes?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Com 4 meses, dependendo da evolução, permite-se o início de treino de corrida leve. A recuperação completa varia de 6-9 meses, sendo que para pacientes que não possuam necessidade de retorno precoce, é aconselhado esperar 9-12 meses para atividades de maneira irrestrita.
                      </p>
                    </div>
                  </div>

                  {/* LAL Section */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Ligamento Anterolateral (LAL)</h3>
                    
                    <div id="lal" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">O que é o ligamento anterolateral do joelho?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Este é certamente o mais "controverso" dos ligamentos. Descrito em 1879 pelo francês Paul Segond (que não o chamou de ligamento na ocasião), esta estrutura atua em conjunto com o LCA no controle rotacional do joelho. As controvérsias dizem respeito não somente quanto à necessidade ou não de reconstrução em casos de lesão, quanto à sua própria existência. Alguns autores o classificam como um espessamento da cápsula anterolateral do joelho, alegando que não seria um ligamento verdadeiro. No entanto, existem estudos histológicos confirmando que esta estrutura possui sim características de ligamento. Este é um dos temas mais estudados pelo Dr. Serra Cruz e foi com um trabalho biomecânico sobre este ligamento que, representando o Instituto Brasil de Tecnologias da Saúde e, em conjunto com a equipe do Steadman-Philippon Research Institute, recebeu o prêmio "Excellence in Research" da American Orthopaedic Society for Sports Medicine (AOSSM), em 2016.
                      </p>
                    </div>

                    <div id="lalexiste" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">O ligamento anterolateral do joelho existe mesmo?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Durante o desenvolvimento deste e de outros estudos relacionados, o dr. Serra Cruz dissecou inúmeros joelhos e pode constatar a existência do mesmo. Entretanto, ressalta que, de fato, o ligamento não era uma estrutura tão consistente em todo os espécimes dissecados, sendo mais desenvolvido em uns que em outros. As principais conclusões a que seus estudos chegaram é que a lesão do mesmo leva a um aumento da instabilidade rotacional do joelho (<i>An In Vitro Robotic Assessment of the Anterolateral Ligament, Part 1  - Secondary Role of the Anterolateral Ligament in the Setting of an Anterior Cruciate Ligament Injury</i>) e que a reconstrução deste ligamento concomitante à reconstrução do LCA é capaz de levar a um melhor controle rotacional do que a reconstrução do LCA isolada (<i>An In Vitro Robotic Assessment of the Anterolateral Ligament, Part 2 - Anterolateral Ligament Reconstruction Combined With Anterior Cruciate Ligament Reconstruction</i>)
                      </p>
                    </div>

                    <div id="comolal" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Como se lesiona o ligamento anterolateral do joelho?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        A lesão deste ligamento ocorre no mesmo momento da lesão do LCA, estando relacionada a um mecanismo rotacional (o LAL restringe a rotação interna da tíbia sob o fêmur). Não se espera encontrar lesão isolada deste ligamento, estando sempre associada à lesão do LCA.
                      </p>
                    </div>

                    <div id="reconslal" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Precisa reconstruir o ligamento anterolateral?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Na maioria dos casos, a resposta é não. Entretanto, mais uma vez, as condutas precisam ser individualizadas. Existem circunstâncias em que a reconstrução do LAL é aconselhável no mesmo tempo cirúrgico da reconstrução do LCA. Em geral, em situações que envolvem pacientes com instabilidade rotacional além do habitual (caracterizada pela manobra do "pivot shift" explosivo), em casos de revisão ou de pacientes de alto risco para falha, o Dr. Serra Cruz recomenda a reconstrução concomitante deste ligamento.
                      </p>
                    </div>
                  </div>

                  {/* LCP Section */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Ligamento Cruzado Posterior (LCP)</h3>
                    
                    <div id="lcp" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Para que serve o Ligamento Cruzado Posterior?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Juntamente com o LCA, o LCP forma o que é conhecido como pivot central do joelho (os dois ligamentos centrais do joelho que conectam o fêmur à tíbia e se cruzam em forma de "X", ou seja, ligamentos cruzados!). Analogamente ao LCA, sua principal função é impedir a translação posterior da tíbia, mas também atua no controle rotacional da articulação. É um ligamento mais robusto, sendo o mais largo e forte ligamento do joelho. De um modo geral, para que ocorra sua lesão, é necessária uma energia de trauma maior do que aquela que acontece na lesão do LCA.
                      </p>
                    </div>

                    <div id="lesaolcp" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Como acontece a lesão do LCP?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        O mecanismo de trauma mais conhecido é um trauma de anterior para posterior no joelho dobrado, como observado em acidentes automobilísticos em que o joelho em flexão se choca contra o painel do carro. Quedas com o joelho em flexão também podem provocar este tipo de lesão. É muito importante investigar lesões associadas, uma vez que a energia de trauma necessária para se lesionar o LCP, na maioria das vezes termina por lesionar outros ligamentos também.
                      </p>
                    </div>

                    <div id="desclcp" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Como desconfiar da lesão do LCP?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Em geral, a lesão do LCP evolui com dor, edema e, em casos mais crônicos, com dor na frente do joelho, devido a uma sobrecarga que termina ocorrendo no mecanismo extensor como consequência da posição posteriorizada da tíbia.
                      </p>
                    </div>

                    <div id="examelcp" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Qual o melhor exame para diagnosticar a lesão do LCP?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Na fase aguda, a imagem de ressonância magnética (RM) ajuda bastante a identificar a ruptura deste ligamento. É importante ressaltar, no entanto, que o LCP tem uma maior capacidade de cicatrização que o LCA e o exame de RM em uma fase mais avançada pode mostrar um ligamento aparentemente íntegro, mas nem por isso funcionante, pois ele pode cicatrizar de maneira alongada e permitir uma mobilidade além do fisiológico. Nestes casos, o melhor a se fazer é correlacionar a clínica do paciente à imagem de RM e à radiografia com estresse (teste comparativo com o lado são, no qual se mede a translação posterior da tíbia) a fim de se definir quais pacientes são candidatos a uma reconstrução.
                      </p>
                    </div>

                    <div id="cirurgialcp" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">A lesão do Ligamento Cruzado Posterior precisa de cirurgia?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Nos casos de lesões isoladas agudas pode ser tentado o tratamento conservador inicialmente (especialmente nas classificadas como estiramento ou lesão parcial), pois o LCP possui uma capacidade intrínseca de cicatrização. Neste caso, é essencial o uso de uma joelheira articulada conhecida como "<i>brace</i>", que possui algumas tiras que previnem a posteriorização da tíbia durante o movimento de flexo-extensão do joelho.
                      </p>
                      <p className="text-slate-700 leading-relaxed mt-4">
                        Para pacientes com lesões completas (especialmente quando combinadas com lesões de outros ligamentos), que evoluem sem a cicatrização adequada do LCP, a cirurgia pode ser necessária.
                      </p>
                    </div>

                    <div id="cirurgialcp2" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Como é a cirurgia para a reconstrução do Ligamento Cruzado Posterior?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Apesar de ser um procedimento análogo à reconstrução do LCA, no sentido em que se precisa recriar o trajeto do ligamento entre o fêmur e a tíbia, a cirurgia para o LCP é tecnicamente mais difícil pois requer uma inserção na parte posterior do joelho sendo, por isso, recomendado que seja realizada por um cirurgião experiente. As técnicas que o Dr. Serra Cruz utiliza para esta reconstrução, em geral, são técnicas artroscópicas (por vídeo), sem realizar incisão na parte de trás do joelho. Esta cirurgia pode ser feita com enxerto autlólogo (do próprio paciente), ou com enxerto homólogo (de doador de tecidos). No caso de cirurgias com enxerto autólogo, além das incisões para a confecção dos portais artroscópicos, é necessária uma terceira incisão para a retirada do enxerto que servirá para recriar o ligamento.
                      </p>
                    </div>

                    <div id="poslcp" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">E como é o pós-operatório da reconstrução do LCP?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Neste caso, a reabilitação requer algumas restrições a mais que a recuperação do LCA. Nas primeiras semanas o paciente deve utilizar muletas sem apoiar o peso do corpo, progredindo com a carga de acordo com a evolução na fisioterapia. O ganho inicial de arco de movimento deve ser feito em decúbito ventral (de barriga para baixo) para que o efeito da gravidade não exerça uma força de posteriorização da tíbia, estressando o enxerto. Também é interessante neste caso a utilização de um <i>brace</i> articulado de joelho, que pode se estender por até 6 meses. Neste caso, a liberação para atividades físicas é bem mais lenta que na reabilitação do LCA. Corrida só é liberada com 8 meses e outras atividades são liberadas de acordo com parâmetros alcançados em testes de reabilitação, mas com um tempo total de pós operatório não menor do que 9 meses, idealmente 1 ano.
                      </p>
                    </div>
                  </div>

                  {/* LCM Section */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Ligamento Colateral Medial (LCM)</h3>
                    
                    <div id="lcm" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Qual a função do ligamento colateral medial do joelho?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        O ligamento colateral do joelho é o principal restritor do movimento chamado de valgo (quando o joelho tende a "abrir", com o tornozelo se afastando da linha do centro do corpo), mas também atua no controle rotacional da articulação.
                      </p>
                      <p className="text-slate-700 leading-relaxed mt-4">
                        O LCM é o ligamento "menos grave" dentre os ligamentos do joelho para se lesionar, desde que seja uma lesão isolada. Neste caso, mesmo rupturas totais são passíveis de tratamento conservador (sem necessidade de cirurgia). De um modo simplista, estas lesões são classificadas em 3 graus de acordo com a quantidade de fibras lesionadas e à abertura percebida no joelho à manobra de estresse em valgo. No grau I, ocorre um estiramento leve, sem queixa de instabilidade e manobra de estresse negativa. No grau II, ocorre lesão de maior quantidade de fibras (geralmente ainda com preservação da porção profunda), mas em geral, também sem queixa de instabilidade. A manobra de estresse pode revelar alguma abertura, mas com um "<i>endpoint</i>" firme. No grau III ocorre ruptura completa das fibras superficiais e profundas. Neste caso, há queixa de instabilidade e a manobra de estresse do ligamento revela uma frouxidão sem "<i>endpoint</i>".
                      </p>
                    </div>

                    <div id="lcm2" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Quais os sintomas da lesão do ligamento colateral medial?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        A grande maioria das lesões do LCM não evolui com instabilidade, mas com queixa de dor, com graus variáveis de edema e restrição inicial do arco de movimento. Portanto, um mecanismo de trauma sugestivo (geralmente uma pancada na parte externa do joelho, com força aplicada de lateral para medial) associado a um quadro de dor na face interna do joelho, pode representar uma lesão deste ligamento.
                      </p>
                    </div>

                    <div id="lcm3" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Como é o tratamento da lesão do ligamento colateral medial do joelho? Tem que operar?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Para lesões isoladas do LCM, na maioria das vezes a resposta é não! Obviamente, as situações precisam ser individualizadas e existem casos onde o potencial de cicatrização deste ligamento é menor, sendo indicada cirurgia. No entanto, para a maioria dos casos, se opta inicialmente pelo tratamento conservador. Este tratamento consiste em fisioterapia e em alguns casos pode ser aconselhável o uso de um <i>brace</i> (imobilizador articulado) de joelho.
                      </p>
                    </div>

                    <div id="lcm4" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Em quanto tempo eu volto a praticar esportes após uma lesão do ligamento colateral medial sem cirurgia?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Esta resposta depende do grau da lesão e do tratamento proposto. Em geral, os protocolos de reabilitação não são exclusivamente baseados em tempo, mas na clínica do paciente e em estágios alcançados na fisioterapia. Mas de um modo em geral, existe uma "regra" de multiplicar o grau da lesão por 2 (em semanas) nos tratamentos conservadores. Portanto, em uma lesão grau 1 pode se esperar um retorno em até 2 semanas, grau 2 em 4 semanas e grau 3 em 6 semanas. Obviamente, como "medicina não é matemática", variações para mais ou para menos podem ocorrer dependendo da evolução clínica do paciente.
                      </p>
                    </div>

                    <div id="lcm5" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">E quanto tempo eu demoro para voltar a praticar esportes se operar o LCM?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Esta resposta é extremamente variável, pois vai depender, dentre outras variáveis, se a lesão é de fato isolada ou associada a outras estruturas, como o ligamento oblíquo posterior, em uma lesão combinada conhecida como canto posteromedial do joelho, do esporte que se deseja praticar, etc. Em geral, o tempo de retorno para esportes de maior risco podem levar de 5-6 meses.
                      </p>
                    </div>

                    <div id="lcm6" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Qual a diferença entre reparo e reconstrução do ligamento colateral medial?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        O reparo pode ser indicado em situações mais agudas e neste caso, tenta-se suturar as fibras rompidas do ligamento. Em geral, utiliza-se algum dispositivo que proteja o reparo, chamado de "<i>internal brace</i>". Este dispositivo segue o mesmo trajeto do ligamento, mas não deve ser utilizado isoladamente, como se fosse um ligamento sintético, pois a longo prazo, ele não tolera as cargas sofridas pelo ligamento e pode romper. Seu objetivo é somente assegurar um ambiente mais estável durante a fase de cicatrização do ligamento reparado. Algumas vantagens do reparo incluem o fato de não requerer a retirada de enxerto (menor morbidade) e pelo fato das fibras poderem recuperar uma espécie de sensibilidade conhecida como propriocepção. No entanto, principalmente para pacientes de alta demanda, os resultados tendem a ser inferiores à reconstrução à longo prazo.
                      </p>
                      <p className="text-slate-700 leading-relaxed mt-4">
                        A reconstrução é a técnica em que se utiliza algum outro enxerto (pode ser do próprio paciente ou de doador) para se recriar o ligamento rompido. Dependendo do estado da anatomia no momento da cirurgia, é possível suturar fibras do ligamento nativo juntamente com a reconstrução em uma tentativa de melhorar a propriocepção e aumentar ainda mais a estabilidade. Em geral, as técnicas de reconstrução são mais bem estudadas e com resultados mais previsíveis biomecanicamente, sendo preferidas por muitos cirurgiões.
                      </p>
                    </div>
                  </div>

                  {/* LCL Section */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Ligamento Colateral Lateral (LCL)</h3>
                    
                    <div id="lcl" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">O que é o ligamento colateral lateral do joelho?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        O LCL é uma estrutura que se origina na parte lateral do fêmur, próximo ao epicôndilo e se estende até a cabeça da fíbula (osso mais fino da perna).
                      </p>
                    </div>

                    <div id="lcl2" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Qual a função do ligamento colateral lateral?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        A principal função do ligamento colateral lateral é a de restringir o excesso de varo (quando, mantendo a coxa fixa, a perna se movimenta para dentro em um movimento que tende a aproximar o tornozelo da linha média do corpo), mas também atua no controle rotacional. Quando ocorre lesão deste ligamento, pode haver também lesão do que chamamos de canto posterolateral do joelho (melhor descrito na parte de lesões ligamentares complexas), gerando neste caso uma grande instabilidade rotacional associada.
                      </p>
                    </div>

                    <div id="lcl3" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Lesão do ligamento colateral lateral do joelho precisa operar?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Ao contrário do ligamento colateral medial, que fica na parte interna do joelho (uma região anatomicamente mais estável), o LCL fica em uma região inerentemente instável devido ao formato das superfícies articulares (tanto o fêmur quanto a tíbia têm um formato convexo) dificultando ainda mais a cicatrização. Portanto, uma vez diagnosticada a lesão, a indicação de cirurgia é comum.
                      </p>
                    </div>

                    <div id="lcl4" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Como é a recuperação da cirurgia do ligamento colateral lateral?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        É recomendado o uso de um <i>brace</i> (imobilizador articulado de joelho) e deve-se utilizar um par de muletas sem apoiar o peso do corpo no lado lesionado por cerca de 1 mês e meio após o procedimento cirúrgico. Mesmo durante as sessões de fisioterapia, os exercícios que envolvam mais carga demoram cerca de 2 meses para serem liberados.
                      </p>
                    </div>

                    <div id="lcl5" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Em quanto tempo volto a praticar esportes depois da cirurgia do ligamento colateral lateral?</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Corrida inicial em terreno plano/ esteira só é liberada com cerca de 5 meses. Exercícios multidirecionais de agilidade, com 6 meses. Esportes de maior risco, como futebol, em não menos que 9 meses.
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

export default LesoesLigamentares;
