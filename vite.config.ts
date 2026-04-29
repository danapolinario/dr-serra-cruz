import path from 'path';
import type { IncomingMessage, ServerResponse } from 'http';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import {
  fetchGooglePlaceReviewSummary,
  GooglePlacesRequestError,
} from './api/lib/googlePlaceReviews';

/**
 * Em `npm run dev` e em `vite preview`, expõe GET /api/google-reviews (mesmo contrato da Vercel).
 * Recarrega `.env` / `.env.local` via `loadEnv(..., envDir)` em cada pedido.
 */
function googleReviewsDevApi(): Plugin {
  const attachMiddleware = (
    envDir: string,
    mode: string,
    middlewares: { use: (layer: unknown) => void },
  ) => {
    middlewares.use(
      async (req: IncomingMessage, res: ServerResponse, next: () => void) => {
        const pathname = (req.url ?? '').split('?')[0] ?? '';
        const normalized = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;

        if (req.method !== 'GET' || !normalized.endsWith('/api/google-reviews')) {
          return next();
        }

        const env = loadEnv(mode, envDir, '');
        const apiKey = env.GOOGLE_PLACES_API_KEY;
        const placeId = env.GOOGLE_PLACE_ID;

        if (!apiKey || !placeId) {
          res.statusCode = 503;
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify({
              error:
                'Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID — verifique .env ou .env.local na raiz do projeto',
            }),
          );
          return;
        }

        try {
          const summary = await fetchGooglePlaceReviewSummary({ apiKey, placeId });
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Cache-Control', 'no-store');
          res.end(JSON.stringify(summary));
        } catch (e) {
          console.error('[google-reviews dev]', e);
          res.statusCode = e instanceof GooglePlacesRequestError ? 502 : 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify(
              e instanceof GooglePlacesRequestError
                ? {
                    error: 'Failed to fetch Google Place details',
                    googleStatus: e.googleStatus,
                    message: e.message,
                  }
                : { error: 'Internal server error' },
            ),
          );
        }
      },
    );
  };

  return {
    name: 'google-reviews-dev-api',
    configureServer(server) {
      attachMiddleware(server.config.envDir, server.config.mode, server.middlewares);
    },
    configurePreviewServer(server) {
      attachMiddleware(server.config.envDir, server.config.mode, server.middlewares);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [googleReviewsDevApi(), tailwindcss(), react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
