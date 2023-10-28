import React from "react";

export default class TodolistDelete extends React.Component {
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

  // 增加操作
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
  
  // 删除操作
  handlerDeleteClick (index) {
    console.log(index)
    // 第三种更改方法
    let newList = this.state.list.concat()
    newList.splice(index, 1)
    this.setState({
      list: newList
    });
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
            this.state.list.map((item, index) => (<li key={item.id}>{ item.text }
            <button onClick={
              this.handlerDeleteClick.bind(this, index)
            }>delete</button></li>))
          }
        </ul>
      </div>
    )
  }
}