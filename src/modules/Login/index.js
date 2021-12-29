import React from 'react';
import { Button } from 'antd';

import styles from './index.less';

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
    routerHistory.push('/about');
  };

  render() {
    return (
      <Page title="Login">
        <div>
          <PlayIcon className={styles.icon} />
        </div>
        <Button onClick={this.onLogin}>登录</Button>
      </Page>
    );
  }
}

export default Login;
