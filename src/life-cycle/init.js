import React, { Component } from 'react'
// 初始化阶段生命周期  只会执行一次
export default class Init extends Component {
  // 组件挂载前调用
  componentWillMount () {
    // 初始化数据
    console.log('willMount')
  }
  // 组件挂载后（插入 DOM 树中）立即调用
  componentDidMount () {
    // 数据请求axios
    // 操作 dom 类似于vue中的mounted
    // 订阅函数调用等
    console.log('didMount')
  }

  render() {
    console.log('render')
    return (
      <div>init</div>
    )
  }
}
