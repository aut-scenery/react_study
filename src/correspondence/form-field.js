import React, { Component } from 'react'

class Field extends Component {
  render () {
    return (
      <div style={{
        backgroundColor: 'yellow'
      }}>
        <label>{ this.props.label }</label>
        <input type={this.props.type} onChange={(evt) => {
          this.props.onChange(evt.target.value)
        }} value={this.props.value} ></input>
      </div>
    )
  }
}

export default class FormField extends Component {

  state = {
     username: '123', // 用户名
     password: '', // 密码
  }

  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <Field label="用户名" type='text' onChange={
          (value) => {
             this.setState({
              username: value
             })
          }
        } value={this.state.username}></Field>
        <Field label="密码" type="password" onChange={
          (value) => {
            this.setState({
              password: value
            })
          }
        } value={this.state.password}></Field>
        <button onClick={
          () => {
            console.log(this.state)
          }
        }>登录</button>
        <button onClick={
          () => {
            this.setState({
               username: '',
               password: '',
            })
          }
        }>取消</button>
      </div>
    )
  }
}
