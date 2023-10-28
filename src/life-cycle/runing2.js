import React, { Component } from 'react'

export default class Runing2 extends Component {
  state = {
    name: '张三'
  }
  shouldComponentUpdate(nextProps, nextState) {
    // return true; // 应该更新
    // return false; // 阻止更新
    // this.state   老的状态
    // nextState    新的状态
    if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
      return true
    }
    return false
  }
  componentDidUpdate() {
    console.log('didUpdate')
  }
  render() {
    return (
      <div>
        <button onClick={
          () => {
            this.setState({
              name: '李四'
            })
          }
        }>click</button>
        { this.state.name }
      </div>
    )
  }
}
