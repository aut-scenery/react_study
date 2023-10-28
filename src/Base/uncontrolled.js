
import React, { Component } from 'react'

export default class Uncontrolled extends Component {
  myusername = React.createRef()
  render() {
    return (
      <div>
        <h1>登录页</h1>
        {/* 非受控组件将数据存储在DOM中，而不是组件内，这比较类似于传统的HTML表单元素。 */}
        <input type='text' ref={this.myusername} defaultValue="默认值" />
        <button onClick={() => {
          console.log(this.myusername.current.value)
        }}>登录</button>
        <button onClick={() => {
          this.myusername.current.value = ""
        }}>重置</button>
      </div>
    )
  }
}
