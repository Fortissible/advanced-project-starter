import { useQuery } from '@tanstack/react-query';
import { dummyJsonApiService } from 'src/services/dummy-json/dummy-json-api.service';

export default function usePostsQuery() {
  const { data, isError, isFetched, isPending, refetch } = useQuery({
    queryFn: () => dummyJsonApiService.posts.getAllPosts(),
    queryKey: ['getPosts'],
  });

  return { data, isError, isFetched, isPending, refetch };
}
