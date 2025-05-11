import useAuthStore from '@src/hooks/use-auth-store.hook';
import useLocaleStore from '@src/hooks/use-locale-store.hook';
import { useEffect } from 'react';

export default function StoreApp() {
  const { actions: authActions, state: authState } = useAuthStore();
  const { actions: localeActions, state: localeState } = useLocaleStore();

  useEffect(() => {
    authActions.hydrate();
    localeActions.hydrate();
  }, [authActions, localeActions]);

  useEffect(() => {
    if (authState.hydrated) {
      authActions.persist();
    }
  }, [
    authState.accessToken,
    authState.refreshToken,
    authActions,
    authState.hydrated,
  ]);

  useEffect(() => {
    if (localeState.hydrated) {
      localeActions.persist();
    }
  }, [localeState.localeOptions, localeActions, localeState.hydrated]);

  return null;
}
