import React from 'react';

export default class EventBinding1 extends React.Component { 
  render() {
    return (
      <div>
        <input type='text' />
        <button onClick={ () => {
          console.log('click1') 
        } }>click1</button>
        <button onClick={ this.handleClick2 }>click2</button>
        <button onClick={ this.handleClick3 }>click3</button>
        <button onClick={ () => {
          this.handleClick4();
        } }>click2</button>
      </div>
    )
  }
  handleClick2 () {
    console.log('click2');
  }
  handleClick3 = () => {
    console.log('click3');
  };
  handleClick4 = () => {
    console.log('click4');
  }
}