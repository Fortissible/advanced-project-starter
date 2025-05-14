import { FilterGithubSearchReq } from '@modules/github-search/models/filter-github-search.model';
import { GithubUsers } from '@modules/github-search/models/github-search.model';
import { AxiosResponse } from 'axios';

export default interface IGithubSearchRepository {
  getAllPosts: () => Promise<AxiosResponse<GithubUsers, any>>;
  filterAllPosts: (
    req: FilterGithubSearchReq,
  ) => Promise<AxiosResponse<GithubUsers, any>>;
}
