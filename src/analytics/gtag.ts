import { GA_MEASUREMENT_ID } from '../config/analytics';

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag(...args);
}

/** SPA: novo “screen” em cada mudança de rota (History API). */
export function sendPagePath(pagePath: string) {
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: pagePath,
  });
}

export function trackEvent(eventName: string, params?: GtagParams) {
  gtag('event', eventName, params);
}

/** WhatsApp agendar — uso principal para conversões por zona da página. */
export function trackScheduleClick(placement: string) {
  trackEvent('schedule_click', {
    channel: 'whatsapp',
    placement,
  });
  trackEvent('generate_lead', {
    method: 'whatsapp',
    placement,
  });
}

export function trackNavClick(destinationPath: string, linkText: string) {
  trackEvent('nav_click', {
    destination_path: destinationPath,
    link_text: linkText,
  });
}

export function trackMapsClick(locationName: string, mapsUrl: string) {
  trackEvent('maps_click', {
    location_name: locationName,
    link_url: mapsUrl,
  });
}

export function trackContactChannel(kind: 'phone' | 'email', placement = 'contact_section') {
  trackEvent('contact_click', {
    contact_type: kind,
    placement,
  });
}

export function trackSocialClick(network: string, url: string) {
  trackEvent('social_click', {
    network,
    link_url: url,
  });
}

export function trackOutboundClick(params: {
  link_url: string;
  link_text: string;
  source_page: string;
}) {
  trackEvent('outbound_click', params);
}

/** Ancoras na mesma página (ex.: hero → #sobre). */
export function trackScrollCta(anchorId: string, placement: string) {
  trackEvent('scroll_cta_click', {
    anchor_id: anchorId,
    placement,
  });
}
