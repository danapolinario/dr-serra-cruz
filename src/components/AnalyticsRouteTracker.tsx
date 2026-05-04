import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { sendPagePath } from '../analytics/gtag';

/** Envia page_view GA4 em cada navegação client-side. */
const AnalyticsRouteTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const path = `${location.pathname}${location.search}`;
    sendPagePath(path);
  }, [location.pathname, location.search]);

  return null;
};

export default AnalyticsRouteTracker;
