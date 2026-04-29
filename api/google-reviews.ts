import type { VercelRequest, VercelResponse } from '@vercel/node';

import {
  fetchGooglePlaceReviewSummary,
  GooglePlacesRequestError,
} from './lib/googlePlaceReviews';

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
