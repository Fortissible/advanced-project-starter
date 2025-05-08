export const mockPostsResponse = () => ({
  posts: [
    {
      id: 1,
      title: 'Test Post 1',
      body: 'Test body 1',
      userId: 1,
      tags: ['test'],
      reactions: 0,
    },
    {
      id: 2,
      title: 'Test Post 2',
      body: 'Test body 2',
      userId: 2,
      tags: ['test'],
      reactions: 0,
    },
  ],
  total: 2,
  skip: 0,
  limit: 10,
});
