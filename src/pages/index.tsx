import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React from 'react';
const { Header, Content, Footer, Sider } = Layout;
import { history } from 'umi';
import { Route } from '@umijs/core';
const { SubMenu } = Menu;
import '../styles/index.css';

class Layouts extends React.Component {
  state = {};

  routeToReq = () => {
    history.push('/requests');
  };
  routeToOrg = () => {
    history.push('/organizations');
  };
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <div className="logo">
            <img src={require('../static/glimmer.png')} />
            <h1 className="welcome">欢迎使用管理员系统</h1>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="vertical">
            <Menu.Item
              key="1"
              icon={<PieChartOutlined />}
              onClick={this.routeToReq}
            >
              查看需求
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<DesktopOutlined />}
              onClick={this.routeToOrg}
            >
              查看组织
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
          <Content style={{ margin: '0 16px' }}>
            <div>{this.props.children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>GlimmerStudio @2021</Footer>
        </Layout>
      </Layout>
    );
  }
}
//@ts-ignore
export default Layouts;
