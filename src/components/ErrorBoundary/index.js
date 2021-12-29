import React from 'react';
import PropTypes from 'prop-types';
import CrashMessage from '@/components/CrashMessage';

class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  componentDidCatch(error, info) {
    // Error object may be undefined (IE?)
    // eslint-disable-next-line no-param-reassign
    error = error || {
      stack: 'Unknown stack',
      message: 'Unknown error',
    };

    // Display fallback UI
    this.setState({
      hasError: true,
      error,
    });
  }

  handleBack() {}

  handleReload() {
    window.location.reload();
  }

  render() {
    const { hasError, error } = this.state;
    if (hasError) {
      return <CrashMessage error={error} onReload={this.handleReload} onBack={this.handleBack} />;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
