import type { VercelRequest, VercelResponse } from '@vercel/node';
import { SignJWT, jwtVerify } from 'jose';
import { createHash, timingSafeEqual } from 'crypto';

/**
 * Autenticação do painel admin — login/logout com cookie JWT HttpOnly.
 * Self-contained (sem imports relativos) para deploy na Vercel.
 */

const SESSION_COOKIE = 'admin_session';
const SESSION_MAX_AGE_SEC = 60 * 60 * 24 * 7; // 7 dias

function parseCookies(req: VercelRequest): Record<string, string> {
  const header = req.headers.cookie ?? '';
  const out: Record<string, string> = {};
  for (const part of header.split(';')) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq);
    const value = trimmed.slice(eq + 1);
    out[key] = decodeURIComponent(value);
  }
  return out;
}

function getSessionSecret(): Uint8Array | null {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 16) return null;
  return new TextEncoder().encode(secret);
}

function hashPassword(password: string): string {
  return createHash('sha256').update(password, 'utf8').digest('hex');
}

function verifyPassword(password: string, expectedHash: string): boolean {
  const actual = hashPassword(password);
  try {
    const a = Buffer.from(actual, 'hex');
    const b = Buffer.from(expectedHash, 'hex');
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

function cookieOptions(secure: boolean): string {
  const parts = [
    'Path=/',
    'HttpOnly',
    'SameSite=Strict',
    `Max-Age=${SESSION_MAX_AGE_SEC}`,
  ];
  if (secure) parts.push('Secure');
  return parts.join('; ');
}

export async function createSessionToken(): Promise<string | null> {
  const secret = getSessionSecret();
  if (!secret) return null;
  return new SignJWT({ role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE_SEC}s`)
    .sign(secret);
}

export async function verifySessionToken(token: string): Promise<boolean> {
  const secret = getSessionSecret();
  if (!secret) return false;
  try {
    await jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}

export async function isAuthenticated(req: VercelRequest): Promise<boolean> {
  const token = parseCookies(req)[SESSION_COOKIE];
  if (!token) return false;
  return verifySessionToken(token);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const secure = process.env.NODE_ENV === 'production' || req.headers['x-forwarded-proto'] === 'https';

  if (req.method === 'POST') {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const action = body?.action ?? 'login';

    if (action === 'logout') {
      res.setHeader('Set-Cookie', `${SESSION_COOKIE}=; ${cookieOptions(secure)}; Max-Age=0`);
      return res.status(200).json({ ok: true });
    }

    const password = typeof body?.password === 'string' ? body.password : '';
    const expectedHash = process.env.ADMIN_PASSWORD_HASH;

    if (!expectedHash) {
      return res.status(503).json({ error: 'ADMIN_PASSWORD_HASH não configurado' });
    }
    if (!getSessionSecret()) {
      return res.status(503).json({ error: 'SESSION_SECRET não configurado (mín. 16 caracteres)' });
    }

    if (!verifyPassword(password, expectedHash)) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    const token = await createSessionToken();
    if (!token) {
      return res.status(503).json({ error: 'Não foi possível criar sessão' });
    }

    res.setHeader('Set-Cookie', `${SESSION_COOKIE}=${encodeURIComponent(token)}; ${cookieOptions(secure)}`);
    return res.status(200).json({ ok: true });
  }

  if (req.method === 'GET') {
    const authed = await isAuthenticated(req);
    return res.status(200).json({ authenticated: authed });
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).json({ error: 'Method not allowed' });
}
