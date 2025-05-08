import { IHttpClient } from 'libs/modules/common/clients/http.client.interface';
import {
  GetPostDetailReq,
  GetPostDetailRes,
} from '../models/get-post-detail.model';
import { GetPostRes } from '../models/get-post.model';
import { PostRes, UploadPostReq } from '../models/upload-post.model';
import IPostRepository from './post.repository.interface';

export default function postRepositoryImpl(
  httpClient: IHttpClient,
): IPostRepository {
  const getAllPosts = async () => {
    const response = await httpClient.get<GetPostRes>('/posts?limit=10');

    return response;
  };

  const getPostDetail = async (req: GetPostDetailReq) => {
    const response = await httpClient.get<GetPostDetailRes>(
      `/posts/${req.postId}`,
    );

    return response;
  };

  const uploadPost = async (req: UploadPostReq) => {
    const response = await httpClient.post<PostRes>('/posts/add', req);

    return response;
  };

  return {
    getAllPosts,
    uploadPost,
    getPostDetail,
  };
}
