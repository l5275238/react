import { Layout, Icon } from 'antd';
import React, { Component } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import MenuList from './menu.js'
import './home.css';
import {route} from './../../route.js'
const { Header, Sider, Content } = Layout;


export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {

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
            <Switch>
              {
                route.map((item)=>{
                  console.log(item);
                  return <Route exact key={item.key} path={item.path} component={item.component} />
                })
              }
            </Switch>
        </Content>
        </Layout>
      </Layout>
    );
  }
}

