/**
 * Pré-renderiza cada rota conhecida para HTML estático em dist/ (SEO, OG, crawlers).
 * Requer: vite build prévio. Usa Puppeteer (Chromium descarregado em npm install).
 * Saltar: SKIP_PRERENDER=1
 */
import { spawn } from 'child_process';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import net from 'net';
import { dirname, join } from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { getAllPrerenderPaths } from './static-site-paths.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, 'dist');

function findFreePort() {
  return new Promise((resolve, reject) => {
    const srv = net.createServer();
    srv.listen(0, '127.0.0.1', () => {
      const addr = srv.address();
      const port = typeof addr === 'object' && addr ? addr.port : 0;
      srv.close(() => resolve(port));
    });
    srv.on('error', reject);
  });
}

/** Caminho do ficheiro em dist para uma rota (ex.: /sobre → dist/sobre/index.html). */
function distFileForRoute(routePath) {
  if (routePath === '/') return join(dist, 'index.html');
  const clean = routePath.replace(/^\//, '');
  return join(dist, clean, 'index.html');
}

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForServer(base, maxMs = 120000) {
  const start = Date.now();
  while (Date.now() - start < maxMs) {
    try {
      const res = await fetch(base, { redirect: 'follow' });
      if (res.ok || res.status === 404) return;
    } catch {
      /* servidor ainda a subir */
    }
    await wait(300);
  }
  throw new Error('Timeout à espera do servidor vite preview.');
}

async function main() {
  if (process.env.SKIP_PRERENDER === '1') {
    console.log('SKIP_PRERENDER=1 — pré-render ignorado.');
    return;
  }

  const indexHtml = join(dist, 'index.html');
  if (!existsSync(indexHtml)) {
    console.error('dist/index.html em falta. Execute vite build antes do pré-render.');
    process.exit(1);
  }

  const paths = getAllPrerenderPaths(root);
  const port = await findFreePort();
  const base = `http://127.0.0.1:${port}`;

  const cmd = `npx vite preview --host 127.0.0.1 --port ${port} --strictPort`;
  const proc = spawn(cmd, {
    cwd: root,
    shell: true,
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env },
  });

  proc.stderr?.on('data', (d) => process.stderr.write(d));

  let previewExited = false;
  proc.on('exit', (code) => {
    previewExited = true;
    if (code && code !== 0 && code !== null) {
      console.warn(`vite preview terminou com código ${code}`);
    }
  });

  try {
    await waitForServer(base);

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    try {
      for (const routePath of paths) {
        const url = routePath === '/' ? `${base}/` : `${base}${routePath}`;
        const page = await browser.newPage();
        try {
          await page.goto(url, { waitUntil: 'load', timeout: 90000 });
          await page.waitForFunction(
            () => {
              const el = document.getElementById('root');
              if (!el) return false;
              const text = el.innerText || '';
              return !text.includes('Carregando');
            },
            { timeout: 90000 },
          );
          await wait(250);
          const html = await page.content();
          const outFile = distFileForRoute(routePath);
          mkdirSync(dirname(outFile), { recursive: true });
          writeFileSync(outFile, html, 'utf8');
          const rel = outFile.startsWith(root) ? outFile.slice(root.length + 1) : outFile;
          console.log('Pré-render:', routePath, '→', rel);
        } finally {
          await page.close();
        }
      }
    } finally {
      await browser.close();
    }
  } finally {
    if (!previewExited && proc.pid) {
      try {
        proc.kill('SIGTERM');
      } catch {
        /* ignore */
      }
      await wait(500);
      if (!previewExited && proc.pid) {
        try {
          proc.kill('SIGKILL');
        } catch {
          /* ignore */
        }
      }
    }
  }

  console.log(`Pré-render concluído (${paths.length} páginas).`);
}

main().catch((e) => {
  console.error(e);
  console.error('\nDica: confirme que o Puppeteer instalou o Chromium (npm install sem PUPPETEER_SKIP_DOWNLOAD).');
  process.exit(1);
});
