import useTranslation from '@src/hooks/use-translation.hook';
import useDetailNavigation from '@src/modules/home/hooks/use-detail-navigation.hook';
import usePostsQuery from '@src/modules/home/views/posts/queries/use-posts.query';

export default function usePostsViewModel() {
  const { t } = useTranslation();
  const handleToDetail = useDetailNavigation();
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
