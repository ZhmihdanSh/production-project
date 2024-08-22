import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next)
    .init({
        lng: 'ru',
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false
        },
        resources: { ru: { translations: {} } }
    });

export default i18n;
