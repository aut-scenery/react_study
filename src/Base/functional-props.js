import React, { Component } from 'react'
import Sidebar from '../components/sidebar'

export default class FunctionalProps extends Component {
  render() {
    return (
      <div>
        <Sidebar bg="yellow" position="left"></Sidebar>
      </div>
    )
  }
}
