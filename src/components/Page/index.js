import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Layout, PageHeader } from 'antd';
import './index.less';

const { Content } = Layout;

const classPrefix = 'g-page';

class Page extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { className, title, extra, children } = this.props;
    return (
      <Layout className={classNames(classPrefix, className)}>
        <PageHeader className={`${classPrefix}-header`} title={title} extra={extra} />
        <Content className={`${classPrefix}-content`}>{children}</Content>
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
