import { store } from '@src/configs/store/store.config';
import authTranslations from '@src/modules/auth/translations/auth.translation';
import detailTranslations from '@src/modules/detail/translations/detail.translation';
import homeTranslations from '@src/modules/home/translations/home.translation';
import { createInstance } from 'i18next';
import { capitalize } from 'lodash/capitalize';
import { initReactI18next } from 'react-i18next';
import LocaleOptions from './locale.type';

const resources = {
  [LocaleOptions.EN]: {
    translation: {
      ...authTranslations.en,
      ...detailTranslations.en,
      ...homeTranslations.en,
    },
  },
  [LocaleOptions.ID]: {
    translation: {
      ...authTranslations.id,
      ...detailTranslations.id,
      ...homeTranslations.id,
    },
  },
} as const;

export type LocaleResource = (typeof resources)[LocaleOptions.ID];

export const i18n = createInstance({
  compatibilityJSON: 'v4',
  debug: true,
  defaultNS: 'translation',
  fallbackLng: LocaleOptions.ID,
  fallbackNS: false,
  interpolation: {
    escapeValue: false,
  },
  lng: store.getState().locale.localeOptions, // USE FROM LOCALE STORE
  ns: ['translation'],
  react: {},
  resources,
});

i18n.use(initReactI18next);
i18n.init();

// Subscribe to store changes to update i18n language
store.subscribe(() => {
  const currentLocale = store.getState().locale.localeOptions;
  if (i18n.language !== currentLocale) {
    i18n.changeLanguage(currentLocale);
  }
});

/**
 * @example
 * ```id.translation.json
 * {
 *   "foo": "{{text, capitalize}}"
 * }
 * ```
 *
 * ```ts
 * i18n.t("foo", { text: "bar" }); // returns 'Bar'
 * ```
 */
i18n.services.formatter?.addCached(
  'capitalize',
  () => (value) => capitalize(value),
);

/**
 * @example
 * ```
 * {
 *   "foo": "{{value, joinArrayWithComma}}"
 * }
 * ```
 *
 * ```ts
 * i18n.t("foo", { value: ["hello", "world"] }); // returns 'hello,world'
 * ```
 */
i18n.services.formatter?.addCached('joinArrayWithComma', () => (value) => {
  if (!Array.isArray(value)) {
    return `${value}`;
  }

  return value.join(',');
});

/**
 * @example
 * ```
 * {
 *   "foo": "{{value, joinArrayWithCommaAndSpace}}"
 * }
 * ```
 *
 * ```ts
 * i18n.t("foo", { value: ["hello", "world"] }); // returns 'hello, world'
 * ```
 */
i18n.services.formatter?.addCached(
  'joinArrayWithCommaAndSpace',
  () => (value) => {
    if (!Array.isArray(value)) {
      return `${value}`;
    }

    return value.join(', ');
  },
);
