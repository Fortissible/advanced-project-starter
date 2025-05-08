import tokenStore from 'src/apps/store/auth-store.app';
import { useSnapshot } from 'valtio';

export default function useTokenStore() {
  return useSnapshot(tokenStore.state);
}
