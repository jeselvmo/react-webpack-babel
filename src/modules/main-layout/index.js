import React from 'react';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import { HomeOutlined, UserOutlined, AppstoreOutlined, DownOutlined } from '@ant-design/icons';
import _ from 'lodash';

import router from '@/common/router';
import { clearUserInfo } from '@/store/reducers/user';

import './index.less';

const { Header, Sider, Content } = Layout;

const classPrefix = 'g-main-layout';

class MainLayout extends React.PureComponent {
  sliderMenus = [
    { key: '/dashboard', name: '首页', icon: <HomeOutlined /> }, //
    { key: '/about', name: '关于我们', icon: <AppstoreOutlined /> },
    { key: '/swiper-demo', name: 'Swiper测试', icon: <AppstoreOutlined /> },
  ];

  constructor(props) {
    super(props);
    this.state = {
      activeKey: window.location.hash.substr(1),
    };
  }

  onMenuItemClick = (e) => {
    const activeKey = e.key;
    router.navigate(`${activeKey}?id=1`, {
      state: {
        type: 2,
      },
    });
  };

  onLogoff = () => {
    this.props.onClearUserInfo();
    router.navigate('/login');
  };

  renderUserMenu = () => {
    return (
      <Menu>
        <Menu.Item key="1" onClick={this.onLogoff}>
          退出
        </Menu.Item>
      </Menu>
    );
  };

  render() {
    const { activeKey } = this.state;
    const { userInfo } = this.props;
    return (
      <Layout className={classPrefix}>
        <Header className={`${classPrefix}-header`}>
          <div className={`${classPrefix}-logo`}>react-webpack-babel</div>
          <div className={`${classPrefix}-user-info`}>
            <Avatar icon={<UserOutlined />} />
            <Dropdown overlay={this.renderUserMenu()} trigger={['click']}>
              <div className={`${classPrefix}-user-name`}>
                <span>{_.get(userInfo, 'name')}</span>
                <DownOutlined />
              </div>
            </Dropdown>
          </div>
        </Header>
        <Layout className={`${classPrefix}-sider-layout`}>
          <Sider theme="light" trigger={null}>
            <Menu theme="light" mode="inline" defaultSelectedKeys={[activeKey]} onClick={this.onMenuItemClick}>
              {this.sliderMenus.map((menu) => (
                <Menu.Item key={menu.key} icon={menu.icon}>
                  {menu.name}
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Content className={`${classPrefix}-content`}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user.info,
});

const mapDispatchToProps = (dispatch) => ({
  onClearUserInfo: () => dispatch(clearUserInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
