import { SITE_URL, absoluteUrl } from '../config/site';

export type FaqItem = { question: string; answer: string };

/** MedicalCondition — schema.org */
export function buildMedicalConditionLd(opts: {
  name: string;
  alternateName?: string;
  description?: string;
  signOrSymptom?: string[];
  possibleTreatment?: string[];
  urlPath?: string;
}): Record<string, unknown> {
  const url = opts.urlPath ? `${SITE_URL}${opts.urlPath.startsWith('/') ? opts.urlPath : `/${opts.urlPath}`}` : SITE_URL;
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: opts.name,
    ...(opts.alternateName ? { alternateName: opts.alternateName } : {}),
    ...(opts.description ? { description: opts.description } : {}),
    ...(opts.signOrSymptom?.length
      ? { signOrSymptom: opts.signOrSymptom.map((s) => ({ '@type': 'MedicalSymptom', name: s })) }
      : {}),
    ...(opts.possibleTreatment?.length
      ? {
          possibleTreatment: opts.possibleTreatment.map((name) => ({
            '@type': 'MedicalTherapeuticProcedure',
            name,
          })),
        }
      : {}),
    url,
  };
}

/** MedicalProcedure */
export function buildMedicalProcedureLd(opts: {
  name: string;
  description?: string;
  procedureType?: string;
  bodyLocation?: string;
  urlPath?: string;
}): Record<string, unknown> {
  const url = opts.urlPath ? `${SITE_URL}${opts.urlPath.startsWith('/') ? opts.urlPath : `/${opts.urlPath}`}` : SITE_URL;
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: opts.name,
    ...(opts.description ? { description: opts.description } : {}),
    ...(opts.procedureType ? { procedureType: opts.procedureType } : {}),
    ...(opts.bodyLocation ? { bodyLocation: opts.bodyLocation } : {}),
    url,
  };
}

/** FAQPage */
export function buildFaqPageLd(items: FaqItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/** Service — trauma esportivo / consulta */
export function buildServiceLd(opts: {
  name: string;
  description: string;
  urlPath: string;
  serviceType?: string;
}): Record<string, unknown> {
  const path = opts.urlPath.startsWith('/') ? opts.urlPath : `/${opts.urlPath}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    provider: {
      '@type': 'Physician',
      name: 'Dr. Raphael Serra Cruz',
      url: SITE_URL,
      medicalSpecialty: 'Orthopedic',
    },
    areaServed: { '@type': 'City', name: 'Indaiatuba', containedInPlace: { '@type': 'AdministrativeArea', name: 'SP' } },
    ...(opts.serviceType ? { serviceType: opts.serviceType } : {}),
    url: `${SITE_URL}${path}`,
    image: absoluteUrl('/imagens/inicio/retrato-de-frente.webp'),
  };
}
