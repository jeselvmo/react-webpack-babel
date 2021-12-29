import React, { useContext } from 'react';

import styles from './index.less';

import Page from '@/components/Page';
import PlayIcon from '@/components/PlayIcon';
import { Button } from 'antd';
import withRouter from '@/common/withRouter';
/**
 * 焦点图管理
 */
class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLogin = () => {
    this.props.navigate('/about');
  };

  render() {
    console.log('🚀 ~ Login ~ render ~ this.props', this.props);
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

export default withRouter(Login);
