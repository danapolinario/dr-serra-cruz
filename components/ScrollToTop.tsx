import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Garante scroll no topo ao mudar de rota; com hash, rola até o alvo (ex.: /#tratamentos). */
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const id = hash.replace(/^#/, '');
    if (!id) {
      window.scrollTo(0, 0);
      return;
    }

    let cancelled = false;
    let frames = 0;
    const maxFrames = 240;

    const scrollToTarget = () => {
      const el = document.getElementById(decodeURIComponent(id));
      if (!el) return false;
      const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
      return true;
    };

    const tick = () => {
      if (cancelled) return;
      if (scrollToTarget()) return;
      frames += 1;
      if (frames < maxFrames) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
    return () => {
      cancelled = true;
    };
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
