import React, { Component } from 'react'

export default class GSBUExample extends Component {
  state = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  }
  mydiv = React.createRef()
  getSnapshotBeforeUpdate () {
    // 获取容器高度
    console.log(this.mydiv.current.scrollHeight)
    return this.mydiv.current.scrollHeight
  }
  componentDidUpdate(prevProps, prevState, value) {
    console.log(this.mydiv.current.scrollHeight)
    console.log(this.mydiv.current.scrollTop)
    const num = this.mydiv.current.scrollHeight - value
    this.mydiv.current.scrollTop = num + (this.mydiv.current.scrollTop - num)
  }
  render() {
    return (
      <div>
        <button onClick={
          () => {
            this.setState({
              list: [...[16, 17, 18], ...this.state.list]
            })
          }
        }>发送邮件</button>
        <h1>邮箱应用</h1>
        <div style={{
          height: '200px',
          overflow:"auto"
        }} ref = {
          this.mydiv
        }>
          <ul>
            {
              this.state.list.map(item => 
              <li key={item} style={{
                height: '100px',
                backgroundColor: 'yellow'
              }}>
                { item }
              </li>)
            }
          </ul>
        </div>
      </div>
    )
  }
}
