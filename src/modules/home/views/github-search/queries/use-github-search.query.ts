import { githubSearchApiService } from '@src/services/github-search/github-search.service';
import { useQuery } from '@tanstack/react-query';

export default function useGithubSearchQuery() {
  const { data, isError, isFetched, isPending, refetch } = useQuery({
    queryFn: () => githubSearchApiService.search.getAllPosts(),
    queryKey: ['getGithubUsers'],
  });

  return { data, isError, isFetched, isPending, refetch };
}
