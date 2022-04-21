import React from 'react';
import { connect } from 'react-redux';
import { Button, Space } from 'antd';
import router from '@/common/router';
import Page from '@/components/page';
import PlayIcon from '@/components/play-icon';
import { setUserInfo } from '@/store/reducers/user';
import './index.less';

const classPrefix = 'g-login-page';

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
      <Page className={classPrefix} title="Login">
        <Space direction="vertical">
          <div>
            <PlayIcon className="icon" />
          </div>
          <img src={require('@/images/logo.png')} alt="" />
          <Button type="primary" onClick={this.onLogin}>
            登录
          </Button>
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
