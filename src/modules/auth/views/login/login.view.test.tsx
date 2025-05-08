import { NavigationContainer } from '@react-navigation/native';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import mockPostServer from 'src/test/mocks/server';
import LoginView from './login.view';

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

describe('LoginView', () => {
  beforeAll(() => mockPostServer.listen());
  afterEach(() => mockPostServer.resetHandlers());
  afterAll(() => mockPostServer.close());

  it('renders login form', () => {
    render(
      <NavigationContainer>
        <LoginView />
      </NavigationContainer>,
    );

    expect(screen.getByPlaceholderText('Username')).toBeTruthy();
    expect(screen.getByPlaceholderText('Password')).toBeTruthy();
    expect(screen.getByText('Login')).toBeTruthy();
  });

  it('shows validation errors for empty fields', async () => {
    render(
      <NavigationContainer>
        <LoginView />
      </NavigationContainer>,
    );

    const loginButton = screen.getByText('Login');
    fireEvent.press(loginButton);

    await waitFor(() => {
      expect(screen.getByText('Username is required')).toBeTruthy();
      expect(screen.getByText('Password is required')).toBeTruthy();
    });
  });

  it('handles successful login', async () => {
    render(
      <NavigationContainer>
        <LoginView />
      </NavigationContainer>,
    );

    // Fill in the form
    fireEvent.changeText(screen.getByPlaceholderText('Username'), 'testuser');
    fireEvent.changeText(
      screen.getByPlaceholderText('Password'),
      'password123',
    );

    // Submit the form
    const loginButton = screen.getByText('Login');
    fireEvent.press(loginButton);

    // Wait for success
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  it('handles failed login', async () => {
    render(
      <NavigationContainer>
        <LoginView />
      </NavigationContainer>,
    );

    // Fill in the form with wrong credentials
    fireEvent.changeText(screen.getByPlaceholderText('Username'), 'wronguser');
    fireEvent.changeText(screen.getByPlaceholderText('Password'), 'wrongpass');

    // Submit the form
    const loginButton = screen.getByText('Login');
    fireEvent.press(loginButton);

    // Wait for error message
    await waitFor(() => {
      expect(screen.getByText('Invalid credentials')).toBeTruthy();
    });
  });
});
