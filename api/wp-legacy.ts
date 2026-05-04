import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Redirects WordPress legacy query strings (?p=ID, ?s=termo).
 * Mapeamento ?p= alinhado a scripts/wordpress-migration-redirects.csv
 */
const POST_ID_REDIRECTS: Record<string, string> = {
  '4457': '/blog/ortopedista-brasileiro-na-europa-telemedicina',
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  const pRaw = req.query.p;
  const sRaw = req.query.s;

  if (pRaw !== undefined && pRaw !== null && String(pRaw).trim() !== '') {
    const id = String(pRaw).trim();
    const dest = POST_ID_REDIRECTS[id];
    if (dest) {
      res.statusCode = 301;
      res.setHeader('Location', dest);
      res.end('');
      return;
    }
  }

  if (sRaw !== undefined && sRaw !== null && String(sRaw).trim() !== '') {
    res.statusCode = 301;
    res.setHeader('Location', '/blog');
    res.end('');
    return;
  }

  res.statusCode = 302;
  res.setHeader('Location', '/');
  res.end('');
}
