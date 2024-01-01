import React, { Component } from 'react'

export default class Center extends Component {
  render() {
    return (
      <div>
        <div className='myglobal' onClick={
          () => {
            this.props.history.push('/filmorder')
          }
        }>
          电影订票
        </div>
      </div>
    )
  }
}
