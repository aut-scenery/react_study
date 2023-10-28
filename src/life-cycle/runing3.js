import React, { Component } from 'react'

class Child extends Component {
  state = {
    title: ''
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps', nextProps)
    // 最先获得父组件传来的属性,可以利用属性进行ajax或者逻辑处理
    // 把属性转化成孩子自己的状态
    this.setState({
      title: nextProps.title + 'aaa'
    })
  }

  render() {
    return (
      <div>
        child-{this.state.title}
      </div>)
}
}

export default class Runing3 extends Component {
    state = {
      title: '123'
    }
    render () {
      return (
        <div>
          <button onClick={() => {
            this.setState({title: '456'});
          }}>{this.state.title}</button>
          <Child title={this.state.title}></Child>
        </div>
      )
    }
}
