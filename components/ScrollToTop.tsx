import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Garante scroll no topo ao mudar de rota (páginas internas e home). */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
