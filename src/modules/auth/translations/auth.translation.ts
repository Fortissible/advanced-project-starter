import {
  default as loginTranslationEn,
  default as loginTranslationId,
} from '../views/login/translations/en.translation.json';
import {
  default as registerTranslationEn,
  default as registerTranslationId,
} from '../views/register/translations/en.translation.json';

const authTranslations = {
  en: {
    ...registerTranslationEn,
    ...loginTranslationEn,
  },
  id: {
    ...registerTranslationId,
    ...loginTranslationId,
  },
} as const;

export default authTranslations;
