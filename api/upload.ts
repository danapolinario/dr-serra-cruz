import type { VercelRequest, VercelResponse } from '@vercel/node';
import { put } from '@vercel/blob';
import { jwtVerify } from 'jose';

/**
 * Upload de imagens hero para Vercel Blob — protegido por cookie JWT.
 */

const SESSION_COOKIE = 'admin_session';
const MAX_BYTES = 5 * 1024 * 1024; // 5 MB

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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!(await isAuthenticated(req))) {
    return res.status(401).json({ error: 'Não autenticado' });
  }

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    return res.status(503).json({ error: 'BLOB_READ_WRITE_TOKEN não configurado' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const filename = typeof body?.filename === 'string' ? body.filename : 'hero.webp';
  const contentType = typeof body?.contentType === 'string' ? body.contentType : 'image/webp';
  const dataBase64 = typeof body?.dataBase64 === 'string' ? body.dataBase64 : '';

  if (!dataBase64) {
    return res.status(400).json({ error: 'dataBase64 obrigatório' });
  }

  const buffer = Buffer.from(dataBase64, 'base64');
  if (buffer.length > MAX_BYTES) {
    return res.status(400).json({ error: 'Arquivo excede 5 MB' });
  }

  if (!contentType.startsWith('image/')) {
    return res.status(400).json({ error: 'Apenas imagens são permitidas' });
  }

  const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, '-').slice(0, 80);
  const pathname = `blog/${Date.now()}-${safeName}`;

  try {
    const blob = await put(pathname, buffer, {
      access: 'public',
      contentType,
      token,
    });
    return res.status(200).json({ url: blob.url });
  } catch (e) {
    console.error('[upload]', e);
    return res.status(500).json({ error: 'Falha no upload' });
  }
}
