import React from 'react';

export default class EventBinding1 extends React.Component {
  a = 100
  render() {
    return (
      <div>
        <input type='text' />
        <button onClick={ () => {
          console.log('click1', this.a) 
        } }>click1</button>
        <button onClick={ 
          // 需要通过bind改变this指向
          this.handleClick2.bind(this)
           }>click2</button>
        <button onClick={ 
          // 没法传参
          this.handleClick3
         }>click3</button>
        <button onClick={ () => {
          // 符合谁调用this指向谁
          this.handleClick4();
        } }>click2</button>
      </div>
    )
  }
  handleClick2 () {
    console.log('click2', this.a);
  }
  handleClick3 = () => {
    console.log('click3', this.a);
  };
  handleClick4 = () => {
    console.log('click4', this.a);
  }
}