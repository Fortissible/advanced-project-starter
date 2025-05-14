import { GithubUser } from '@modules/github-search/models/github-search.model';
import useTranslation from '@src/hooks/use-translation.hook';
import useSearchQuery from '@src/modules/home/views/github-search/hooks/use-search-query.hook';
import useGithubSearchQuery from '@src/modules/home/views/github-search/queries/use-github-search.query';
import useSearchQueryFilter from '@src/modules/home/views/github-search/queries/use-search-query-filter.query';
import { useEffect, useState } from 'react';

export default function useGithubSearchViewModel() {
  const { data } = useGithubSearchQuery();

  const [tableData, setTableData] = useState<GithubUser[]>([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(0);

  const { t } = useTranslation();
  const searchQuery = useSearchQuery();
  const searchFilterQuery = useSearchQueryFilter({
    onSuccess: async (res) => {
      setTableData(res.items);
      setTotalCount(res.total_count);
    },
    onFailure: () => {},
  });

  useEffect(() => {
    setTableData(data?.data.items ?? []);
  }, [data]);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (!searchQuery.control.getFieldState('q').isDirty) return;
    searchFilterQuery.searchQuery({
      q: searchQuery.getValues().q,
      per_page: perPage.toString(),
      page: page.toString(),
    });
  }, [page, perPage]);

  return {
    searchFilterQuery,
    searchQuery,
    githubUsers: tableData,
    t,
    page,
    perPage,
    totalCount,
    setPage,
    setPerPage,
  };
}
