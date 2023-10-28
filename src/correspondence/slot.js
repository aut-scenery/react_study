import React, { Component } from 'react'

class Child extends Component {
  render () {
    return (
      <div>
        child
        { this.props.children[2] }
        { this.props.children[1] }
        { this.props.children[0] }
      </div>
    )
  }
}

export default class Slot extends Component {
  render() {
    return (
      <div>
        <Child>
          <div>111111</div>
          <div>222222</div>
          <div>333333</div>
        </Child>
      </div>
    )
  }
}
