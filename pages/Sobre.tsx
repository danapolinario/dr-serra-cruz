import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import CertificatesGallery from '../components/CertificatesGallery';
import { SeoHead } from '../src/components/SeoHead';
import { STATIC_PAGE_SEO } from '../src/seo/pageSeo';
import { WHATSAPP_AGENDAR_HREF } from '../src/config/whatsapp';

const Sobre: React.FC = () => {
  const seo = STATIC_PAGE_SEO['/sobre'];
  return (
    <div className="flex flex-col min-h-screen">
      <SeoHead title={seo.title} description={seo.description} path="/sobre" ogImagePath={seo.ogImagePath} />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          style={{ backgroundImage: 'url(/imagens/sobre/fundo-biografico-sentado.webp)' }}
          className="relative bg-blue-900 text-white py-40 bg-cover bg-center flex items-center"
        >
          {/* Overlay degradê */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-left">
            <h3 className="text-xl md:text-2xl font-medium mb-2 text-blue-200">Dr. Raphael Serra Cruz</h3>
            <h1 className="text-3xl md:text-5xl font-bold max-w-2xl">Carreira, Formação Acadêmica e Atuações.</h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Dr. Raphael Serra Cruz</h3>
              <div className="w-16 h-1 bg-blue-700 mb-6"></div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Especialista em Cirurgias do Joelho em Indaiatuba-SP</h2>
              <h2 className="text-xl font-semibold text-slate-600 mb-6">CRM: 239793</h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                Dr. Raphael Serra Cruz é Médico concursado do Ministério da Saúde, membro do Centro de Cirurgia de Joelho do Instituto Nacional de Traumatologia e Ortopedia desde 2013. Também é Mestre em Ciências do Aparelho Musculoesquelético pelo INTO/UFRJ. Fez 1 ano de fellowship nos Estados Unidos com uma das maiores autoridades mundiais em lesões esportivas de joelho (Dr. Robert LaPrade). Atuou por duas temporadas no Clube de Regatas do Flamengo e nos jogos olímpicos Rio 2016. Capacitado para realização de transplante de tecidos musculoesqueléticos como meniscos e cartilagem.
              </p>
              <img 
                src="/imagens/inicio/explicando-no-consultorio.webp" 
                alt="Dr. Raphael Serra Cruz explicando no consultório" 
                className="w-full rounded-xl shadow-lg mb-8"
              />
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                <img src="/imagens/sobre/palestrando-no-hsvp.webp" alt="Palestrando" className="w-full h-48 object-cover rounded-lg shadow" />
                <img src="/imagens/sobre/mostrando-exame-pequeno.webp" alt="Mostrando exame" className="w-full h-48 object-cover rounded-lg shadow" />
                <img src="/imagens/sobre/examinando-paciente-pequeno.webp" alt="Examinando paciente" className="w-full h-48 object-cover rounded-lg shadow" />
                <img src="/imagens/sobre/banner-3.webp" alt="Banner" className="w-full h-48 object-cover rounded-lg shadow" />
              </div>
            </div>

            {/* Formação */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Formação</h2>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1"><i className="fas fa-check-circle"></i></span>
                  <div>
                    <strong>2006 - Graduação em Medicina.</strong><br />
                    Universidade do Estado do Rio de Janeiro, UERJ, Rio De Janeiro, Brasil
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1"><i className="fas fa-check-circle"></i></span>
                  <div>
                    <strong>2011 - Especialização - Residência médica em Ortopedia e Traumatologia.</strong><br />
                    Instituto Nacional de Traumatologia e Ortopedia, INTO, Rio De Janeiro, Brasil
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1"><i className="fas fa-check-circle"></i></span>
                  <div>
                    <strong>2013 - Especialização em Cirurgia do Joelho.</strong><br />
                    Instituto Nacional de Traumatologia e Ortopedia, INTO, Rio De Janeiro, Brasil
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1"><i className="fas fa-check-circle"></i></span>
                  <div>
                    <strong>2016 - Research Fellowship com foco em Cirurgia do Joelho.</strong><br />
                    Steadman-Philippon Research Institute, SPRI, Estados Unidos
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1"><i className="fas fa-check-circle"></i></span>
                  <div>
                    <strong>2020 - Mestrado Profissional em Ciências Aplicadas ao Sistema Musculoesquelético.</strong><br />
                    INTO / UFRJ, Rio de Janeiro, Brasil
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <a href="/#contato" className="bg-slate-800 text-white px-8 py-3 rounded-full text-center hover:bg-slate-700 transition font-medium">
                Locais de Atendimento
              </a>
              <a href={WHATSAPP_AGENDAR_HREF} target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white px-8 py-3 rounded-full text-center hover:bg-blue-800 transition font-medium">
                Agende uma Consulta
              </a>
            </div>

            {/* A Carreira */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">A Carreira do Dr. Serra Cruz</h3>
              <div className="w-16 h-1 bg-blue-700 mb-12"></div>

              {/* O início da carreira */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">O início da carreira:</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  O Dr. Raphael Serra Cruz graduou-se em Medicina pela prestigiada Universidade do Estado do Rio de Janeiro em 2006. Cursou residência médica no Instituto Nacional de Traumatologia e Ortopedia (INTO), instituição ortopédica mais importante do Brasil, onde também realizou a sub-especialização em cirurgia do joelho. Ainda residente, foi aprovado no concurso público do Ministério da Saúde e, logo após concluir sua formação, passou a integrar o corpo clínico deste mesmo instituto.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img src="/imagens/sobre/enfermaria-uerj.webp" alt="Enfermaria UERJ" className="w-full h-48 object-cover rounded-lg shadow" />
                  <img src="/imagens/sobre/cadeira-formatura.webp" alt="Formatura" className="w-full h-48 object-cover rounded-lg shadow" />
                  <img src="/imagens/sobre/formacao-into-01.webp" alt="INTO" className="w-full h-48 object-cover rounded-lg shadow" />
                </div>
              </div>

              {/* Primeiras experiências no esporte */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Primeiras experiências no esporte e como foi parar em Stanford (EUA) e Lyon (França)</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Apesar de ter uma formação de altíssimo padrão nacional, sentia que poderia agregar ainda mais conhecimentos e experiências fora do país, especialmente na área do esporte.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Foi quando aplicou e foi selecionado dentre centenas de candidatos de todo o Brasil para o Fellowship da Sociedade Brasileira de Artroscopia e Trauma do Esporte (<strong>SBRATE</strong>), presidido à época, pelo <strong>Dr. Michael Simoni</strong>, responsável pela entrevista final. Através deste estágio, pode acompanhar os departamentos médicos de <strong>Flamengo, Atlético-MG e Corinthians</strong>, e entrou em contato com os principais nomes da traumatologia desportiva nacional, como <strong>Dr. José Luiz Runco</strong> (CBF e Flamengo) e <strong>Dr. André Pedrinelli</strong> (USP, COB, Fifa), entre outros. Ainda como parte deste Fellowship, fez um estágio de 3 semanas acompanhando o serviço de medicina esportiva da renomada <strong>Universidade de Stanford</strong>, sob supervisão do <strong>Dr. Marc Safran</strong>, ícone da medicina esportiva mundial. Na etapa final deste fellowship, foi para a Europa onde acompanhou o departamento médico do <strong>ATP 1000 de Paris</strong> e pode visitar os centros médicos de <strong>Roland-Garros, Wimbledon e Chelsea Football Club</strong>. A semana final foi no <strong>Centre Ortopédique Santy</strong>, centro de excelência da <strong>Fifa</strong> em Lyon, famosa escola mundial de cirurgia do Joelho, onde conheceu o <strong>Dr. Bertran Sonnery-Cottet</strong>, com quem cultiva uma amizade e discute alguns de seus casos mais complexos até hoje.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img src="/imagens/sobre/entrada-stanford.webp" alt="Stanford" className="w-full h-48 object-cover rounded-lg shadow" />
                  <img src="/imagens/sobre/com-bertrand-lyon.webp" alt="Lyon" className="w-full h-48 object-cover rounded-lg shadow" />
                  <img src="/imagens/sobre/chelsea-estadio.webp" alt="Chelsea" className="w-full h-48 object-cover rounded-lg shadow" />
                </div>
              </div>

              {/* Primeira passagem pelo futebol */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Primeira passagem pelo futebol</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Ao retornar do Fellowship, foi surpreendido por um convite do Dr. José Luiz Runco para trabalhar nas categorias de base do futebol do <strong>Clube de Regatas do Flamengo</strong>. Durante esta passagem, pode contribuir com suas experiências adquiridas internacionalmente e aprendeu bastante sobre os bastidores do mundo do futebol. Optou por afastar-se depois de uma temporada, devido à incompatibilidade de horários quando foi convidado a fazer parte do Centro de Cirurgia de Joelho do INTO, onde teria a possibilidade de aprimorar suas habilidades cirúrgicas, devido ao enorme volume de procedimentos de alta complexidade realizados neste hospital.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img src="/imagens/sobre/com-dr-jose-luis-runco.webp" alt="Com Dr. Runco" className="w-full h-64 object-cover rounded-lg shadow" />
                  <img src="/imagens/sobre/estadio-morumbi.webp" alt="Estádio do Morumbi" className="w-full h-64 object-cover rounded-lg shadow" />
                </div>
              </div>

              {/* Experiência de um centro de referência – INTO */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Experiência de um centro de referência – INTO</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Sendo um hospital quaternário, integrar o grupo de cirurgia do joelho do INTO requer do cirurgião treinamentos e atualizações constantes para lidar com casos complexos que não obtêm resolutividade nos níveis mais básicos de assistência da saúde. Por isso, fazer parte deste grupo, é um privilégio e um grande desafio. Somente no INTO, o Dr. Serra Cruz realiza <strong>anualmente</strong> cerca de 140 procedimentos cirúrgicos dos mais variados graus de complexidade (desde artroscopias simples, a reconstruções ligamentares, multiligamentares, suturas de menisco, procedimentos em cartilagem, osteotomias e atroplastias) e 700 atendimentos ambulatoriais. Além disso, por se tratar de um hospital de ensino, contribui para a formação de dezenas de ortopedistas, entre residentes e especializandos em cirurgia do joelho.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img src="/imagens/sobre/olhando-para-luva-cc.webp" alt="Centro Cirúrgico" className="w-full h-64 object-cover rounded-lg shadow object-top" />
                  <img src="/imagens/sobre/cirurgia-centro.webp" alt="Cirurgia" className="w-full h-64 object-cover rounded-lg shadow" />
                </div>
              </div>

              {/* Um ano nos Estados Unidos */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Um ano nos Estados Unidos – um divisor de águas na carreira</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Mais uma vez, apesar da experiência já adquirida, uma oportunidade de adquirir mais conhecimentos o tirou da zona de conforto. Em 2014, O <strong>Instituto Brasil de Tecnologias da Saúde (IBTS)</strong>, comandado pelo prestigiado <strong>Dr. Leonardo Metsavaht</strong>, em conjunto com a <strong>Fundação Lemann</strong>, lançava a terceira edição do <strong>Prêmio Jorge Paulo Lemann de Biomecânica e Artroscopia do Joelho</strong> e iria selecionar em todo o Brasil um especialista em joelho e um especialista em quadril para realizar um Fellowship de 1 ano no <strong>Steadman-Philippon Research Institute (SPRI)</strong>, sob supervisão respectivamente dos renomados Drs. <strong>Robert LaPrade</strong> e <strong>Marc Philippon</strong>. Para muitos, o Fellowship do SPRI é considerado o melhor do mundo. Foi selecionado e em 2015 embarcava para a viagem que mudaria para sempre o curso de sua carreira. Em <strong>Vail</strong> (cidade do Colorado onde se localiza o SPRI), o Dr. Serra Cruz teve a oportunidade não somente de acompanhar casos complexos conduzidos pelo especialista mais prestigiado do mundo, lidando com as mais variadas situações tanto de pessoas comuns quanto de atletas do mais alto nível, de diversas modalidades esportivas. Além disso, participou de inúmeros projetos científicos que lhe renderam mais de 20 publicações em revistas internacionais de grande impacto, participações em congressos norte-americanos e europeus e o <strong>prêmio de Excelência em pesquisa da AOSSM (American Orthopaedic Society for Sports Medicine)</strong>, em 2016. Durante esta temporada, estabeleceu diversas amizades que carrega até os dias de hoje e com quem discute os casos mais complexos de sua prática clínica. Dentre os ilustres amigos, estão o <strong>Dr. Jorge Chahla,</strong> (médico do Chicago Bulls, White Sox e professor assistente na Rush University), <strong>Dr.Gilbert Moatsche,</strong> (Oslo Univertity Hospital, Oslo Sports Trauma Research Center, Norwegian Olympic Center) e <strong>Gabriela Bucci</strong> (Texas Health Sports Medicine., FC Dallas).
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img src="/imagens/sobre/staff-vail.webp" alt="Vail" className="w-full h-48 object-cover rounded-lg shadow" />
                  <img src="/imagens/sobre/laboratorio-laprace-chahla.webp" alt="Laboratório" className="w-full h-48 object-cover rounded-lg shadow" />
                  <img src="/imagens/sobre/escritorio-laprace.webp" alt="Escritório LaPrade" className="w-full h-48 object-cover rounded-lg shadow" />
                </div>
              </div>

              {/* Retorno ao Brasil */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Retorno ao Brasil e novas experiências</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Ainda nos EUA, recebeu um convite de seus antigos colegas de Flamengo para criarem uma clínica multidisciplinar voltada para a medicina do esporte. Fundaram a <strong>Quovita</strong> que conta com profissionais de diversas áreas, recebendo desde atletas de alto rendimento quanto a atletas amadores ou simplesmente pessoas que buscam melhorar a saúde e qualidade de vida.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Assim que retornou de Vail, foi convidado pelo <strong>Dr. Alfredo Villardi</strong>, atual chefe do serviço de ortopedia do <strong>Hospital São Vicente de Paulo</strong>, para integrar o corpo clínico desta instituição, onde foi criado um forte grupo de cirurgia do joelho.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Em Agosto de 2016, passou por uma das maiores experiências da sua carreira – participar de uma Olimpíada! Atuou como médico "<strong>Field-of-Play</strong>" do boxe olímpico nos <strong>Jogos Olímpicos Rio 2016</strong>, dando suporte e presenciando a histórica vitória do brasileiro <strong>Robson Conceição</strong>. Também esteve presente em momentos delicados como a luxação de cotovelo da lutadora russa <strong>Anastasia Belyakova</strong>, que foi obrigada a abandonar a luta na semi-final, mas retornou para a disputa do terceiro lugar e ainda ganhou a medalha de bronze!
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Em 2017, recebeu nova proposta do Flamengo, desta vez, sob coordenação do <strong>Dr. Márcio Tannure</strong>, para atuar nas categorias de base do futebol, onde trabalhou por mais uma temporada, tendo tratado de atletas que atualmente se destacam tanto no cenário nacional quanto internacional. Por questões pessoais e familiares, optou novamente por afastar-se do futebol, logo após as vitórias na <strong>Copa São Paulo de Futebol Jr.</strong> e o <strong>campeonato estadual sub-20</strong> de 2018, seus últimos títulos pelo clube.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img src="/imagens/sobre/entrando-em-campo.webp" alt="Campo" className="w-full h-64 object-cover rounded-lg shadow" />
                  <img src="/imagens/sobre/olimpiadas-bandeira.webp" alt="Olimpíadas" className="w-full h-64 object-cover rounded-lg shadow" />
                </div>
              </div>

              {/* Academicismo */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Academicismo</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Em 2018, ingressou no <strong>Mestrado Profissional do INTO/UFRJ</strong> e, sob a orientação dos <strong>Drs. Eduardo Branco de Sousa (INTO)</strong> e <strong>Vanessa Sandim Siqueira (UFRJ)</strong>, desenvolveu um projeto inédito avaliando a composição de tendões flexores utilizados na reconstrução do ligamento cruzado anterior por técnicas de análise proteômica. Defendeu sua dissertação em 2020, em uma cerimônia muito elogiada.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Suas publicações somam mais de <strong>800 citações</strong> (quando um artigo é usado como referência para outros artigos) e mais de <strong>30.000 leituras</strong> no ResearchGate, uma das principais plataformas de pesquisadores do mundo, mostrando que seus trabalhos realmente são impactantes na comunidade científica mundial.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Desde seu regresso dos Estados Unidos, o Dr. Serra Cruz tem sido convidado a realizar diversas palestras em congressos e sociedades, sobre os mais variados temas, sobretudo na área das lesões ligamentares e meniscais. Recentemente, foi convidado para escrever três capítulos (Lesões no surfe, Lesões no Skate e Síndrome Compartimental) no livro mais completo sobre traumatologia esportiva do Brasil: Beira do Campo – Urgências e Emergências no esporte, sob edição do <strong>Dr. Rodrigo Goes</strong>.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <img src="/imagens/sobre/lancamento-livro.webp" alt="Lançamento livro" className="w-full h-48 object-cover rounded-lg shadow" />
                  <img src="/imagens/sobre/aula-residentes-sbot.webp" alt="Aula residentes" className="w-full h-48 object-cover rounded-lg shadow" />
                  <img src="/imagens/sobre/diretoria-sbrate-congresso.webp" alt="Congresso SBRATE" className="w-full h-48 object-cover rounded-lg shadow" />
                  <img src="/imagens/sobre/congresso-sbrate.webp" alt="Palestrando" className="w-full h-48 object-cover rounded-lg shadow" />
                </div>
              </div>

              {/* Visitas */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Visitas a grandes centros de excelência Internacionais</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Após as passagens pela <strong>Universidade de Stanford (EUA)</strong>, <strong>Centre Ortopédique Santy (FRA)</strong>, <strong>Steadman-Philippon Research Institute (EUA)</strong>, entre outros, passou 10 dias em <strong>Oslo - Noruega</strong>, acompanhando os <strong>Drs. Gilbert Moatshe</strong> e <strong>Lars Engebretsen</strong> (chefe científico do Comitê Olímpico Internacional), com especial interesse no tratamento conservador de lesões do ligamento cruzado anterior e no tratamento cirúrgico de lesões multiligamentares e meniscais. Uma das metas do Dr. Serra Cruz é frequentemente visitar centros de excelência internacionais, a fim de trazer a seus pacientes no Brasil o que há de mais atualizado no mundo.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <img src="/imagens/sobre/gramado-stanford.webp" alt="Stanford" className="w-full h-48 object-cover rounded-lg shadow" />
                  <img src="/imagens/sobre/frente-santy-lyon.webp" alt="Santy Lyon" className="w-full h-48 object-cover rounded-lg shadow" />
                  <img src="/imagens/sobre/cc-com-laprace.webp" alt="LaPrade" className="w-full h-48 object-cover rounded-lg shadow" />
                  <img src="/imagens/sobre/noruega-olympiatoppen.webp" alt="Noruega" className="w-full h-48 object-cover rounded-lg shadow" />
                </div>
              </div>

              {/* Tênis */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Entrada no universo do tênis</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Nove anos após seu primeiro contato com este esporte, no Challenger de Campinas (2012), Dr. Raphael Serra Cruz foi convidado pelo Dr. Reinaldo Coelho para atuar no Rio Open, em 2023. Desde então, conquistou a confiança de todos, sendo novamente convidado nos anos subsequentes. Durante estes torneios, acompanhou e forneceu suporte médico a diversos atletas da elite do tênis mundial, consolidando-se como médico ATP.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <img src="/imagens/sobre/tenis-01.webp" alt="Tênis 1" className="w-full h-32 object-cover rounded-lg shadow" />
                  <img src="/imagens/sobre/tenis-02.webp" alt="Tênis 2" className="w-full h-32 object-cover rounded-lg shadow" />
                  <img src="/imagens/sobre/tenis-03.webp" alt="Tênis 3" className="w-full h-32 object-cover rounded-lg shadow" />
                  <img src="/imagens/sobre/tenis-04.webp" alt="Tênis 4" className="w-full h-32 object-cover rounded-lg shadow" />
                  <img src="/imagens/sobre/tenis-05.webp" alt="Tênis 5" className="w-full h-32 object-cover rounded-lg shadow" />
                </div>
              </div>

              {/* Indaiatuba */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Mudança para Indaiatuba</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Em busca de segurança e qualidade de vida para sua família, o Dr. Serra Cruz fez um movimento arrojado: abandonou sua carreira em plena ascensão no Rio de Janeiro para recomeçar a vida em uma cidade do interior de São Paulo, onde era desconhecido. No entanto, com seu profissionalismo, carisma e competência, logo conquistou a admiração de pacientes e pares, sendo convidado a coordenar a equipe de Ortopedia de um dos melhores hospitais da região (Vera Cruz, Indaiatuba).
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  O Dr. Raphael Serra Cruz concentra-se em entregar todo este conhecimento e experiência adquiridos em nível <i>world-class</i> a seus pacientes. Seu foco principal é garantir protocolos atualizados tanto de tratamentos conservadores quanto cirúrgicos, em linha com os maiores centros de medicina esportiva do mundo, onde tem grandes amigos.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img src="/imagens/sobre/indaiatuba-01.webp" alt="Indaiatuba 1" className="w-full h-56 object-cover rounded-lg shadow object-top" />
                  <img src="/imagens/sobre/indaiatuba-02.webp" alt="Indaiatuba 2" className="w-full h-56 object-cover rounded-lg shadow object-middle" />
                  <img src="/imagens/sobre/indaiatuba-03.webp" alt="Indaiatuba 3" className="w-full h-56 object-cover rounded-lg shadow object-middle" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Certificados */}
        <div className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Certificados</h2>
            <CertificatesGallery />
          </div>
        </div>

      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Sobre;
