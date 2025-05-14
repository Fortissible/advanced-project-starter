import {
  FilterGithubSearchReq,
  FilterGithubSearchRes,
} from '@modules/github-search/models/filter-github-search.model';
import { GithubUsers } from '@modules/github-search/models/github-search.model';
import IGithubSearchRepository from '@modules/github-search/repositories/github-search.repository.interface';
import axios from 'axios';

export default function githubSearchRepositoryImpl(): IGithubSearchRepository {
  const getAllPosts = async () => {
    const response = await axios.get<GithubUsers>(
      'https://api.github.com/search/users?q=tom&page=1&per_page=10',
    );

    return response;
  };
  const filterAllPosts = async (req: FilterGithubSearchReq) => {
    var buildQuery = '';

    if (req.page) buildQuery += `page=${req.page}`;

    if (req.per_page) buildQuery += `&per_page=${req.per_page}`;

    const response = await axios.get<FilterGithubSearchRes>(
      `https://api.github.com/search/users?q=${req.q}&${buildQuery}`,
    );

    return response;
  };

  return {
    getAllPosts,
    filterAllPosts,
  };
}
