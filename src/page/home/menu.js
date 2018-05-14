import  { Menu, Icon, Switch } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import route from './../../route.js'
const SubMenu = Menu.SubMenu;


function itemFnc(item) {
  if(item.children){
    return <SubMenu key={item.key} title={<span>{item.icon?<Icon type={item.icon} />:null}<span>{item.mete.name}</span></span>}>

      { item.children.map((item,key)=>{
         return itemFnc(item)
      })}

    </SubMenu>
  }
  else {

    return  <Menu.Item key={item.key}>
      <Link to={item.path}>
      {item.icon?<Icon  type={item.icon} />:null}
      <span>{item.mete.name}</span>
      </Link>
    </Menu.Item>
  }
}
export default class MenuList extends React.Component {
  state={

  }
  render(){
    return (

      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
        {
          route.map((item,key)=>{
           return itemFnc(item)

            }
          )
        }


      </Menu>

    )
  }

}

