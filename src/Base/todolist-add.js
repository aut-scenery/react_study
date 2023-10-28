import React from "react";

export default class TodolistAdd extends React.Component {
  myref = React.createRef()
  state = {
    list: [
      {
        id: 1,
        text: 'aaa'
      },
      {
        id: 2,
        text: 'bbb'
      },
      {
        id: 3,
        text: 'ccc'
      }
    ]
  }
  
  handlerClick () {
    console.log(this.myref.current.value)
    // 不能直接更改状态，可能会造成不可预期的问题

    // 第一种更改方法
    // let newList = [...this.state.list]
    // newList.push({
    //   id: Math.random() * 10000,
    //   text: this.myref.current.value
    // })

    // 第二种更改方法
    let newList = this.state.list.slice()
    newList.push({
      id: Math.random() * 10000,
      text: this.myref.current.value
    })
    this.setState({
      list: newList
    })
    this.myref.current.value = ''
  }

  render() {
    return (
      <div>
        <input ref={this.myref} />
        <button onClick={() => {
          this.handlerClick();
        }}>Add</button>
        <ul>
          {
            this.state.list.map((item) => (<li key={item.id}>{ item.text }</li>))
          }
        </ul>
      </div>
    )
  }
}