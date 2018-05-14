import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {parentRoute} from '@/route.js'

class MRoute extends Component {
  render() {
    return (
      <Router >
        <Switch>
          {
            parentRoute.map((item)=>{
              return <Route exact key={item.key} path={item.path} component={item.component}></Route>
            })
          }
        </Switch>
      </Router>
    );
  }
}

export default MRoute;
