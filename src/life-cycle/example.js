import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class Example extends Component {
  state = {
    list: ['1', '2', '3','4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
  }
  componentDidMount () {
     new BetterScroll("#wrapper")
  }

  render() {
    return (
      <div id="wrapper" style={{
        height: '100px',
        backgroundColor: 'yellow',
        overflow: "hidden"
      }}>
        <ul>
          {
            this.state.list.map(item => <li key={item}>{item}</li>)
          }
        </ul>
      </div>
    )
  }
}
