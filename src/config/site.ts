/** URL pública canónica (sem barra final). Usar VITE_SITE_URL em produção. */
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? 'https://www.drserracruz.com.br').replace(/\/$/, '');

export const DEFAULT_OG_IMAGE_PATH = '/imagens/inicio/retrato-de-frente.webp';

export function absoluteUrl(path: string): string {
  if (!path) return SITE_URL;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

/** Descrições para meta (máx. ~160 caracteres) */
export function truncateMeta(text: string, max = 158): string {
  const t = text.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trimEnd()}…`;
}

/** MIME type a partir da extensão do path da imagem OG. */
export function imageMimeType(path: string): string {
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

/** Dimensões padrão recomendadas para previews sociais. */
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
