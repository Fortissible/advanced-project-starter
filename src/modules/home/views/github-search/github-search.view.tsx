import useGithubSearchViewModel from '@src/modules/home/views/github-search/github-search.view-model';
import { memo, useMemo } from 'react';
import { Controller } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

const GithubSearchView = () => {
  const {
    githubUsers,
    t,
    searchQuery,
    searchFilterQuery,
    page,
    perPage,
    totalCount,
    setPage,
    setPerPage,
  } = useGithubSearchViewModel();

  const onPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(Number(e.target.value));
    setPage(1);
  };

  const handlePreviousPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(totalCount / perPage);
    setPage((prev) => Math.min(prev + 1, maxPage));
  };

  const paginationInfo = useMemo(() => {
    const maxPage = Math.ceil(totalCount / perPage) || 1;
    return { page, maxPage };
  }, [page, perPage, totalCount]);

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-semibold text-blue-600 mb-6 text-center">
          {t('github-search.title')}
        </h1>

        <form
          onSubmit={searchQuery.handleSubmit((req) =>
            searchFilterQuery.searchQuery({
              q: req.q,
              per_page: perPage.toString(),
              page: page.toString(),
            }),
          )}
          className="space-y-4"
        >
          <div>
            <Controller
              control={searchQuery.control}
              name="q"
              render={({ field }) => (
                <input
                  type="text"
                  placeholder="Search username..."
                  className={twMerge(
                    'w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400',
                    searchQuery.errors.q ? 'border-red-500' : 'border-gray-300',
                  )}
                  {...field}
                />
              )}
            />
            {searchQuery.errors.q && (
              <p className="text-red-500 text-sm mt-1">
                {searchQuery.errors.q.message}
              </p>
            )}
          </div>

          <div className="flex justify-between items-center">
            <select
              value={perPage}
              onChange={onPerPageChange}
              className="border px-2 py-1 rounded-md"
            >
              <option value={10}>10 / page</option>
              <option value={20}>20 / page</option>
              <option value={30}>30 / page</option>
            </select>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              Search
            </button>
          </div>
        </form>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full table-auto border border-gray-200 text-sm">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Username</th>
                <th className="px-4 py-2 text-left">Profile URL</th>
              </tr>
            </thead>
            <tbody>
              {githubUsers.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="text-center py-6 text-gray-500 font-medium"
                  >
                    No results found.
                  </td>
                </tr>
              ) : (
                githubUsers.map((user) => (
                  <tr key={user.id} className="border-t">
                    <td className="px-4 py-2">{user.id}</td>
                    <td className="px-4 py-2">{user.login}</td>
                    <td className="px-4 py-2">
                      <a
                        href={user.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {user.html_url}
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={handlePreviousPage}
            disabled={paginationInfo.page === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm">
            Page {paginationInfo.page} of {paginationInfo.maxPage}
          </span>
          <button
            onClick={handleNextPage}
            disabled={paginationInfo.page === paginationInfo.maxPage}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(GithubSearchView);
