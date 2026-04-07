/**
 * Pré-renderiza cada rota conhecida para HTML estático em dist/ (SEO, OG, crawlers).
 * Requer: vite build prévio.
 * - Vercel / Linux mínimo: @sparticuz/chromium + puppeteer-core (com libs AL2023).
 * - Local: Google Chrome/Chromium no sistema ou CHROME_PATH.
 * Saltar: SKIP_PRERENDER=1
 */
import { spawn } from 'child_process';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import net from 'net';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { getAllPrerenderPaths } from './static-site-paths.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, 'dist');

/** Na Vercel (Linux sem NSS do sistema), forçar o mesmo caminho que AL2023 Lambda para extrair .so em /tmp. */
function ensureSparticuzVercelEnv() {
  if (process.env.VERCEL === '1' && !process.env.AWS_EXECUTION_ENV) {
    process.env.AWS_EXECUTION_ENV = 'AWS_Lambda_nodejs20.x';
  }
}

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

function resolveLocalChromeExecutable() {
  const candidates = [
    process.env.CHROME_PATH,
    process.platform === 'darwin' && '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    process.platform === 'darwin' && '/Applications/Chromium.app/Contents/MacOS/Chromium',
    process.platform === 'linux' && '/usr/bin/google-chrome-stable',
    process.platform === 'linux' && '/usr/bin/google-chrome',
    process.platform === 'linux' && '/usr/bin/chromium',
    process.platform === 'linux' && '/usr/bin/chromium-browser',
    process.platform === 'win32' &&
      join(process.env.PROGRAMFILES || 'C:\\Program Files', 'Google', 'Chrome', 'Application', 'chrome.exe'),
    process.platform === 'win32' &&
      join(
        process.env['PROGRAMFILES(X86)'] || 'C:\\Program Files (x86)',
        'Google',
        'Chrome',
        'Application',
        'chrome.exe',
      ),
  ].filter((p) => typeof p === 'string' && p.length > 0);

  for (const p of candidates) {
    if (p && existsSync(p)) return p;
  }
  return null;
}

async function launchBrowser() {
  ensureSparticuzVercelEnv();

  const extraArgs = ['--disable-dev-shm-usage'];

  if (process.env.VERCEL === '1') {
    const chromiumMod = await import('@sparticuz/chromium');
    const Chromium = chromiumMod.default;
    const puppeteerCore = await import('puppeteer-core');
    const puppeteer = puppeteerCore.default;

    const executablePath = await Chromium.executablePath();
    return puppeteer.launch({
      args: [...Chromium.args, ...extraArgs],
      defaultViewport: Chromium.defaultViewport,
      executablePath,
      headless: Chromium.headless,
    });
  }

  const chromePath = resolveLocalChromeExecutable();
  if (!chromePath) {
    throw new Error(
      'Chrome/Chromium não encontrado para pré-render local. Instale o Google Chrome ou defina CHROME_PATH. Na Vercel usa-se @sparticuz/chromium automaticamente.',
    );
  }

  const puppeteerCore = await import('puppeteer-core');
  const puppeteer = puppeteerCore.default;

  return puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', ...extraArgs],
  });
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

    const browser = await launchBrowser();

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
  console.error('\nVercel: confirme Node 20+ no projeto. Local: instale Chrome ou defina CHROME_PATH.');
  process.exit(1);
});
