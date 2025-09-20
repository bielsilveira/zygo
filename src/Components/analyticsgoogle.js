// src/components/analyticsgoogle.js

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Verifica se o gtag está disponível antes de chamar
    if (window.gtag) {
      window.gtag('config', 'G-MTS365EBS9', {
        page_path: location.pathname + location.search,
      });
    } else {
      console.warn('Google Analytics não carregou corretamente');
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
