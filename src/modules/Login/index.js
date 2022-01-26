import React from 'react';
import { Button, Space } from 'antd';

import styles from './index.less';

import withRouter from '@/common/withRouter';
import Page from '@/components/Page';
import PlayIcon from '@/components/PlayIcon';
import routerHistory from '@/common/routerHistory';

/**
 * 焦点图管理
 */
class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLogin = () => {
    this.props.navigate('/');
  };

  render() {
    return (
      <Page title="Login">
        <Space direction="vertical">
          <div>
            <PlayIcon className={styles.icon} />
          </div>
          <img src={require('@/images/logo.png')} />
          <img src={'images/logo.png'} />
          <Button onClick={this.onLogin}>登录</Button>
        </Space>
      </Page>
    );
  }
}

export default withRouter(Login);
