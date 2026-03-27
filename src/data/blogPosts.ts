export interface BlogPostMeta {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

/** Ordenado do mais recente ao mais antigo para o índice do blog */
export const blogPosts: BlogPostMeta[] = [
  {
    id: 'ortopedista-brasileiro-na-europa-telemedicina',
    title: 'Ortopedista Brasileiro na Europa: Acesso Rápido a Especialista em Joelho via Telemedicina',
    excerpt:
      'Morar na Europa e precisar de um ortopedista para o joelho pode ser burocrático. Saiba como a telemedicina com especialista brasileiro agiliza diagnóstico e encaminhamento.',
    image:
      '/imagens/blog/telemedicina-europa-hero.webp',
    date: '15 de Março de 2026',
  },
  {
    id: 'dr-raphael-serra-cruz-contribuicoes-e-legado',
    title: 'Dr. Raphael Serra Cruz — Contribuições e Legado',
    excerpt:
      'Mais de 2500 cirurgias, publicações citadas milhares de vezes e ensino: o orgulho de ajudar pacientes e a ciência brasileira.',
    image: '/imagens/blog/legado.webp',
    date: '17 de Setembro de 2025',
  },
  {
    id: 'experiencia-no-esporte-medico-atp-rio-open-de-tenis',
    title: 'Experiência no esporte: Médico ATP Rio Open de tênis',
    excerpt:
      'Da Challenger de Campinas ao Rio Open: certificação ATP, atletas de elite e troca com a equipe médica internacional.',
    image: '/imagens/blog/atp-rio-open.webp',
    date: '8 de Setembro de 2025',
  },
  {
    id: 'experiencia-no-esporte-clube-de-regatas-do-flamengo',
    title: 'Experiência no Esporte: Clube de Regatas do Flamengo!',
    excerpt:
      'Passagem pelo futebol de base e profissional, Libertadores 2019 e a escolha pela família em momentos decisivos.',
    image: '/imagens/blog/flamengo.webp',
    date: '25 de Agosto de 2025',
  },
  {
    id: 'premiacoes-nacionais-e-internacionais-dr-raphael-serra-cruz',
    title: 'Premiações Nacionais e Internacionais — Dr. Raphael Serra Cruz',
    excerpt:
      'Publicações de alto impacto, H-index, prêmios AOSSM, EFORT, SBOT e trajetória acadêmica internacional.',
    image: '/imagens/blog/premiacoes.webp',
    date: '21 de Agosto de 2025',
  },
  {
    id: 'international-fellowship-usa-divisor-de-aguas-na-carreira-medica',
    title: 'International Fellowship (USA) — divisor de águas na carreira médica',
    excerpt:
      'Steadman-Philippon, Dr. LaPrade, Excellence in Research e conexões que moldaram a carreira em joelho esportivo.',
    image: '/imagens/blog/fellowship-usa.webp',
    date: '17 de Agosto de 2025',
  },
  {
    id: 'o-inicio-da-carreira-do-dr-raphael-serra-cruz',
    title: 'O início da carreira do Dr. Raphael Serra Cruz',
    excerpt:
      'UERJ, INTO, grupo de joelho, mestrado UFRJ e quase 15 anos de referência antes de Indaiatuba.',
    image: '/imagens/blog/inicio-carreira-formacao.webp',
    date: '6 de Agosto de 2025',
  },
  {
    id: 'conheca-o-dr-raphael-serra-cruz-medico-ortopedista-especialista-em-joelho',
    title: 'Conheça o Dr. Raphael Serra Cruz — médico ortopedista, especialista em joelho',
    excerpt:
      'Resumo da trajetória: INTO, fellowships nos EUA e Europa, Olimpíadas, ATP, Flamengo e reconhecimento científico.',
    image: '/imagens/blog/conheca-apresentacao.webp',
    date: '4 de Agosto de 2025',
  },
  {
    id: 'dr-raphael-serra-cruz-jornada-lyonesa-cirurgia-do-joelho-sao-paulo',
    title:
      'Dr. Raphael Serra Cruz confirma presença na Jornada Lyonesa de Cirurgia do Joelho em São Paulo',
    excerpt:
      'Participação como debatedor na Jornada Lyonesa e trajetória com a escola francesa em lesões meniscais.',
    image: '/imagens/blog/jornada-lyonesa-cartaz.webp',
    date: '28 de Julho de 2025',
  },
  {
    id: 'lesao-do-menisco-precisa-operar',
    title: 'Lesão do menisco: precisa operar?',
    excerpt:
      'Quando a lesão meniscal pode cicatrizar sem cirurgia, o que avaliar com o especialista e opções de sutura ou meniscectomia.',
    image: '/imagens/blog/lesao-menisco-hero.webp',
    date: '1 de Junho de 2022',
  },
  {
    id: 'o-que-e-lesao-de-menisco',
    title: 'O que é Lesão de Menisco e como tratar?',
    excerpt:
      'Entenda os sintomas, causas e as opções de tratamento para as lesões no menisco com o Dr. Raphael Serra Cruz, ortopedista especialista em joelho em Indaiatuba.',
    image:
      '/imagens/inicio/examinando-paciente.webp',
    date: '15 de Março de 2024',
  },
  {
    id: 'tratamentos-para-artrose-no-joelho',
    title: 'Principais Tratamentos para Artrose no Joelho',
    excerpt:
      'Descubra as abordagens mais modernas e eficazes para o tratamento da artrose no joelho, desde opções conservadoras até cirúrgicas.',
    image: '/imagens/inicio/mostrando-exame-na-tela.webp',
    date: '2 de Abril de 2024',
  },
  {
    id: 'quando-procurar-um-ortopedista',
    title: 'Quando procurar um Ortopedista e Traumatologista?',
    excerpt:
      'Saiba identificar os sinais de alerta que indicam a necessidade de agendar uma consulta com um especialista em ortopedia e traumatologia.',
    image:
      '/imagens/blog/retrato-braco-cruzado.webp',
    date: '20 de Abril de 2024',
  },
];
