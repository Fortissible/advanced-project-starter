export type PersistedStoreState = {
  hydrated?: boolean;
};

export type StoreApp<State = unknown> = {
  initial: Readonly<Partial<State>>;
  state: Readonly<State>;
};
