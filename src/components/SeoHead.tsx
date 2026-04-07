import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { absoluteUrl, DEFAULT_OG_IMAGE_PATH, SITE_URL, truncateMeta } from '../config/site';

export interface SeoHeadProps {
  title: string;
  description: string;
  /** pathname, ex.: /sobre ou /blog/slug */
  path: string;
  ogType?: 'website' | 'article';
  /** Caminho absoluto no site, ex.: /imagens/blog/x.webp */
  ogImagePath?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  noindex?: boolean;
}

const ensurePath = (p: string) => (p.startsWith('/') ? p : `/${p}`);

/** Só injeta meta se a URL atual bate com `path` (reduz lixo no head em pré-render/navegação). */
function normalizePathname(p: string) {
  if (!p || p === '/') return '/';
  return p.endsWith('/') ? p.replace(/\/+$/, '') || '/' : p;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  path,
  ogType = 'website',
  ogImagePath = DEFAULT_OG_IMAGE_PATH,
  articlePublishedTime,
  articleModifiedTime,
  noindex,
}) => {
  const location = useLocation();
  const pathname = ensurePath(path);
  if (normalizePathname(location.pathname) !== normalizePathname(pathname)) {
    return null;
  }
  const canonical = `${SITE_URL}${pathname}`;
  const desc = truncateMeta(description);
  const ogImage = absoluteUrl(ogImagePath);

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : <meta name="robots" content="index, follow" />}

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Dr. Raphael Serra Cruz" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      {articlePublishedTime ? (
        <meta property="article:published_time" content={articlePublishedTime} />
      ) : null}
      {articleModifiedTime ? <meta property="article:modified_time" content={articleModifiedTime} /> : null}
    </Helmet>
  );
};
