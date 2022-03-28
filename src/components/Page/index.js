import React from 'react';
import PropTypes from 'prop-types';
import { Layout, PageHeader } from 'antd';

import styles from './index.less';

const { Content } = Layout;

class Page extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, extra, children } = this.props;
    return (
      <Layout className={styles.page}>
        <PageHeader className={styles.header} title={title} extra={extra} />
        <Content className={styles.content}>{children}</Content>
      </Layout>
    );
  }
}

Page.propTypes = {
  title: PropTypes.string,
  extra: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Page.defaultProps = {
  title: '',
};

export default Page;
