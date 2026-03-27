import React from 'react';
import { SITE_URL, absoluteUrl } from '../config/site';
import { JsonLdScript } from './JsonLdScript';

const sameAs = [
  'https://www.instagram.com/dr.serracruz/',
  'https://www.linkedin.com/in/raphael-serra-cruz-md-msc-76089034/',
  'https://www.youtube.com/@dr.raphaelserracruz',
  'https://scholar.google.com/citations?user=GbnVAdsAAAAJ',
];

/**
 * Physician + MedicalClinic + WebSite na home (uma única injeção evita duplicar em todas as rotas).
 */
export const SiteStructuredData: React.FC = () => {
  const physician = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr. Raphael Serra Cruz',
    url: SITE_URL,
    medicalSpecialty: 'Orthopedic',
    sameAs,
  };

  const clinic = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Clínica CITTA — Dr. Raphael Serra Cruz',
    url: SITE_URL,
    image: absoluteUrl('/imagens/inicio/retrato-de-frente.webp'),
    telephone: '+551998321140',
    email: 'contato@drserracruz.com.br',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Estados Unidos, 317 – Parque Boa Esperança',
      addressLocality: 'Indaiatuba',
      addressRegion: 'SP',
      postalCode: '13339-230',
      addressCountry: 'BR',
    },
    areaServed: [
      { '@type': 'City', name: 'Indaiatuba' },
      { '@type': 'AdministrativeArea', name: 'Região de Campinas' },
    ],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dr. Raphael Serra Cruz',
    url: SITE_URL,
    inLanguage: 'pt-BR',
    publisher: {
      '@type': 'Person',
      name: 'Dr. Raphael Serra Cruz',
      url: SITE_URL,
    },
  };

  return (
    <>
      <JsonLdScript id="ld-physician" data={physician} />
      <JsonLdScript id="ld-clinic" data={clinic} />
      <JsonLdScript id="ld-website" data={website} />
    </>
  );
};
