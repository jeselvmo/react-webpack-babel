import React from 'react';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import { HomeOutlined, UserOutlined, AppstoreOutlined, DownOutlined } from '@ant-design/icons';
import _ from 'lodash';

import styles from './index.less';

import router from '@/common/router';

const { Header, Sider, Content } = Layout;

class MainLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: window.location.hash.substr(1),
    };
  }

  sliderMenus = [
    { key: '/dashboard', name: '首页2', icon: <HomeOutlined /> }, //
    { key: '/banner', name: '焦点图管理', icon: <AppstoreOutlined /> },
    { key: '/about', name: '焦点图管理', icon: <AppstoreOutlined /> },
  ];

  onMenuItemClick = (e) => {
    const activeKey = e.key;
    console.log('🚀 ~ MainLayout ~ this.props', this.props);
    router.navigate(activeKey + '?id=1', {
      state: {
        type: 2,
      },
    });
  };

  renderUserMenu = () => {
    return (
      <Menu>
        <Menu.Item key="1" onClick={() => router.navigate('/login')}>
          退出
        </Menu.Item>
      </Menu>
    );
  };

  render() {
    const { activeKey } = this.state;
    const { userInfo } = this.props;
    console.log('🚀 ~ MainLayout ~ render ~ userInfo', userInfo);
    return (
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <div className={styles.logo}>react-webpack-babel</div>
          <div className={styles.userInfo}>
            <Avatar icon={<UserOutlined />} />
            <Dropdown overlay={this.renderUserMenu()} trigger={['click']}>
              <div className={styles.userName}>
                <span>{_.get(userInfo, 'name')}</span>
                <DownOutlined />
              </div>
            </Dropdown>
          </div>
        </Header>
        <Layout className={styles.siderLayout}>
          <Sider theme="light" trigger={null}>
            <Menu theme="light" mode="inline" defaultSelectedKeys={[activeKey]} onClick={this.onMenuItemClick}>
              {this.sliderMenus.map((menu) => (
                <Menu.Item key={menu.key} icon={menu.icon}>
                  {menu.name}
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Content className={styles.content}>
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

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
