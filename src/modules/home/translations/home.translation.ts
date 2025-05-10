import postsTranslationEn from '../views/posts/translations/en.translation.json';
import postsTranslationId from '../views/posts/translations/id.translation.json';
import productsTranslationEn from '../views/products/translations/en.translation.json';
import productsTranslationId from '../views/products/translations/id.translation.json';
import usersTranslationEn from '../views/users/translations/en.translation.json';
import usersTranslationId from '../views/users/translations/id.translation.json';

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
