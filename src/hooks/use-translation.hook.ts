import { i18n } from '@src/configs/locale/locale.config';
import useLocaleStore from '@src/hooks/use-locale-store.hook';
import { type Namespace } from 'i18next';
import { useEffect, useMemo, useState } from 'react';

export default function useTranslation<NS extends Namespace>(
  ns: NS | null = null,
) {
  const { localeOptions } = useLocaleStore().state;
  const [ready, setReady] = useState(i18n.isInitialized);

  const tFunc = useMemo(
    () => i18n.getFixedT(localeOptions, ns),
    [localeOptions, ns],
  );

  useEffect(() => {
    // use single source of truth: redux global state
    if (i18n.language !== localeOptions) {
      i18n.changeLanguage(localeOptions);
    }
  }, [localeOptions]);

  useEffect(() => {
    const changeReady = () => setReady(true);

    i18n.on('initialized', changeReady);

    return () => i18n.off('initialized', changeReady);
  }, []);

  if (!ready) {
    // NOTE: for suspense to work, we need to throw a (resolvable) promise
    // eslint-disable @typescript-eslint/no-throw-literal
    throw new Promise<void>((resolve) => {
      i18n.init(() => resolve());
    });
  }

  return useMemo(() => ({ i18n, ready, t: tFunc }), [ready, tFunc]);
}
