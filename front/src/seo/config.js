// src/seo/config.js
export const site = {
  name: import.meta.env.VITE_BRAND_NAME || "Scanterra - Soluciones Satelitales Aplicadas",
  baseUrl: (import.meta.env.VITE_SITE_URL || "http://localhost:5173").replace(/\/+$/, ""),
  defaultImage: import.meta.env.VITE_DEFAULT_OG || "/og-default.jpg",
  twitterUser: "@scanterra", 
  locale: "es_AR",            
};
