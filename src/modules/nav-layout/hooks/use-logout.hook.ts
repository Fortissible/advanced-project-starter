import RouteNames from '@src/configs/router/router.names';
import useAuthStore from '@src/hooks/use-auth-store.hook';
import { NavigateFunction } from 'react-router';

export default function useLogout(navigate: NavigateFunction) {
  const authStore = useAuthStore().actions;

  const handleLogout = () => {
    authStore.logout();
    authStore.persist();

    navigate(RouteNames.Login, { replace: true });
  };

  return {
    handleLogout,
  };
}
