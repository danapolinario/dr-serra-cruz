import type { VercelRequest, VercelResponse } from '@vercel/node';
import { jwtVerify } from 'jose';

/**
 * Dispara o Deploy Hook da Vercel para rebuild após publicar/editar post.
 */

const SESSION_COOKIE = 'admin_session';

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

  const hookUrl = process.env.VERCEL_DEPLOY_HOOK_URL;
  if (!hookUrl) {
    return res.status(503).json({ error: 'VERCEL_DEPLOY_HOOK_URL não configurado' });
  }

  try {
    const deployRes = await fetch(hookUrl, { method: 'POST' });
    if (!deployRes.ok) {
      const text = await deployRes.text().catch(() => '');
      console.error('[publish] deploy hook failed', deployRes.status, text);
      return res.status(502).json({ error: 'Deploy Hook falhou', status: deployRes.status });
    }

    let payload: unknown = null;
    try {
      payload = await deployRes.json();
    } catch {
      payload = { ok: true };
    }

    return res.status(200).json({ ok: true, deploy: payload });
  } catch (e) {
    console.error('[publish]', e);
    return res.status(500).json({ error: 'Erro ao disparar deploy' });
  }
}
