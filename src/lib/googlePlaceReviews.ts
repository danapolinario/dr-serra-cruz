/**
 * Google Places API — Place Details (legacy JSON endpoint).
 * Usado apenas no servidor (Vercel function ou middleware do Vite em dev).
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
    throw new Error(`Places HTTP ${res.status}`);
  }

  const data = (await res.json()) as PlacesDetailsResponse;

  if (data.status !== 'OK' || !data.result) {
    throw new Error(data.error_message || data.status || 'Places API error');
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
