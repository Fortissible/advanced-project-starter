import { http, HttpResponse, type HttpHandler } from 'msw';
import { mockLoginResponse } from '../responses/login.response';
import { mockPostsResponse } from '../responses/posts.response';

const mockPostApiHandler: HttpHandler[] = [
  http.get('*/posts', () => {
    return HttpResponse.json(mockPostsResponse());
  }),

  http.post('*/auth/login', async ({ request }) => {
    const body = await request.json();
    const { username, password } = body as {
      username: string;
      password: string;
    };

    if (username === 'testuser' && password === 'password123') {
      return HttpResponse.json(mockLoginResponse());
    }

    // Cast to any to avoid type error
    return HttpResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 },
    ) as any;
  }),

  http.get('*/posts/:id', ({ params }) => {
    const { id } = params;
    const post = mockPostsResponse().posts.find((p) => p.id.toString() === id);

    if (post) {
      return HttpResponse.json(post);
    }

    // Cast error response to avoid type error
    return HttpResponse.json(
      { message: 'Post not found' },
      { status: 404 },
    ) as any;
  }),
];

export default mockPostApiHandler;
