/**
 * Resolve e injeta meta SEO/OG no HTML estático a partir de pageSeo + blogPosts
 * (fonte única com a app; crawlers veem tags correctas sem depender da ordem do Helmet).
 */
import { load, type CheerioAPI } from 'cheerio';
import { blogPosts } from '../src/data/blogPosts';
import { STATIC_PAGE_SEO } from '../src/seo/pageSeo';

const DEFAULT_OG_PATH = '/imagens/inicio/retrato-de-frente.webp';

export function prerenderSiteUrl(): string {
  return (process.env.VITE_SITE_URL ?? 'https://www.drserracruz.com.br').replace(/\/$/, '');
}

function truncateMeta(text: string, max = 158): string {
  const t = text.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trimEnd()}…`;
}

function absoluteUrl(siteUrl: string, path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${p}`;
}

const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

function imageMimeType(path: string): string {
  const ext = path.split('.').pop()?.toLowerCase() ?? '';
  switch (ext) {
    case 'webp':
      return 'image/webp';
    case 'png':
      return 'image/png';
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'gif':
      return 'image/gif';
    case 'svg':
      return 'image/svg+xml';
    default:
      return 'image/jpeg';
  }
}

export type PrerenderSeoPayload = {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType: 'website' | 'article';
  ogImageUrl: string;
  ogImageType: string;
  ogImageAlt: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  noindex?: boolean;
};

export function resolvePrerenderSeo(routePath: string): PrerenderSeoPayload | null {
  const base = prerenderSiteUrl();

  if (routePath === '/') {
    const s = STATIC_PAGE_SEO['/'];
    return buildPayload(base, {
      title: s.title,
      rawDescription: s.description,
      pathname: '/',
      ogType: 'website',
      ogImagePath: s.ogImagePath ?? DEFAULT_OG_PATH,
      noindex: s.noindex,
    });
  }

  if (routePath === '/blog') {
    const s = STATIC_PAGE_SEO['/blog'];
    const img = blogPosts[0]?.image ?? s.ogImagePath ?? DEFAULT_OG_PATH;
    return buildPayload(base, {
      title: s.title,
      rawDescription: s.description,
      pathname: '/blog',
      ogType: 'website',
      ogImagePath: img.startsWith('/') ? img : `/${img}`,
      noindex: s.noindex,
    });
  }

  if (routePath.startsWith('/blog/')) {
    const id = routePath.slice('/blog/'.length);
    const post = blogPosts.find((p) => p.id === id);
    if (!post) return null;
    const title = `${post.title} | Dr. Raphael Serra Cruz`;
    const iso = `${post.datePublishedIso}T12:00:00-03:00`;
    const img = post.image.startsWith('/') ? post.image : `/${post.image}`;
    return buildPayload(base, {
      title,
      rawDescription: post.excerpt,
      pathname: `/blog/${post.id}`,
      ogType: 'article',
      ogImagePath: img,
      articlePublishedTime: iso,
      articleModifiedTime: iso,
    });
  }

  const s = STATIC_PAGE_SEO[routePath];
  if (!s) return null;
  return buildPayload(base, {
    title: s.title,
    rawDescription: s.description,
    pathname: routePath,
    ogType: 'website',
    ogImagePath: s.ogImagePath ?? DEFAULT_OG_PATH,
    noindex: s.noindex,
  });
}

function buildPayload(
  base: string,
  opts: {
    title: string;
    rawDescription: string;
    pathname: string;
    ogType: 'website' | 'article';
    ogImagePath: string;
    articlePublishedTime?: string;
    articleModifiedTime?: string;
    noindex?: boolean;
  },
): PrerenderSeoPayload {
  const canonicalUrl = opts.pathname === '/' ? `${base}/` : `${base}${opts.pathname}`;
  const description = truncateMeta(opts.rawDescription);
  return {
    title: opts.title,
    description,
    canonicalUrl,
    ogType: opts.ogType,
    ogImageUrl: absoluteUrl(base, opts.ogImagePath),
    ogImageType: imageMimeType(opts.ogImagePath),
    ogImageAlt: opts.title,
    articlePublishedTime: opts.articlePublishedTime,
    articleModifiedTime: opts.articleModifiedTime,
    noindex: opts.noindex,
  };
}

function stripPreviousSeo($: CheerioAPI) {
  $('head title').remove();
  $('head meta[name="description"]').remove();
  $('head meta[name="author"]').remove();
  $('head meta[name="format-detection"]').remove();
  $('head link[rel="canonical"]').remove();
  $('head link[rel="alternate"][hreflang]').remove();
  $('head meta[property^="og:"]').remove();
  $('head meta[property^="article:"]').remove();
  $('head meta[name^="twitter:"]').remove();
}

function appendMeta($: CheerioAPI, payload: PrerenderSeoPayload) {
  const head = $('head');
  const anchor = head.find('meta[name="theme-color"]').first();
  let ref = anchor.length ? anchor : head.find('meta[name="viewport"]').first();

  const chainAfter = (node: Parameters<CheerioAPI['append']>[0]) => {
    if (ref.length) {
      ref.after(node);
      ref = node;
    } else {
      head.prepend(node);
      ref = node;
    }
  };

  const title = $('<title></title>');
  title.text(payload.title);
  chainAfter(title);

  const metaTag = (attrs: Record<string, string>) => {
    const el = $('<meta />');
    for (const [k, v] of Object.entries(attrs)) el.attr(k, v);
    chainAfter(el);
  };

  metaTag({ name: 'description', content: payload.description });
  metaTag({ name: 'author', content: 'Dr. Raphael Serra Cruz' });
  metaTag({ name: 'format-detection', content: 'telephone=no' });

  const canonical = $('<link rel="canonical" />');
  canonical.attr('href', payload.canonicalUrl);
  chainAfter(canonical);

  const altPtBr = $('<link rel="alternate" />');
  altPtBr.attr('hreflang', 'pt-BR');
  altPtBr.attr('href', payload.canonicalUrl);
  chainAfter(altPtBr);

  const altDefault = $('<link rel="alternate" />');
  altDefault.attr('hreflang', 'x-default');
  altDefault.attr('href', payload.canonicalUrl);
  chainAfter(altDefault);

  metaTag({
    name: 'robots',
    content: payload.noindex ? 'noindex, nofollow' : 'index, follow',
  });

  metaTag({ property: 'og:type', content: payload.ogType });
  metaTag({ property: 'og:title', content: payload.title });
  metaTag({ property: 'og:description', content: payload.description });
  metaTag({ property: 'og:url', content: payload.canonicalUrl });
  metaTag({ property: 'og:locale', content: 'pt_BR' });
  metaTag({ property: 'og:site_name', content: 'Dr. Raphael Serra Cruz' });
  metaTag({ property: 'og:image', content: payload.ogImageUrl });
  metaTag({ property: 'og:image:secure_url', content: payload.ogImageUrl });
  metaTag({ property: 'og:image:type', content: payload.ogImageType });
  metaTag({ property: 'og:image:width', content: String(OG_IMAGE_WIDTH) });
  metaTag({ property: 'og:image:height', content: String(OG_IMAGE_HEIGHT) });
  metaTag({ property: 'og:image:alt', content: payload.ogImageAlt });

  metaTag({ name: 'twitter:card', content: 'summary_large_image' });
  metaTag({ name: 'twitter:title', content: payload.title });
  metaTag({ name: 'twitter:description', content: payload.description });
  metaTag({ name: 'twitter:image', content: payload.ogImageUrl });
  metaTag({ name: 'twitter:image:alt', content: payload.ogImageAlt });

  if (payload.articlePublishedTime) {
    metaTag({ property: 'article:published_time', content: payload.articlePublishedTime });
  }
  if (payload.articleModifiedTime) {
    metaTag({ property: 'article:modified_time', content: payload.articleModifiedTime });
  }
}

/**
 * Substitui o bloco SEO do <head> pelos dados resolvidos para `routePath`.
 */
export function injectPrerenderSeoIntoHtml(html: string, routePath: string): string {
  const payload = resolvePrerenderSeo(routePath);
  if (!payload) return html;

  const $ = load(html);
  stripPreviousSeo($);
  appendMeta($, payload);
  return $.html();
}
