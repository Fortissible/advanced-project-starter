import { GithubUsers } from '@modules/github-search/models/github-search.model';

export type FilterGithubSearchReq = {
  q?: string;
  page?: string;
  per_page?: string;
};

export type FilterGithubSearchRes = GithubUsers;
