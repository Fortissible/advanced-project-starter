import i18n from 'i18next';
import { Trans, initReactI18next, useTranslation } from 'react-i18next';
import LocaleOptions from './locale.config.type';

const resources = {
  en: {
    translation: {},
  },
  ja: {
    translation: {},
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  fallbackLng: LocaleOptions.ID,
  lng: LocaleOptions.ID, //Use language from store
  resources,
});

function getTransComponent(key: string) {
  return <Trans i18nKey={key} />;
}

// subscribe store keys to auto update language on change value
// subscribeKey(mainStore.state, 'locale', (value) => i18n.changeLanguage(value));

export { getTransComponent, i18n, useTranslation };
