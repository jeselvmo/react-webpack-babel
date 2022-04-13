/* eslint-disable global-require */
import React from 'react';
import { connect } from 'react-redux';
import { Button, Space } from 'antd';

import router from '@/common/router';
import Page from '@/components/page';
import PlayIcon from '@/components/play-icon';
import { setUserInfo } from '@/store/reducers/user';

import styles from './index.less';

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
          <img src={require('@/images/logo.png')} alt="" />
          <img src="images/logo.png" alt="" />
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
