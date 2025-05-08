import useTranslation from 'src/hooks/use-translation.hook';
import useDetail from '../../hooks/use-detail.hook';
import useUsersQuery from './queries/use-users.query';

export default function useUserViewModel() {
  const { t } = useTranslation();
  const useUsers = useUsersQuery();
  const handleToDetail = useDetail();

  return {
    useUsers,
    handleToDetail,
    t,
  };
}
