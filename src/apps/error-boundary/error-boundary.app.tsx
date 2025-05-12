import React from 'react';

type Props = { children: React.ReactNode };
type State = { hasError: boolean };

export default class ErrorBoundaryApp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidCatch(_: Error, __: React.ErrorInfo): void {
    // TODO: CAPTURE ERROR USING ERROR MONITORING SERVICE LIKE SENTRY OR ETC.
  }

  render(): React.ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div>
          <h1>Oooops! Something wrong happened</h1>
          <button
            data-testid="reload-button"
            onClick={() => window.location.reload()}
            type="button"
          >
            Reload
          </button>
        </div>
      );
    }

    return children;
  }
}
