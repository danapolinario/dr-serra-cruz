import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { SeoHead } from '../src/components/SeoHead';
import { STATIC_PAGE_SEO } from '../src/seo/pageSeo';
import { WHATSAPP_AGENDAR_HREF } from '../src/config/whatsapp';

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
                              Atletas profissionais e amadores
                            </a>
                          </li>
                          <li>
                            <a href="#tipos" className="hover:text-blue-600 transition">
                              Principais tipos de lesões relacionadas aos esportes
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
                        Além de ser um cirurgião de joelho extremamente diferenciado no Brasil, o Dr. Raphael Serra Cruz também foi um dos primeiros fellows (2012) da SBRATE (Sociedade Brasileira de Artroscopia e Trauma do Esporte), oferecendo atendimentos relacionados a lesões esportivas que podem ocorrer em todo o corpo humano, compreendendo a importância biomecânica nos gestos esportivos e as dinâmicas das principais lesões. Sua experiência com atletas de elite é um dos principais diferenciais na cidade de Indaiatuba-SP.
                      </p>
                      <p className="mt-4 text-slate-700 leading-relaxed">
                        O Dr. Raphael Serra Cruz é atual médico responsável pelo atendimento aos atletas da elite mundial do Tênis no maior torneio da ATP na América do Sul (Rio Open), desde 2023. Também atuou por 2 temporadas no C.R. Flamengo e foi médico "field-of-play" nas Olimpíadas Rio 2016, além de ser autor de capítulos de livros, artigos e palestras sobre o tema. Toda essa bagagem faz com que esteja acostumado à pressão e entenda as demandas de quem precisa de uma recuperação rápida, além de adotar estratégias diferenciadas, dentro das possibilidades de cada caso, permitindo um diagnóstico preciso, tratamento alinhado às metas de cada pessoa e planejamento seguro para voltar à atividade — seja competição de alto rendimento ou lazer no fim de semana.
                      </p>
                    </div>

                    <div id="tipos" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Principais tipos de lesões relacionadas aos esportes</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Na prática esportiva, as lesões musculares e as entorses de tornozelo estão entre as causas mais comuns, sendo muitas vezes subestimadas e podendo gerar sequelas caso não identificadas e tratadas adequadamente desde o início. Os primeiros dias de tratamento correto são fundamentais para o desfecho nestas lesões, não sendo interessante forçar ou "aguardar para ver se melhora sozinho".
                      </p>
                      <p className="mt-4 text-slate-700 leading-relaxed">
                        Cada esporte tem suas particularidades, biomecânicas e gestos específicos. Dependendo da modalidade, alguns sintomas podem estar relacionados a lesões de maior incidência e merecem ser investigados como, por exemplo:
                      </p>

                      <div className="mt-6 space-y-6">
                        <div>
                          <h5 className="text-lg font-bold text-slate-800 mb-2">Futebol e Futsal</h5>
                          <p className="text-slate-700 leading-relaxed"><strong>Sensação de "falseio" ou instabilidade no joelho:</strong> Costuma indicar uma <strong>ruptura do LCA</strong> (ligamento cruzado anterior) do joelho, ocorrendo tipicamente no mecanismo de <strong>pivô</strong> (rotação sobre o pé fixo) ou no <strong>gingado/cutting</strong> (mudança brusca de direção para desviar do marcador).</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Pontada súbita na face posterior da coxa:</strong> Sinal clássico de <strong>estiramento de isquiotibiais</strong>, gerado no momento da fase de balanço terminal da corrida (desaceleração excêntrica da perna) ou no <strong>arranque explosivo</strong> para o contra-ataque.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Dor na virilha ao bater na bola:</strong> Pode ser uma <strong>lesão de adutores ou pubalgia</strong>, relacionada ao gesto do <strong>chute de chapa</strong> (passe longo) ou durante um desarme (<strong>carrinho</strong>).</p>
                        </div>

                        <div>
                          <h5 className="text-lg font-bold text-slate-800 mb-2">Tênis e Beach Tennis</h5>
                          <p className="text-slate-700 leading-relaxed"><strong>Dor na face externa do cotovelo:</strong> A famosa <strong>epicondilite lateral</strong>, muito relacionada ao <strong>backhand atrasado</strong> ou ao uso excessivo de punho para gerar spin em raquetes muito rígidas.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Sensação de "pedrada" na panturrilha:</strong> Sinal de <strong>estiramento do gastrocnêmio medial</strong> (<strong>Tennis Leg</strong>), ocorrendo no <strong>split step</strong> (pequeno salto de prontidão) ou no <strong>arranque</strong> súbito para buscar uma bola curta.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Dor no ombro durante o saque:</strong> Sugere <strong>tendinopatia do manguito rotador</strong>, gerada na fase de aceleração e impacto da bola acima da cabeça, onde o impacto repetitivo sobrecarrega o supraespinhal.</p>
                        </div>

                        <div>
                          <h5 className="text-lg font-bold text-slate-800 mb-2">Crossfit</h5>
                          <p className="text-slate-700 leading-relaxed"><strong>Dor ou "fisgada" no ombro em movimentos acima da cabeça:</strong> Sugere <strong>tendinopatia do manguito rotador ou lesão de labrum (SLAP)</strong>, agravada por gestos de alta demanda como <strong>Overhead Squat</strong>, <strong>Thrusters</strong> ou na fase de transição de <strong>Butterfly Pull-ups</strong> e <strong>Muscle-ups</strong>.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Dor lombar aguda ao tirar o peso do chão ou no agachamento:</strong> Pode indicar <strong>hérnia de disco</strong> ou <strong>estiramento muscular</strong>, ocorrendo comumente em séries de <strong>Deadlift</strong> ou <strong>Snatch</strong> com carga elevada.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Dor na frente do joelho ou sensação de pressão ao agachar:</strong> Sinal de <strong>dor femoropatelar</strong> ou <strong>tendinopatia patelar</strong>, relacionada ao alto volume de <strong>Wall Balls</strong>, <strong>Box Jumps</strong> e esforço unilateral do <strong>Pistol Squat</strong>.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Dormência ou dor no punho ao sustentar a barra:</strong> Pode significar <strong>impacto dorsal do punho</strong> ou <strong>sinovite</strong>, comum na posição de <strong>Front Rack</strong> ou em exercícios invertidos como o <strong>HSPU (Handstand Push-Up)</strong>.</p>
                        </div>

                        <div>
                          <h5 className="text-lg font-bold text-slate-800 mb-2">Corrida de Rua e Trail Run</h5>
                          <p className="text-slate-700 leading-relaxed"><strong>Dor na sola do pé nos primeiros passos do dia:</strong> Clássico de <strong>fascite plantar</strong>, relacionada à falha na absorção de impacto durante a fase de propulsão da corrida.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Dor na lateral do joelho em descidas:</strong> Sugere <strong>síndrome da banda iliotibial</strong>, causada pelo atrito repetitivo durante o <strong>heel strike</strong> e exacerbada nas descidas técnicas.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Dor na canela após aumentar o volume:</strong> Sinal de <strong>estresse tibial medial (canelite)</strong>, comum no gesto de corrida com <strong>overstriding</strong>.</p>
                        </div>

                        <div>
                          <h5 className="text-lg font-bold text-slate-800 mb-2">Ciclismo (Estrada e MTB)</h5>
                          <p className="text-slate-700 leading-relaxed"><strong>Dor na frente do joelho ao subir ladeiras:</strong> Sugere <strong>condromalácia patelar</strong> ou <strong>tendinite patelar</strong>, gerada pela alta carga compressiva durante sprint, <strong>en danseuse</strong> (pedalar em pé) ou com cadência baixa.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Dores profundas no quadril ao usar o "drop":</strong> Pode ser <strong>impacto femoroacetabular</strong>, causado pela flexão extrema do quadril na posição aerodinâmica.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Dormência nas mãos ou região perineal:</strong> Sinal de <strong>neuropatia compressiva</strong>, relacionada à empunhadura prolongada no guidão ou pressão excessiva do selim.</p>
                        </div>

                        <div>
                          <h5 className="text-lg font-bold text-slate-800 mb-2">Esportes de Montaria (Hipismo e Polo)</h5>
                          <p className="text-slate-700 leading-relaxed"><strong>Dores na face interna da coxa:</strong> Podem significar <strong>lesão da musculatura adutora</strong>, exigida pela isometria vigorosa na sela e pelo fechamento das pernas.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Dores nas costas (Lombar):</strong> Geralmente representam sobrecarga mecânica, mas também podem esconder <strong>hérnias de disco</strong>, <strong>espondilólise/espondilolistese</strong>, <strong>artroses facetárias</strong> ou até fraturas.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Dores nos quadris:</strong> Necessário afastar o <strong>impacto femoroacetabular</strong>, devido à sobrecarga gerada no labrum pela posição prolongada em flexão e abdução.</p>
                        </div>

                        <div>
                          <h5 className="text-lg font-bold text-slate-800 mb-2">Voleibol e Basquetebol</h5>
                          <p className="text-slate-700 leading-relaxed"><strong>Dor abaixo da patela:</strong> O clássico <strong>Jumper's Knee</strong> (<strong>tendinopatia patelar</strong>), resultante do mecanismo de salto e aterrissagem.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Incapacidade de apoiar o pé após o salto:</strong> Pode indicar <strong>lesão ligamentar do tornozelo</strong>, comum ao aterrissar sobre o pé de outro jogador.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Dor no ombro em movimentos acima da cabeça:</strong> Pode significar síndrome do impacto do ombro ou <strong>tendinopatia do manguito rotador</strong>.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Perda de potência no ataque (cortada):</strong> Pode esconder lesão de <strong>labrum</strong>, devido à fase de armada do braço (<strong>cocking</strong>).</p>
                        </div>

                        <div>
                          <h5 className="text-lg font-bold text-slate-800 mb-2">Natação</h5>
                          <p className="text-slate-700 leading-relaxed"><strong>Dor "no fundo" do ombro ao elevar o braço:</strong> Pode significar <strong>síndrome do impacto subacromial</strong>, exacerbada na fase de entrada e tração.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Estalos ou "cliques" profundos no ombro:</strong> Sinal de alerta para <strong>lesão de labrum (SLAP)</strong>, comum na fase de recuperação aérea do nado crawl.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Dor lombar ao "golfinhar":</strong> Em nadadores de borboleta, pode esconder <strong>espondilólise</strong>, devido à hiperextensão repetitiva da coluna.</p>
                        </div>

                        <div>
                          <h5 className="text-lg font-bold text-slate-800 mb-2">Lutas (Judô e Jiu-Jitsu)</h5>
                          <p className="text-slate-700 leading-relaxed"><strong>Ombro que "sai do lugar":</strong> Sinal de <strong>instabilidade glenoumeral</strong>, comum ao tentar defender uma queda ou durante alavanca de braço.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Dor na parte de dentro do joelho:</strong> Pode ser uma <strong>lesão de LCM</strong>, gerada durante entradas de queda ou na manutenção de guarda fechada.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Dor cervical com irradiação para o braço:</strong> Sugere <strong>hérnia de disco</strong>, decorrente das forças axiais e de torção constantes durante a luta de solo.</p>
                        </div>

                        <div>
                          <h5 className="text-lg font-bold text-slate-800 mb-2">Ginástica e Dança (Ballet e Jazz)</h5>
                          <p className="text-slate-700 leading-relaxed"><strong>Dor na face posterior do tornozelo:</strong> Pode indicar <strong>síndrome do impacto posterior</strong>, comum durante o <em>en pointe</em> (ponta) e no <em>relevé</em> (meia-ponta).</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Dor lombar ao arquear o corpo:</strong> Sinal de alerta para <strong>espondilólise</strong>, decorrente da hiperextensão extrema.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Estalidos no quadril:</strong> Sugerem <strong>lesão de labrum</strong> ou <strong>tendinopatia do iliopsoas</strong>, relacionadas a amplitudes extremas.</p>
                        </div>

                        <div>
                          <h5 className="text-lg font-bold text-slate-800 mb-2">Skate e Patins</h5>
                          <p className="text-slate-700 leading-relaxed"><strong>Dor no punho após queda:</strong> Pode significar <strong>fratura oculta</strong> do escafoide ou rádio distal.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Entorses recorrentes do tornozelo:</strong> Comuns ao aterrissar manobras de giro (<em>flip tricks</em>) ou no <em>ollie</em>, com sobrecarga dos ligamentos laterais.</p>
                          <p className="mt-2 text-slate-700 leading-relaxed"><strong>Dor crônica e inchaço na frente do joelho:</strong> Sugere <strong>bursite pré-patelar</strong> ou <strong>contusão óssea</strong>, gerada por impacto direto em quedas de joelho.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Avaliação</h3>

                    <div id="urgencia" className="mb-8 scroll-mt-24">
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Quando procurar ajuda</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Dor intensa após um estiramento ou trauma, incapacidade de apoiar o membro, inchaço importante em poucas horas ou sensação de instabilidade (como uma sensação de joelho "que saiu do lugar") merecem avaliação ortopédica, especialmente, se não houver melhora dos sintomas em até 48 horas. Em lesões agudas, o tempo entre o evento e o diagnóstico pode influenciar opções de tratamento e recuperação.
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
                        A reabilitação é parte fundamental do tratamento em qualquer trauma esportivo. Fortalecimento progressivo, controle de carga, trabalho de propriocepção e retorno gradual aos gestos do esporte reduzem o risco de nova lesão e melhoram o desempenho.
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

export default TraumaDoEsporte;
