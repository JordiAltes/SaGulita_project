import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const i18nConfig = {
  fallbackLng: "es",
  debug: true,
  detection: {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage'],
  },
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
  },
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init(i18nConfig);

export default i18n;

