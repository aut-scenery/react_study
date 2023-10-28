import React from 'react';
import BScroll from '@better-scroll/core'

export default class BetterScrollA extends React.Component {
  state = {
    list: []
  }

  render() {
    return (
      <div>
        <button onClick={() => this.getData()}>click</button>
        <div className='wrapper' style={{ height: 200, background: 'yellow', overflow: 'hidden'}}>
          <ul className='content'>
            {
              this.state.list.map(item => <li key={item}>{item}</li>)
            }
          </ul>
        </div>
      </div>
    )
  }

  getData() {
    const numList = [];
    for (let i = 0; i < 20; i++) {
      numList.push(i)
   }
   this.setState({
    list: numList
   }, () => {
    console.log(document.querySelectorAll('li'))
    let wrapper = document.querySelector('.wrapper')
    console.log(wrapper)
    new BScroll(wrapper)
   })
  }
}