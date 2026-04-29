import React from 'react';
import { SITE_URL, absoluteUrl } from '../config/site';
import { YOUTUBE_PUBLIC_URL } from '../config/social';
import { JsonLdScript } from './JsonLdScript';

const sameAs = [
  'https://www.instagram.com/dr.serracruz/',
  'https://www.linkedin.com/in/raphael-serra-cruz-md-msc-76089034/',
  YOUTUBE_PUBLIC_URL,
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

  const weekdaysHours = (opens: string, closes: string) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens,
    closes,
  });

  const clinic = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Dr. Raphael Serra Cruz — Ortopedia',
    url: SITE_URL,
    image: absoluteUrl('/imagens/inicio/retrato-de-frente.webp'),
    telephone: '+5519998321140',
    email: 'contato@drserracruz.com.br',
    priceRange: '$$',
    medicalSpecialty: 'Orthopedic',
    location: [
      {
        '@type': 'Place',
        name: 'IMAP Life',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'R. Cerqueira César, 315 – Jd. Feris',
          addressLocality: 'Indaiatuba',
          addressRegion: 'SP',
          addressCountry: 'BR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -23.0900,
          longitude: -47.2173,
        },
        hasMap: 'https://share.google/6uUlFHzRUhApxCocG',
        openingHoursSpecification: [weekdaysHours('07:00', '19:30')],
      },
      {
        '@type': 'Place',
        name: 'Indacor',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'R. Sebastião Nicolau, 54 – Vila Nossa Sra. Aparecida',
          addressLocality: 'Indaiatuba',
          addressRegion: 'SP',
          addressCountry: 'BR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -23.0826,
          longitude: -47.2156,
        },
        hasMap: 'https://maps.app.goo.gl/ih4nsf2hExBhs4SR9',
        openingHoursSpecification: [weekdaysHours('08:00', '18:00')],
      },
    ],
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
