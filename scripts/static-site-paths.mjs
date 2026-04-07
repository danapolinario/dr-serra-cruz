/**
 * Paths estáticos e ids de blog — fonte única para sitemap, manifest e pré-render.
 */
import { readFileSync } from 'fs';
import { join } from 'path';

export const STATIC_PATHS = [
  '/',
  '/sobre',
  '/artigos',
  '/capitulos-de-livros',
  '/palestras-e-congressos',
  '/materiais-para-pacientes',
  '/premiacoes',
  '/links',
  '/lesoes-ligamentares',
  '/meniscos',
  '/artrose',
  '/cartilagem',
  '/trauma-do-esporte',
  '/condromalacia-patelar',
  '/blog',
];

export function extractBlogIdsFromRepo(root) {
  const blogTs = readFileSync(join(root, 'src/data/blogPosts.ts'), 'utf8');
  const ids = [];
  for (const m of blogTs.matchAll(/^\s*id:\s*'([^']+)'/gm)) {
    if (m[1] === 'string') continue;
    ids.push(m[1]);
  }
  return ids;
}

/** Todas as URLs a pré-renderizar (estáticas + posts do blog). */
export function getAllPrerenderPaths(root) {
  const blog = extractBlogIdsFromRepo(root).map((id) => `/blog/${id}`);
  return [...STATIC_PATHS, ...blog];
}
