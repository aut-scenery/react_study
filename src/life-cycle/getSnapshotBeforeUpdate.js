import React, { Component } from 'react'

export default class GetSnapshotBeforeUpdate extends Component {

  state = {
    text: '111'
  }

  render() {
    console.log('render')
    return (
      <div>
        { this.state.text }
        <button onClick={ 
          () => {
            this.setState({ text: '222'});
          }
        }>click</button>
      </div>
    )
  }

  componentDidUpdate (prevProps, prevState, value) {
    // value 为getSnapshotBeforeUpdate返回的值
    console.log('componentDidUpdate', value)
  }

  getSnapshotBeforeUpdate () {
    console.log('getSnapshotBeforeUpdate')
    return 100
  }
}
