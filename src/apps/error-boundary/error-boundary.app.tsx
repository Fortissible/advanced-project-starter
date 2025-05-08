// #region IMPORTS
import { classed } from '@tw-classed/react';
import { Component, type PropsWithChildren } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// #endregion

// #region PROP TYPES
type ErrorBoundaryProps = PropsWithChildren;
// #endregion

// #region STATE TYPE
type ErrorBoundaryState = {
  hasError: boolean;
};
// #endregion

// #region CONSTANTS
const componentName = 'error-boundary';

export const testIds = {
  restartButton: `${componentName}:restart-button`,
  title: `${componentName}:title`,
};
// #endregion

// #region STYLED COMPONENTS
const Container = classed(SafeAreaView, `bg-grey-50 flex-1`);

const Title = classed(Text, 'text-center text-xl font-bold text-red-600 mb-4');

const Message = classed(Text, 'text-center text-base text-gray-700 mb-8');

const RestartButton = classed(
  TouchableOpacity,
  'mx-auto px-6 py-3 bg-red-500 rounded-full',
);

const RestartButtonText = classed(Text, 'text-white text-base font-semibold');
// #endregion

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return {
      hasError: true,
    };
  }

  /**
   * Catches exceptions generated in descendant components. Unhandled exceptions will cause the entire component tree to unmount.
   */
  componentDidCatch(): void {
    // TODO: log error to sentry
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <Container>
          <View
            className={`flex-1 bg-grey-50 flex flex-col`}
            style={{
              paddingTop: (150 / 844) * Dimensions.get('screen').height,
            }}
          >
            <Title>Something went wrong</Title>
            <Message>
              An unexpected error has occurred. Please try restarting the app.
            </Message>
            <RestartButton onPress={() => this.setState({ hasError: false })}>
              <RestartButtonText>Try Again</RestartButtonText>
            </RestartButton>
          </View>
        </Container>
      );
    }

    return children;
  }
}
