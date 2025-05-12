import LocaleOptions from '@src/configs/locale/locale.type';
import useLocaleStore from '@src/hooks/use-locale-store.hook';
import useTranslation from '@src/hooks/use-translation.hook';
import useLogout from '@src/modules/nav-layout/hooks/use-logout.hook';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

export default function useNavLayoutViewModel() {
  const navigate = useNavigate();
  const localeStore = useLocaleStore();
  const [isEnabled, setIsEnabled] = useState(false);
  const location = useLocation();
  const { handleLogout } = useLogout(navigate);
  const { t } = useTranslation();

  // Sync toggle state with locale state
  useEffect(() => {
    setIsEnabled(localeStore.state.localeOptions === LocaleOptions.EN);
  }, [localeStore.state.localeOptions]);

  return {
    isEnabled,
    setIsEnabled,
    navigate,
    location,
    handleLogout,
    localeStore,
    t,
  };
}
