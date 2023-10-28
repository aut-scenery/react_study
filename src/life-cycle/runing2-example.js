import React, { Component } from 'react'

class Box extends Component {
  
  shouldComponentUpdate (nextProps) {
    if (this.props.current === this.props.index || nextProps.current === nextProps.index) {
      return true;
    }
    return false;
  }

  render () {
    console.log('render')
    return (
      <div style={{
        width: 100,
        height: 100,
        border: this.props.current === this.props.index ? '1px solid red' : '1px solid gray',
        margin: 10,
        float: 'left',
      }}></div>
    )
  }
}

export default class Runing2Example extends Component {
  state = {
    list: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
    current: 0
  }
  render() {
    return (
      <div>
        <input type='number' onChange={
          (evt) => {
            this.setState({
              current: Number(evt.target.value)
            })
          }
        } value={this.state.current} />
        <div style={{overflow: 'hidden'}}>
          {
            this.state.list.map((item, index) => 
              <Box key={item} current={this.state.current} index={index} />
            )
          }
        </div>
      </div>
    )
  }
}
