import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { DatePicker } from 'antd';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import SiderDemo from './page/home/home'
// import Login from 'page/login/login'
import MRoute from 'page/route/route'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './index.css'

ReactDOM.render(
  <MRoute></MRoute>

  ,
  document.getElementById('root')
)
