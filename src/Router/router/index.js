import React, { Component } from 'react'
import { Route, HashRouter, Redirect, Switch } from 'react-router-dom'
import Film from '../views/film'
import Cinema from '../views/cinema'
import Center from '../views/center'
import Detail from '../views/detail'
import NotFound from '../views/NotFound'

export default class Index extends Component {
  render() {
    return (
      <HashRouter>
        { this.props.children}
        <Switch>
          <Route path="/film" component={Film}></Route>
          <Route path="/cinema" component={Cinema}></Route>
          <Route path="/center" component={Center}></Route>
          {/* /detail/1111  动态路由 */}
          {/* <Route path="/detail/:id" component={Detail}></Route> */}
          <Route path="/detail" component={Detail}></Route>
          {/* 模糊匹配 */}
          <Redirect from="/" to="/film" exact></Redirect>
          {/* 精确匹配 exact */}
          <Route component={NotFound}></Route>
        </Switch>
      </HashRouter>
    )
  }
}
