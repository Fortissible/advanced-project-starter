import useTranslation from 'src/hooks/use-translation.hook';
import useDetail from '../../hooks/use-detail.hook';
import usePostsQuery from './queries/use-posts.query';

export default function usePostsViewModel() {
  const { t } = useTranslation();
  const handleToDetail = useDetail();
  const { data, isError, isFetched, isPending, refetch } = usePostsQuery();

  return {
    handleToDetail,
    data,
    isError,
    isFetched,
    isPending,
    refetch,
    t,
  };
}
