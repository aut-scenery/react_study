import React from 'react';

export default class SetStateDetail extends React.Component {
  state = {
    count: 1
  }

  render () {
    console.log('render')
    return (
      <div>
        { this.state.count }
        <button onClick={ this.handlerAdd1 }>Add1</button>
        <button onClick={ this.handlerAdd2 }>Add2</button>
      </div>
    )
  }

  handlerAdd1 = () => {
    this.setState({
      count: this.state.count + 1,
    }, () => {
      console.log(this.state.count)
    })
    console.log(this.state.count)
    this.setState({
      count: this.state.count + 1,
    }, () => {
      console.log(this.state.count)
    })
    this.setState({
      count: this.state.count + 1,
    }, () => {
      console.log(this.state.count)
    })
  }

  handlerAdd2 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      });
      console.log(this.state.count)
      this.setState({
        count: this.state.count + 1
      });
      console.log(this.state.count)
      this.setState({
        count: this.state.count + 1
      });
      console.log(this.state.count)
    }, 0);
  }
}