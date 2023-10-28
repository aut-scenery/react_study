import React, { Component } from 'react'

export default class Controlled extends Component {
  state = {
    username: 'kerwin'
  }
  render() {
    return (
      <div>
        <h1>登录页</h1>
        {/* 受控组件通过props获取其当前值，并通过回调函数(比如onChange)通知变化
        表单状态发生变化时，都会通知React，将状态交给React进行处理，比如可以使用useState存储
        受控组件中，组件渲染出的状态与它的value或checked属性相对应
        受控组件会更新state的流程 */}
        {/* 推荐使用受控组件 */}
        <input type="text" value={this.state.username}
          onChange={(evt) => {
            console.log(evt.target.value)
            this.setState({username: evt.target.value})
          }} />
        <button onClick={() => {
          console.log(this.state.username)
        }}>登录</button>
        <button onClick={
          () => {
            this.setState({username:"" })
          }
        }>重置</button>
      </div>
    )
  }
}
