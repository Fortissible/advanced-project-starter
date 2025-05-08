import postsTranslationEn from '../views/post/translations/en.translation.json';
import postsTranslationId from '../views/post/translations/id.translation.json';
import productsTranslationEn from '../views/product/translations/en.translation.json';
import productsTranslationId from '../views/product/translations/id.translation.json';
import usersTranslationEn from '../views/user/translations/en.translation.json';
import usersTranslationId from '../views/user/translations/id.translation.json';

const homeTranslations = {
  en: {
    ...postsTranslationEn,
    ...productsTranslationEn,
    ...usersTranslationEn,
    logout: 'Logout Account',
  },
  id: {
    ...postsTranslationId,
    ...productsTranslationId,
    ...usersTranslationId,
    logout: 'Logout Akun',
  },
} as const;

export default homeTranslations;
