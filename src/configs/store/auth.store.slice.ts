import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import storageApp from '@src/apps/storage/storage.app';
import { storeSliceName } from '@src/configs/store/store.name';

type AuthState = {
  hydrated: boolean;
  accessToken?: string;
  refreshToken?: string;
};

const authInitialState: AuthState = {
  hydrated: false,
};

const hydrateAuth = createAsyncThunk(
  'auth/hydrate',
  async (_, { dispatch }) => {
    const storage = storageApp();
    const { accessToken, refreshToken } = await storage.actions.getAuthKeys();

    if (accessToken && refreshToken) {
      dispatch(
        authStoreSlice.actions.storeTokens({
          refreshToken,
          accessToken,
        }),
      );
    }

    return true;
  },
);

const persistAuth = createAsyncThunk(
  'auth/persist',
  async (_, { getState }) => {
    const { auth } = getState() as { auth: AuthState };
    const storage = storageApp();

    if (!auth.hydrated) return;

    if (auth.accessToken && auth.refreshToken) {
      await storage.actions.setAuthKeys({
        accessToken: auth.accessToken,
        refreshToken: auth.refreshToken,
      });
    } else {
      await storage.actions.clearAuthKeys();
    }
  },
);

const authSlice = createSlice({
  name: storeSliceName.auth,
  initialState: authInitialState,
  reducers: {
    storeTokens: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>,
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    refreshTokens: (state, action: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.accessToken = undefined;
      state.refreshToken = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hydrateAuth.fulfilled, (state) => {
      state.hydrated = true;
    });
  },
});

const authStoreSlice = {
  reducers: authSlice.reducer,
  actions: { ...authSlice.actions, hydrateAuth, persistAuth },
};
export default authStoreSlice;
