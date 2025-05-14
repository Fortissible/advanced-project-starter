import { GithubUsers } from '@modules/github-search/models/github-search.model';
import { SearchQuerySchema } from '@src/modules/home/views/github-search/queries/use-search-query.schema';
import { githubSearchApiService } from '@src/services/github-search/github-search.service';
import { useMutation } from '@tanstack/react-query';

type SearchQueryFilterType = {
  onSuccess: (res: GithubUsers) => void;
  onFailure: () => void;
};

export default function useSearchQueryFilter({
  onSuccess,
  onFailure,
}: SearchQueryFilterType) {
  const { mutate: searchQuery, isPending } = useMutation({
    mutationFn: (data: SearchQuerySchema) =>
      githubSearchApiService.search.filterAllPosts({
        q: data.q,
        page: data.page,
        per_page: data.per_page,
      }),
    onSuccess: (res) => {
      onSuccess(res.data);
    },
    onError: () => {
      onFailure();
    },
  });

  return {
    searchQuery,
    isPending,
  };
}
