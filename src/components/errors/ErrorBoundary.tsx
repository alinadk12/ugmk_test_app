import React from 'react';

import CommonError from 'src/pages/errors/CommonError';

type ErrorBoundaryState = {
  hasError: boolean,
};

type ErrorBoundaryProps = {
  children: React.ReactNode,
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <CommonError />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
