import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.less';

class Page extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { error } = this.props;
    return <div className={styles.page}>Error: {error.message}</div>;
  }
}

Page.propTypes = {
  error: PropTypes.object,
  onReload: PropTypes.func,
  onBack: PropTypes.func,
};

Page.defaultProps = {};

export default Page;
