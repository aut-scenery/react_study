import React, { Component } from 'react'

class Navbar extends Component {
  render () {
    return (
      <div style={{
        backgroundColor: 'yellow'
      }}>
        <button onClick={
          () => {
            this.props.event()
          }
        }>click</button>
        navbar
      </div>
    )
  }
}

class Siderbar extends Component {
  render () {
    return (
      <div style={{
        backgroundColor: 'green'
      }}>
        <ul>
          <li>siderbar</li>
          <li>siderbar</li>
          <li>siderbar</li>
          <li>siderbar</li>
        </ul>
      </div>
    )
  }
}

export default class FatherAndSon extends Component {
  state = {
    ishow: true
  }
  handlerEvent = () => {
    this.setState({
      ishow: !this.state.ishow
    })
  }
  render() {
    return (
      <div>
        <Navbar event={this.handlerEvent} />
        { this.state.ishow && <Siderbar /> }
      </div>
    )
  }
}
/**
 * 父传子: 属性
 * 子传父: 回调函数 callback
 */