import React, { Component } from 'react'

export default class Center extends Component {
  render() {
    return (
      <div>
        <div onClick={
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
