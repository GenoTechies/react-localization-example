
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from "./assets/locales/en.json"
import si from "./assets/locales/si.json"
import ta from "./assets/locales/ta.json"

const resources = {
    en,si, ta
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });


export default i18n;