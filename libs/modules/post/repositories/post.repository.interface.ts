import { GetPostDetailReq } from '../models/get-post-detail.model';
import { Post, Posts } from '../models/post.model';
import { PostRes, UploadPostReq } from '../models/upload-post.model';

export default interface IPostRepository {
  getAllPosts: () => Promise<Posts>;
  uploadPost: (req: UploadPostReq) => Promise<PostRes>;
  getPostDetail: (req: GetPostDetailReq) => Promise<Post>;
}
