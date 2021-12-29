import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import { HomeOutlined, UserOutlined, AppstoreOutlined, DownOutlined } from '@ant-design/icons';

import styles from './index.less';

import withRouter from '@/common/withRouter';

const { Header, Sider, Content } = Layout;

class MainFrame extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: window.location.hash.substr(1),
    };
  }

  sliderMenus = [
    { key: '/', name: '首页2', icon: <HomeOutlined /> }, //
    { key: '/banner', name: '焦点图管理', icon: <AppstoreOutlined /> },
  ];

  onMenuItemClick = (e) => {
    const activeKey = e.key;
    // this.setState({
    //   activeKey,
    // });

    // let navigate = useNavigate();
    // console.log('🚀 ~ MainFrame ~ navigate', navigate);
    // history.push(activeKey);
    // location.hash = activeKey;

    console.log('🚀 ~ MainFrame ~ activeKey', activeKey);
    this.props.navigate(activeKey);
  };

  renderUserMenu = () => {
    return (
      <Menu>
        <Menu.Item key="1">退出</Menu.Item>
      </Menu>
    );
  };

  render() {
    const { activeKey } = this.state;
    console.log('🚀 ~ MainFrame ~ render ~ this.props', this.props);
    return (
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <div className={styles.logo}>{AppUtils.config('title')}</div>
          <div className={styles.userInfo}>
            <Avatar icon={<UserOutlined />} />
            <Dropdown overlay={this.renderUserMenu()} trigger={['click']}>
              <div className={styles.userName}>
                <span>admin</span>
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

export default withRouter(MainFrame);
