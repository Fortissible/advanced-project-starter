import authStoreSlice from '@src/configs/store/auth.store.slice';
import { AppDispatch, RootState } from '@src/configs/store/store.config';
import { useDispatch, useSelector } from 'react-redux';

export default function useAuthStore() {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);

  return {
    state: auth,
    actions: {
      storeTokens: (tokens: { accessToken: string; refreshToken: string }) =>
        dispatch(authStoreSlice.actions.storeTokens(tokens)),
      refreshTokens: (tokens: { accessToken: string }) =>
        dispatch(authStoreSlice.actions.refreshTokens(tokens)),
      logout: () => dispatch(authStoreSlice.actions.logout()),
      hydrate: () => dispatch(authStoreSlice.actions.hydrateAuth()),
      persist: () => dispatch(authStoreSlice.actions.persistAuth()),
    },
  };
}
