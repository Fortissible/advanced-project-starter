import detailTranslationEn from './en.translation.json';
import detailTranslationId from './id.translation.json';

const detailTranslations = {
  en: {
    ...detailTranslationEn,
  },
  id: {
    ...detailTranslationId,
  },
} as const;

export default detailTranslations;
