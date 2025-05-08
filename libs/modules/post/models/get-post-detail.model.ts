import { Post } from './post.model';

export type GetPostDetailReq = {
  postId: number;
};
export type GetPostDetailRes = Post;
