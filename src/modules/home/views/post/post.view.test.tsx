import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render, screen } from '@testing-library/react-native';
import mockPostServer from 'src/test/mocks/server';
import PostView from './post.view';

// Mock the navigation
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

// Mock the translation
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('PostView', () => {
  beforeAll(() => mockPostServer.listen());
  afterEach(() => mockPostServer.resetHandlers());
  afterAll(() => mockPostServer.close());

  it('renders posts list', async () => {
    render(
      <NavigationContainer>
        <PostView />
      </NavigationContainer>,
    );

    // Check if title is rendered
    expect(screen.getByText('posts.title')).toBeTruthy();

    // Wait for posts to load
    const post1 = await screen.findByText('Test Post 1');
    const post2 = await screen.findByText('Test Post 2');

    expect(post1).toBeTruthy();
    expect(post2).toBeTruthy();
  });

  it('navigates to detail when post is pressed', async () => {
    render(
      <NavigationContainer>
        <PostView />
      </NavigationContainer>,
    );

    // Wait for posts to load
    const post1 = await screen.findByText('Test Post 1');

    // Press the post
    fireEvent.press(post1);

    // Check if navigation was called with correct params
    expect(mockNavigate).toHaveBeenCalledWith('Detail', {
      id: '1',
      title: 'Test Post 1',
      type: 'posts',
    });
  });
});
