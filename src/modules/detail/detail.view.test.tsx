import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render, screen } from '@testing-library/react-native';
import mockPostServer from 'src/test/mocks/server';
import DetailView from './detail.view';

// Mock the navigation
const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    goBack: mockGoBack,
  }),
}));

// Mock the route params
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useRoute: () => ({
    params: {
      id: '1',
      title: 'Test Post 1',
      type: 'posts',
    },
  }),
}));

// Mock the translation
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('DetailView', () => {
  beforeAll(() => mockPostServer.listen());
  afterEach(() => mockPostServer.resetHandlers());
  afterAll(() => mockPostServer.close());

  it('renders detail information', async () => {
    render(
      <NavigationContainer>
        <DetailView />
      </NavigationContainer>,
    );

    // Check if title is rendered
    expect(screen.getByText('Test Post 1')).toBeTruthy();

    // Check if back button is rendered
    expect(screen.getByText('detail.back-btn')).toBeTruthy();
  });

  it('handles back button press', () => {
    render(
      <NavigationContainer>
        <DetailView />
      </NavigationContainer>,
    );

    const backButton = screen.getByText('detail.back-btn');
    fireEvent.press(backButton);

    expect(mockGoBack).toHaveBeenCalled();
  });
});
