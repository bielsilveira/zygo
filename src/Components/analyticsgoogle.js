// src/components/analyticsgoogle.js
import  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Quando a URL mudar, enviar a visualização de página ao Google Analytics
    window.gtag('config', 'G-MTS365EBS9', {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null; // Esse componente não precisa renderizar nada
};

export default GoogleAnalytics;
