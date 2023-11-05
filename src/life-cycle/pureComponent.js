import React, { PureComponent } from 'react'

// 如果state或props永远都会变, 那PureComponent并不会比较快，因为shallowEqual也需要花时间
export default class PureComponentName extends PureComponent {
  state = {
    name: '张三'
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  render() {
    console.log('render')
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
