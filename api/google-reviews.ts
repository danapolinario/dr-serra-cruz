import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Google Places API — Place Details (legacy JSON endpoint).
 * Tudo neste ficheiro: a Vercel só empacota um único .js por função;
 * imports relativos para ./lib/ não são enviados para /var/task.
 */

export type GoogleReviewSummary = {
  rating: number;
  reviewCount: number;
  source: 'google';
  updatedAt: string;
};

type PlacesDetailsResponse = {
  status: string;
  error_message?: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
  };
};

export class GooglePlacesRequestError extends Error {
  constructor(
    message: string,
    public readonly googleStatus: string,
  ) {
    super(message);
    this.name = 'GooglePlacesRequestError';
  }
}

export async function fetchGooglePlaceReviewSummary(options: {
  apiKey: string;
  placeId: string;
}): Promise<GoogleReviewSummary> {
  const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
  url.searchParams.set('place_id', options.placeId);
  url.searchParams.set('fields', 'rating,user_ratings_total');
  url.searchParams.set('key', options.apiKey);

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new GooglePlacesRequestError(
      `Places HTTP ${res.status}`,
      'HTTP_ERROR',
    );
  }

  const data = (await res.json()) as PlacesDetailsResponse;

  if (data.status !== 'OK' || !data.result) {
    throw new GooglePlacesRequestError(
      data.error_message || data.status || 'Places API error',
      data.status || 'UNKNOWN',
    );
  }

  const rating = typeof data.result.rating === 'number' ? data.result.rating : 0;
  const reviewCount =
    typeof data.result.user_ratings_total === 'number' ? data.result.user_ratings_total : 0;

  return {
    rating,
    reviewCount,
    source: 'google',
    updatedAt: new Date().toISOString(),
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET');
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return res.status(503).json({
        error: 'Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID',
      });
    }

    try {
      const summary = await fetchGooglePlaceReviewSummary({ apiKey, placeId });
      res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
      return res.status(200).json(summary);
    } catch (e) {
      console.error('[google-reviews]', e);
      if (e instanceof GooglePlacesRequestError) {
        return res.status(502).json({
          error: 'Failed to fetch Google Place details',
          googleStatus: e.googleStatus,
        });
      }
      return res.status(500).json({ error: 'Internal error' });
    }
  } catch (e) {
    console.error('[google-reviews] unhandled', e);
    return res.status(500).json({ error: 'Internal error' });
  }
}
