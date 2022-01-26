import React from 'react';
import { connect } from 'react-redux';
import { Button, Space } from 'antd';

import styles from './index.less';

import router from '@/common/router';
import Page from '@/components/Page';
import PlayIcon from '@/components/PlayIcon';
import { setUserInfo } from '@/store/reducers/user';

/**
 * 焦点图管理
 */
class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLogin = () => {
    this.props.onSetUserInfo({
      id: 1,
      name: 'admin',
    });
    router.navigate('/');
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

const mapStateToProps = (state) => ({
  userInfo: state.user.info,
});

const mapDispatchToProps = (dispatch) => ({
  onSetUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
