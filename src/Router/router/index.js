import React, { Component } from 'react'
import { Route, HashRouter } from 'react-router-dom'
import Film from '../views/film'
import Cinema from '../views/cinema'
import Center from '../views/center'

export default class Index extends Component {
  render() {
    return (
      <HashRouter>
        <Route path="/film" component={Film}></Route>
        <Route path="/cinema" component={Cinema}></Route>
        <Route path="/center" component={Center}></Route>
      </HashRouter>
    )
  }
}
