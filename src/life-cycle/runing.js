import React, { Component } from 'react'

export default class Runing extends Component {
  state = {
    msg: 'abc'
  }
  // 会在更新前调用
  componentWillUpdate () {
    console.log('will update')
  }
  // 会在更新后会被立即调用
  componentDidUpdate (prevProps, prevState) {
    console.log(prevProps)
    console.log(prevState)
    console.log('did update')
  }

  render() {
    console.log('render')
    return (
      <div>
        <button onClick={() => {
          this.setState({
            msg: 'ABC'
          })
        }}>click</button>
        { this.state.msg }
      </div>
    )
  }
}
