import { GetPostDetailReq } from '@modules/post/models/get-post-detail.model';
import { Post, Posts } from '@modules/post/models/post.model';
import { PostRes, UploadPostReq } from '@modules/post/models/upload-post.model';

export default interface IPostRepository {
  getAllPosts: () => Promise<Posts>;
  uploadPost: (req: UploadPostReq) => Promise<PostRes>;
  getPostDetail: (req: GetPostDetailReq) => Promise<Post>;
}
