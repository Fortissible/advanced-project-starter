import { type Namespace } from 'i18next';
import { useEffect, useMemo, useState } from 'react';
import { useSnapshot } from 'valtio';
import localeStore from '../apps/store/locale-store.app';
import { i18n } from '../configs/locale/locale.config';

export default function useTranslation<NS extends Namespace>(
  ns: NS | null = null,
) {
  const { localeOptions } = useSnapshot(localeStore.state);
  const [ready, setReady] = useState(i18n.isInitialized);

  const tFunc = useMemo(
    () => i18n.getFixedT(localeOptions, ns),
    [localeOptions, ns],
  );

  useEffect(() => {
    // use single source of truth: valtio global state
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
