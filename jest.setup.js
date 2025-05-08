import '@testing-library/jest-native/extend-expect';
import jest from 'jest';

// Mock react-native-mmkv
jest.mock('react-native-mmkv', () => ({
  MMKV: jest.fn().mockImplementation(() => ({
    getString: jest.fn(),
    set: jest.fn(),
    delete: jest.fn(),
  })),
}));

// Mock expo-constants
jest.mock('expo-constants', () => ({
  default: {
    expoConfig: {
      extra: {
        dummyJsonBaseUrl: 'https://dummyjson.com',
        fakeApiStoreBaseUrl: 'https://fakestoreapi.com',
        env: 'test',
      },
    },
  },
}));
