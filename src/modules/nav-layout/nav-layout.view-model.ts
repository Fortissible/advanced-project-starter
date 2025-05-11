import LocaleOptions from '@src/configs/locale/locale.type';
import useLocaleStore from '@src/hooks/use-locale-store.hook';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

export default function useNavLayoutViewModel() {
  const localeStore = useLocaleStore();
  const [isEnabled, setIsEnabled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Sync toggle state with locale state
  useEffect(() => {
    setIsEnabled(localeStore.state.localeOptions === LocaleOptions.EN);
  }, [localeStore.state.localeOptions]);

  const handleLogout = () => {
    navigate('/login', { replace: true });
  };

  return {
    isEnabled,
    setIsEnabled,
    navigate,
    location,
    handleLogout,
    localeStore,
  };
}
