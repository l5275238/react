import { Layout, Icon } from 'antd';
import React, { Component } from 'react';
import MenuList from './menu.js'
import './home.css';
const { Header, Sider, Content } = Layout;


export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    console.log(1);
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout style={{height: '100%'}}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
         <MenuList/>

        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: "10px" }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

