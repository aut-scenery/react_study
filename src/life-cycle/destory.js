import React, { Component } from 'react'

class Child extends Component {

  componentDidMount () {
    window.onresize = () => {
      console.log('onresize')
    }
    this.timer = setInterval(() => {
      console.log('111')
    }, 1000);
  }

  // 销毁阶段
  componentWillUnmount () {
     window.onresize = null;
     clearInterval(this.timer);
  }

  render () {
    return (
      <div>
        child
      </div>
    )
  }
}

export default class Destory extends Component {
  state = {
    isChreated: true,
  }
  render() {
    return (
      <div>
        <button onClick={
          () => {
            this.setState({
              isChreated: !this.state.isChreated
            })
          }
        }>click</button>
        { this.state.isChreated ? <Child /> : '已销毁'}
      </div>
    )
  }
}
