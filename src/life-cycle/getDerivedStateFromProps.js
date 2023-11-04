import React, { Component } from 'react'

export default class GetDerivedStateFromProps extends Component {

  state = {
     name: '张三',
     age: 12
  }
  //  初始化、数据更新、父传子中都会调用
  // 用于代替componentWillMount和componentWillReceiveProps
  static getDerivedStateFromProps (nextProps, nextState) {
    console.log('getDerivedStateFromProps')
    console.log(nextProps, nextState)
    return {
       name: '李四'
    }
  }

  render() {
    return (
      <div>
        <button onClick={
          () => {
            this.setState({
              name: '王五'
            })
          }
        }>click</button>
        <p>name-{ this.state.name }</p>
        <p>age-{ this.state.age }</p>
      </div>
    )
  }
}
