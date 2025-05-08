import { proxy, snapshot } from 'valtio';
import { subscribeKey } from 'valtio/utils';
import appStorage from '../storage/storage.app';

type AuthState = {
  hydrated: boolean;
} & (
  | {
      accessToken: string;
      refreshToken: string;
    }
  | {
      accessToken?: undefined;
      refreshToken?: undefined;
    }
);

const initialAuthState: AuthState = { hydrated: false };

const state = proxy({
  ...initialAuthState,
});

const actions = {
  hydrate: async () => {
    const { hydrated } = snapshot(state);

    if (hydrated) {
      return;
    }

    state.hydrated = true;

    const accessToken = appStorage.getString('token-store.access-token');
    const refreshToken = appStorage.getString('token-store.refresh-token');

    if (accessToken && refreshToken) {
      actions.storeTokens({ accessToken, refreshToken });
    }
  },
  logout: () => {
    Object.assign(state, { accessToken: undefined, refreshToken: undefined });
    appStorage.delete('token-store.access-token');
    appStorage.delete('token-store.refresh-token');
  },
  persist: async () => {
    const { accessToken, hydrated, refreshToken } = snapshot(state);

    // start persisting when store is hydrated
    if (!hydrated) {
      return;
    }

    if (accessToken && refreshToken) {
      appStorage.set('token-store.access-token', accessToken);
      appStorage.set('token-store.refresh-token', refreshToken);
    } else {
      appStorage.delete('token-store.access-token');
      appStorage.delete('token-store.refresh-token');
    }
  },
  refreshTokens: (newTokens: { accessToken: string; refreshToken: string }) => {
    // when refreshing tokens, refreshTokens is not used
    Object.assign(state, { accessToken: newTokens.accessToken });
  },
  storeTokens: (tokens: { accessToken: string; refreshToken: string }) => {
    Object.assign(state, { ...tokens });
  },
};

type TokenStore = {
  actions: typeof actions;
  initialAuthState: Readonly<typeof initialAuthState>;
  state: Readonly<AuthState>;
};

const tokenStore: TokenStore = {
  actions,
  initialAuthState,
  state,
};

tokenStore.actions.hydrate().then(() => {
  subscribeKey(tokenStore.state, 'accessToken', () =>
    tokenStore.actions.persist(),
  );
  subscribeKey(tokenStore.state, 'refreshToken', () =>
    tokenStore.actions.persist(),
  );
});

export default tokenStore;
