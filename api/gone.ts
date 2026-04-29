import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Handler 410 Gone — para conteúdo migrado do WordPress que NÃO tem equivalente
 * directa no site novo. Devolve HTML mínimo com `noindex,nofollow` e link para Home.
 *
 * Mapeamento via `vercel.json` (rewrites) — paths como `/3-dicas-para-prevenir-lesoes`
 * apontam para esta função.
 */
export default function handler(req: VercelRequest, res: VercelResponse) {
  const path = (req.url ?? '/').split('?')[0] ?? '/';
  res.statusCode = 410;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.send(`<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Conteúdo removido | Dr. Raphael Serra Cruz</title>
    <meta name="description" content="Esta página foi descontinuada. Visite a página inicial para encontrar informação atualizada." />
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background:#f8fafc; color:#0f172a; margin:0; padding:0; }
      main { max-width: 640px; margin: 8vh auto; padding: 24px; text-align: center; }
      h1 { font-size: clamp(2rem, 6vw, 3rem); margin-bottom: 16px; }
      p { font-size: 1.05rem; color:#475569; margin-bottom: 24px; line-height: 1.6; }
      .cta { display: inline-block; background:#1d4ed8; color:#fff; padding: 14px 28px; border-radius: 999px; text-decoration: none; font-weight: 600; }
      .cta:hover { background:#1e40af; }
      code { background:#e2e8f0; padding: 2px 6px; border-radius: 4px; font-size: 0.9rem; }
    </style>
  </head>
  <body>
    <main>
      <h1>Conteúdo removido</h1>
      <p>A página <code>${escapeHtml(path)}</code> foi descontinuada e não possui substituta directa.</p>
      <p>Visite a página inicial ou o blog para encontrar conteúdo atualizado sobre ortopedia e cirurgia do joelho.</p>
      <a class="cta" href="/">Voltar ao início</a>
    </main>
  </body>
</html>`);
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => {
    switch (c) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&#39;';
      default:
        return c;
    }
  });
}
