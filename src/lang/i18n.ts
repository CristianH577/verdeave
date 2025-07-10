// src/i18n/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./locales/es.json";
import en from "./locales/en.json";

const savedLang = localStorage.getItem("lang") || "es";

i18n.use(initReactI18next).init({
  resources: {
    en: en,
    es: es,
  },
  lng: savedLang,
  fallbackLng: "es",
  defaultNS: "common",
  fallbackNS: "common",
  interpolation: { escapeValue: false },
});

export default i18n;
