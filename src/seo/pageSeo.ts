export type StaticPageSeoEntry = {
  title: string;
  description: string;
  /** Hero / OG por página (caminho no site, ex. /imagens/...). */
  ogImagePath?: string;
};

/**
 * Metadados por rota estática (alinhados a App.tsx).
 * Títulos curtos; descrições naturais com termos-alvo sem stuffing.
 */
export const STATIC_PAGE_SEO: Record<string, StaticPageSeoEntry> = {
  '/': {
    title: 'Dr. Raphael Serra Cruz | Ortopedista de joelho Indaiatuba',
    description:
      'Ortopedista e traumatologista especializado em joelho em Indaiatuba-SP. Cirurgia do joelho, lesões esportivas, telemedicina e atendimento na IMAP Life e Indacor.',
    ogImagePath: '/imagens/inicio/retrato-de-frente.webp',
  },
  '/sobre': {
    title: 'Sobre o Dr. Raphael Serra Cruz | Ortopedista em Indaiatuba',
    description:
      'Formação INTO/UFRJ, fellowships nos EUA e Europa, experiência em Olimpíadas, ATP e Flamengo. Ortopedista referência em cirurgia do joelho.',
    ogImagePath: '/imagens/sobre/fundo-biografico-sentado.webp',
  },
  '/artigos': {
    title: 'Artigos científicos | Dr. Raphael Serra Cruz',
    description:
      'Publicações em revistas internacionais de ortopedia e cirurgia do joelho. Ortopedista com pesquisa citada em lesões meniscais e ligamentares.',
    ogImagePath: '/imagens/inicio/mostrando-exame-na-tela.webp',
  },
  '/capitulos-de-livros': {
    title: 'Capítulos de livros | Dr. Raphael Serra Cruz',
    description:
      'Capítulos publicados em livros de medicina esportiva e ortopedia. Dr. Raphael Serra Cruz, ortopedista especialista em joelho.',
    ogImagePath: '/imagens/inicio/mostrando-exame-na-tela.webp',
  },
  '/palestras-e-congressos': {
    title: 'Palestras e congressos | Dr. Raphael Serra Cruz',
    description:
      'Participação em congressos nacionais e internacionais de cirurgia do joelho e medicina esportiva.',
    ogImagePath: '/imagens/sobre/congresso-sbrate.webp',
  },
  '/materiais-para-pacientes': {
    title: 'Materiais para pacientes | Dr. Raphael Serra Cruz',
    description:
      'Materiais educativos e orientações para pacientes sobre joelho, reabilitação e prevenção de lesões.',
    ogImagePath: '/imagens/materiais-pacientes/capa-manual-fifa-11.webp',
  },
  '/premiacoes': {
    title: 'Premiações | Dr. Raphael Serra Cruz',
    description:
      'Prêmios de pesquisa e reconhecimento internacional em ortopedia e cirurgia do joelho, incluindo AOSSM e publicações de alto impacto.',
    ogImagePath: '/imagens/blog/premiacoes.webp',
  },
  '/links': {
    title: 'Links úteis | Dr. Raphael Serra Cruz',
    description:
      'Links para instituições, sociedades médicas e recursos úteis em ortopedia e traumatologia.',
    ogImagePath: '/imagens/inicio/retrato-de-frente.webp',
  },
  '/lesoes-ligamentares': {
    title: 'Lesões ligamentares do joelho | Dr. Raphael Serra Cruz',
    description:
      'LCA, LCM, canto póstero-lateral e lesões ligamentares complexas. Diagnóstico e tratamento com ortopedista em Indaiatuba.',
    ogImagePath: '/imagens/inicio/mostrando-exame-na-tela.webp',
  },
  '/meniscos': {
    title: 'Lesões de menisco | Tratamento e cirurgia | Dr. Raphael Serra Cruz',
    description:
      'Menisco medial e lateral, sutura meniscal e lesões associadas. Especialista em joelho em Indaiatuba-SP.',
    ogImagePath: '/imagens/inicio/examinando-paciente.webp',
  },
  '/artrose': {
    title: 'Artrose do joelho | Tratamento e artroplastia | Dr. Raphael Serra Cruz',
    description:
      'Osteoartrite do joelho: sintomas, diagnóstico, infiltrações, viscosuplementação e artroplastia total ou parcial. Ortopedista em Indaiatuba-SP.',
    ogImagePath: '/imagens/inicio/examinando-paciente.webp',
  },
  '/cartilagem': {
    title: 'Lesões de cartilagem do joelho | Microfratura e transplante | Dr. Raphael Serra Cruz',
    description:
      'Tratamento de lesões de cartilagem: procedimentos restaurativos, microfratura, transplante autólogo, hidrogel e viscosuplementação. Indaiatuba-SP.',
    ogImagePath: '/imagens/inicio/mostrando-exame-na-tela.webp',
  },
  '/trauma-do-esporte': {
    title: 'Trauma esportivo no joelho | Ortopedista | Dr. Raphael Serra Cruz',
    description:
      'Atendimento a atletas com lesões do joelho, diagnóstico, tratamento e retorno seguro ao esporte. Especialista em Indaiatuba-SP.',
    ogImagePath: '/imagens/inicio/dr-raphael-serra-cruz-rio-open-tenis.webp',
  },
  '/condromalacia-patelar': {
    title: 'Condromalácia patelar | Dor anterior do joelho | Dr. Raphael Serra Cruz',
    description:
      'Instabilidade patelar, condropatia e dor na frente do joelho: avaliação e tratamento com ortopedista em Indaiatuba-SP.',
    ogImagePath: '/imagens/inicio/retrato-de-frente.webp',
  },
  '/blog': {
    title: 'Blog | Ortopedia e joelho | Dr. Raphael Serra Cruz',
    description:
      'Artigos sobre menisco, artrose, ortopedista, trauma esportivo e telemedicina. Informação com Dr. Raphael Serra Cruz em Indaiatuba.',
    ogImagePath: '/imagens/blog/telemedicina-europa-hero.webp',
  },
};
