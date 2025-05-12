import useTranslation from '@src/hooks/use-translation.hook';
import useDetailNavigation from '@src/modules/home/hooks/use-detail-navigation.hook';
import usePostsQuery from '@src/modules/home/views/posts/queries/use-posts.query';

export default function usePostsViewModel() {
  const { t } = useTranslation();
  const handleToDetail = useDetailNavigation();
  const usePosts = usePostsQuery();

  return {
    handleToDetail,
    usePosts,
    t,
  };
}
