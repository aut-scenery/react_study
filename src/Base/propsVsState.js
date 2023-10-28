import React from "react";

class Child extends React.Component {
  render () {
    return (
      <div>
        child-{this.props.text}
        <button onClick = {() => {
          this.props.text = '333333'
        }}>click-子</button>
      </div>
    )
  }
}

export default class PropsVsState extends React.Component {
  state = {
    text: '1111111'
  }
  render () {
    return (
      <div>
        <button onClick={() => {
          this.setState({ text: '2222222' });
        }}>click-父</button>
        <Child text={this.state.text} />
      </div>
    )
  }
}