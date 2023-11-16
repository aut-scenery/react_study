import React, { Component } from 'react'
import Tabber from './components/Tabber'
import MRouter from './router'
export default class App extends Component {
  render() {
    return (
      <div>
        <MRouter>
          <Tabber></Tabber>
        </MRouter>
      </div>
    )
  }
}
