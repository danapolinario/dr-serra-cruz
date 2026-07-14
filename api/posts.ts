import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';
import { jwtVerify } from 'jose';
import DOMPurify from 'isomorphic-dompurify';

/**
 * CRUD de posts do blog — protegido por cookie JWT.
 * Self-contained para deploy na Vercel.
 */

const SESSION_COOKIE = 'admin_session';

/** Slugs dos 14 posts estáticos — não podem ser usados por posts dinâmicos */
const STATIC_BLOG_SLUGS = new Set([
  'ortopedista-brasileiro-na-europa-telemedicina',
  'dr-raphael-serra-cruz-contribuicoes-e-legado',
  'experiencia-no-esporte-medico-atp-rio-open-de-tenis',
  'experiencia-no-esporte-clube-de-regatas-do-flamengo',
  'premiacoes-nacionais-e-internacionais-dr-raphael-serra-cruz',
  'international-fellowship-usa-divisor-de-aguas-na-carreira-medica',
  'o-inicio-da-carreira-do-dr-raphael-serra-cruz',
  'conheca-o-dr-raphael-serra-cruz-medico-ortopedista-especialista-em-joelho',
  'dr-raphael-serra-cruz-jornada-lyonesa-cirurgia-do-joelho-sao-paulo',
  'lesao-do-menisco-precisa-operar',
  'o-que-e-lesao-de-menisco',
  'tratamentos-para-artrose-no-joelho',
  'quando-procurar-um-ortopedista',
]);

type PostRow = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  content_html: string;
  hero_image_url: string;
  hero_alt: string;
  status: 'draft' | 'published';
  date_published: string | null;
  date_reviewed: string | null;
  reviewer_credentials: string | null;
  schema_about: string | null;
  created_at: string;
  updated_at: string;
};

function parseCookies(req: VercelRequest): Record<string, string> {
  const header = req.headers.cookie ?? '';
  const out: Record<string, string> = {};
  for (const part of header.split(';')) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    out[trimmed.slice(0, eq)] = decodeURIComponent(trimmed.slice(eq + 1));
  }
  return out;
}

async function isAuthenticated(req: VercelRequest): Promise<boolean> {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 16) return false;
  const token = parseCookies(req)[SESSION_COOKIE];
  if (!token) return false;
  try {
    await jwtVerify(token, new TextEncoder().encode(secret));
    return true;
  } catch {
    return false;
  }
}

function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    ADD_ATTR: ['target', 'rel'],
  });
}

function normalizeSlug(raw: string): string {
  return raw
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120);
}

function validateSlug(slug: string): string | null {
  if (!slug || slug.length < 3) return 'Slug inválido (mínimo 3 caracteres)';
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return 'Slug deve conter apenas letras minúsculas, números e hífens';
  if (STATIC_BLOG_SLUGS.has(slug)) return 'Slug já usado por um post estático';
  return null;
}

function toDateOnly(value: unknown): string | null {
  if (value == null || value === '') return null;
  const match = String(value).trim().match(/^(\d{4}-\d{2}-\d{2})/);
  return match ? match[1] : null;
}

function rowToJson(row: PostRow) {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    contentHtml: row.content_html,
    heroImageUrl: row.hero_image_url,
    heroAlt: row.hero_alt,
    status: row.status,
    datePublished: toDateOnly(row.date_published),
    dateReviewed: toDateOnly(row.date_reviewed),
    reviewerCredentials: row.reviewer_credentials,
    schemaAbout: row.schema_about,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  return neon(url);
}

async function requireAuth(req: VercelRequest, res: VercelResponse): Promise<boolean> {
  if (!(await isAuthenticated(req))) {
    res.status(401).json({ error: 'Não autenticado' });
    return false;
  }
  return true;
}

function parseBody(req: VercelRequest): Record<string, unknown> {
  if (!req.body) return {};
  return typeof req.body === 'string' ? JSON.parse(req.body) : (req.body as Record<string, unknown>);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const sql = getSql();
  if (!sql) {
    return res.status(503).json({ error: 'DATABASE_URL não configurado' });
  }

  if (req.method === 'GET') {
    if (!(await requireAuth(req, res))) return;

    const id = typeof req.query.id === 'string' ? req.query.id : null;
    if (id) {
      const rows = await sql`SELECT * FROM posts WHERE id = ${id} LIMIT 1`;
      if (!rows.length) return res.status(404).json({ error: 'Post não encontrado' });
      return res.status(200).json({ post: rowToJson(rows[0] as PostRow) });
    }

    const rows = await sql`
      SELECT * FROM posts
      ORDER BY updated_at DESC
    `;
    return res.status(200).json({ posts: (rows as PostRow[]).map(rowToJson) });
  }

  if (req.method === 'POST') {
    if (!(await requireAuth(req, res))) return;

    const body = parseBody(req);
    const title = typeof body.title === 'string' ? body.title.trim() : '';
    const slug = normalizeSlug(typeof body.slug === 'string' ? body.slug : title);

    const slugError = validateSlug(slug);
    if (slugError) return res.status(400).json({ error: slugError });
    if (!title) return res.status(400).json({ error: 'Título obrigatório' });

    const existing = await sql`SELECT id FROM posts WHERE slug = ${slug} LIMIT 1`;
    if (existing.length) return res.status(409).json({ error: 'Slug já existe' });

    const contentHtml = sanitizeHtml(typeof body.contentHtml === 'string' ? body.contentHtml : '');
    const status = body.status === 'published' ? 'published' : 'draft';

    const rows = await sql`
      INSERT INTO posts (
        slug, title, excerpt, category, content_html,
        hero_image_url, hero_alt, status,
        date_published, date_reviewed, reviewer_credentials, schema_about
      ) VALUES (
        ${slug},
        ${title},
        ${typeof body.excerpt === 'string' ? body.excerpt.trim() : ''},
        ${typeof body.category === 'string' ? body.category.trim() || 'Ortopedia' : 'Ortopedia'},
        ${contentHtml},
        ${typeof body.heroImageUrl === 'string' ? body.heroImageUrl.trim() : ''},
        ${typeof body.heroAlt === 'string' ? body.heroAlt.trim() : title},
        ${status},
        ${toDateOnly(body.datePublished)},
        ${toDateOnly(body.dateReviewed)},
        ${typeof body.reviewerCredentials === 'string' ? body.reviewerCredentials.trim() : null},
        ${typeof body.schemaAbout === 'string' ? body.schemaAbout.trim() : null}
      )
      RETURNING *
    `;

    return res.status(201).json({ post: rowToJson(rows[0] as PostRow) });
  }

  if (req.method === 'PUT') {
    if (!(await requireAuth(req, res))) return;

    const body = parseBody(req);
    const id = typeof body.id === 'string' ? body.id : '';
    if (!id) return res.status(400).json({ error: 'ID obrigatório' });

    const current = await sql`SELECT * FROM posts WHERE id = ${id} LIMIT 1`;
    if (!current.length) return res.status(404).json({ error: 'Post não encontrado' });

    const row = current[0] as PostRow;
    const title = typeof body.title === 'string' ? body.title.trim() : row.title;
    const slug = normalizeSlug(typeof body.slug === 'string' ? body.slug : row.slug);

    const slugError = validateSlug(slug);
    if (slugError) return res.status(400).json({ error: slugError });

    const slugTaken = await sql`SELECT id FROM posts WHERE slug = ${slug} AND id != ${id} LIMIT 1`;
    if (slugTaken.length) return res.status(409).json({ error: 'Slug já existe' });

    const contentHtml =
      typeof body.contentHtml === 'string' ? sanitizeHtml(body.contentHtml) : row.content_html;
    const status = body.status === 'published' || body.status === 'draft' ? body.status : row.status;

    const rows = await sql`
      UPDATE posts SET
        slug = ${slug},
        title = ${title},
        excerpt = ${typeof body.excerpt === 'string' ? body.excerpt.trim() : row.excerpt},
        category = ${typeof body.category === 'string' ? body.category.trim() || 'Ortopedia' : row.category},
        content_html = ${contentHtml},
        hero_image_url = ${typeof body.heroImageUrl === 'string' ? body.heroImageUrl.trim() : row.hero_image_url},
        hero_alt = ${typeof body.heroAlt === 'string' ? body.heroAlt.trim() : row.hero_alt},
        status = ${status},
        date_published = ${'datePublished' in body ? toDateOnly(body.datePublished) : toDateOnly(row.date_published)},
        date_reviewed = ${'dateReviewed' in body ? toDateOnly(body.dateReviewed) : toDateOnly(row.date_reviewed)},
        reviewer_credentials = ${typeof body.reviewerCredentials === 'string' ? body.reviewerCredentials.trim() : row.reviewer_credentials},
        schema_about = ${typeof body.schemaAbout === 'string' ? body.schemaAbout.trim() : row.schema_about},
        updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `;

    return res.status(200).json({ post: rowToJson(rows[0] as PostRow) });
  }

  if (req.method === 'DELETE') {
    if (!(await requireAuth(req, res))) return;

    const id = typeof req.query.id === 'string' ? req.query.id : '';
    if (!id) return res.status(400).json({ error: 'ID obrigatório' });

    const result = await sql`DELETE FROM posts WHERE id = ${id} RETURNING id`;
    if (!result.length) return res.status(404).json({ error: 'Post não encontrado' });

    return res.status(200).json({ ok: true });
  }

  res.setHeader('Allow', 'GET, POST, PUT, DELETE');
  return res.status(405).json({ error: 'Method not allowed' });
}
