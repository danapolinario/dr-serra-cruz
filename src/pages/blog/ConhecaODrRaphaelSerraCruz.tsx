import React from 'react';
import BlogPostLayout from './BlogPostLayout';

const ConhecaODrRaphaelSerraCruz: React.FC = () => (
  <BlogPostLayout
    category="Apresentação"
    title="Conheça o Dr. Raphael Serra Cruz — médico ortopedista, especialista em joelho"
    date="4 de Agosto de 2025"
    heroImage="/imagens/blog/conheca-apresentacao.webp"
    heroAlt="Dr. Raphael Serra Cruz"
    postId="conheca-o-dr-raphael-serra-cruz-medico-ortopedista-especialista-em-joelho"
  >
    <p className="mb-6">
      Dr. Raphael Serra Cruz conta com quase 20 anos de ortopedia, colecionando experiências nacionais e internacionais como poucos no Brasil. Academicamente, possui diversas publicações de destaque, recebendo 3 prêmios internacionais, incluindo o <em>Excellence in Research Award</em> da{' '}
      <em>American Orthopaedic Society for Sports Medicine</em> (EUA), além de ser coautor de artigo que ocupou o primeiro lugar entre os mais lidos no mundo na revista britânica <em>Clinics in Sports Medicine</em>. É atual <strong>médico ATP</strong>, sendo responsável pelo atendimento aos atletas durante o Rio Open de Tênis, ortopedista da Clínica Citta e coordenador de ortopedia no Hospital Vera Cruz de Indaiatuba-SP.
    </p>
    <p className="mb-6 font-semibold text-slate-800">Segue um resumo da trajetória do Dr. Serra Cruz:</p>
    <ul className="list-disc pl-6 mb-6 space-y-2">
      <li>
        Residência médica e <strong>especialização</strong> em cirurgia do joelho pelo INTO (<strong>maior hospital de ortopedia do Brasil</strong>)
      </li>
      <li>
        Mestrado pelo <strong>INTO/UFRJ</strong>
      </li>
      <li>
        Traveling Fellowship na <strong>Stanford University</strong> (EUA) e <strong>Centre Orthopédique Santy</strong> (Lyon, FRA, com Dr. <strong>Bertrand Sonnery-Cottet</strong>, expoente mundial da cirurgia do joelho)
      </li>
      <li>
        <strong>International Fellowship</strong> de 1 ano nos <strong>EUA</strong> com Dr. <strong>Robert LaPrade</strong>, um dos mais renomados cirurgiões de joelho do mundo
      </li>
      <li>
        Médico do <strong>Clube de Regatas do Flamengo</strong> por 2 temporadas
      </li>
      <li>
        Médico “Field of Play” durante as <strong>Olimpíadas Rio 2016</strong>
      </li>
      <li>
        Médico ATP — <strong>atendimento aos atletas do ATP 500 Rio Open de Tênis</strong> desde 2023
      </li>
      <li>
        Estágios e visitas médicas a centros de referência europeus, como <strong>ATP Masters 1000 de Paris, Chelsea Football Club e Olympiatoppen (Noruega)</strong>
      </li>
    </ul>
    <p className="font-semibold text-slate-800 mb-2">Prêmios e reconhecimentos nacionais</p>
    <ul className="list-disc pl-6 mb-6 space-y-1">
      <li>
        <strong>Jorge Paulo Lemann Award</strong> (Biomecânica e Artroscopia de Joelho)
      </li>
      <li>
        <strong>Medalha Barata Ribeiro</strong> (Ensino da Ortopedia no Brasil)
      </li>
      <li>SBRATE (Travelling Fellowship)</li>
    </ul>
    <p className="font-semibold text-slate-800 mb-2">Prêmios e reconhecimentos internacionais</p>
    <ul className="list-disc pl-6 mb-6 space-y-1">
      <li>
        Excellence in Research Award — <strong>American Orthopaedic Society for Sports Medicine</strong> — EUA
      </li>
      <li>
        Excellence in Knee Biomechanics — <strong>European Federation of National Associations of Orthopaedics and Traumatology</strong> — Europa
      </li>
      <li>
        Basic Science Travel Grant — <strong>European Society of Sports Traumatology, Knee Surgery and Arthroscopy</strong> — Europa
      </li>
    </ul>
    <ul className="list-disc pl-6 mb-6 space-y-2">
      <li>
        <strong>Mais de 2500 cirurgias</strong> realizadas
      </li>
      <li>
        Mais de <strong>180 residentes e fellows treinados</strong>
      </li>
      <li>
        25 artigos publicados e cerca de <strong>1500 citações</strong>
      </li>
      <li>Inúmeras palestras em congressos e aulas em cursos voltados para ortopedistas</li>
    </ul>
    <p className="mb-6">
      Nos próximos posts, iremos detalhar um pouco mais a bela trajetória deste médico que optou por deixar um grande centro e posições de destaque para morar em Indaiatuba, trazendo toda sua bagagem de conhecimento e experiência para o interior de São Paulo.
    </p>
    <p className="mb-6">
      Toda esta experiência torna o Dr. Raphael Serra Cruz um nome de destaque nacional, sendo uma referência não somente para a região de Indaiatuba e Campinas, como também para muitas outras cidades de São Paulo.
    </p>
  </BlogPostLayout>
);

export default ConhecaODrRaphaelSerraCruz;
