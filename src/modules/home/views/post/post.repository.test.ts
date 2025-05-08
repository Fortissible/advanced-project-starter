import postRepositoryImpl from 'libs/modules/post/repositories/post.repository';
import { HttpClient } from 'src/clients/http/http.client';
import { mockPostsResponse } from 'src/test/mocks/responses/posts.response';

describe('createPostRepository', () => {
  const httpClient = new HttpClient();
  httpClient.updateConfig({
    baseUrl: 'http://localhost:3000',
  });
  const repository = postRepositoryImpl(httpClient);

  describe('getAllPosts', () => {
    it('should return posts', async () => {
      const response = await repository.getAllPosts();
      const mockResponse = mockPostsResponse();

      expect(response).toEqual({
        data: mockResponse,
        ok: true,
      });
    });
  });

  describe('getPostDetail', () => {
    it('should return post detail', async () => {
      const response = await repository.getPostDetail({ postId: 1 });
      const mockResponse = mockPostsResponse().posts[0];

      expect(response).toEqual({
        data: mockResponse,
        ok: true,
      });
    });

    it('should handle not found post', async () => {
      const response = await repository.getPostDetail({ postId: 999 });

      expect(response).toEqual({
        data: null,
        ok: false,
        message: 'Post not found',
      });
    });
  });
});
