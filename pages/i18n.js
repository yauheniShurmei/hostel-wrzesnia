import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationPL from "./locales/pl/translationPL.json";
import translationUKR from "./locales/ukr/translationUKR.json";

const resources = {
  pl: {
    translation: translationPL,
  },
  ukr: {
    translation: translationUKR,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "pl",

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
