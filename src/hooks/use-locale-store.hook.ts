import LocaleOptions from '@src/configs/locale/locale.type';
import localeStoreSlice from '@src/configs/store/locale.store.slice';
import { AppDispatch, RootState } from '@src/configs/store/store.config';
import { useDispatch, useSelector } from 'react-redux';

export default function useLocaleStore() {
  const dispatch = useDispatch<AppDispatch>();
  const locale = useSelector((state: RootState) => state.locale);

  return {
    state: locale,
    actions: {
      setLocale: (locale: LocaleOptions) =>
        dispatch(localeStoreSlice.actions.setLocale(locale)),
      hydrate: () => dispatch(localeStoreSlice.actions.hydrateLocale()),
      persist: () => dispatch(localeStoreSlice.actions.persistLocale()),
    },
  };
}
