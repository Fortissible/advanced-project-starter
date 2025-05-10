import useTranslation from '@src/hooks/use-translation.hook';
import useDetailNavigation from '@src/modules/home/hooks/use-detail-navigation.hook';
import useUsersQuery from '@src/modules/home/views/users/queries/use-users.query';

export default function useUserViewModel() {
  const { t } = useTranslation();
  const useUsers = useUsersQuery();
  const handleToDetail = useDetailNavigation();

  return {
    useUsers,
    handleToDetail,
    t,
  };
}
