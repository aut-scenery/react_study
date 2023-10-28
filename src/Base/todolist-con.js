import React from "react";

export default class TodolistCon extends React.Component {
  state = {
    mytext: '', // 输入框中的值
    list: [
      {
        id: 1,
        text: 'aaa',
        isChecked: true
      },
      {
        id: 2,
        text: 'bbb',
        isChecked: false
      },
      {
        id: 3,
        text: 'ccc',
        isChecked: false
      }
    ]
  }

  // 增加操作
  handlerClick () {
    let newList = this.state.list.slice()
    newList.push({
      id: Math.random() * 10000,
      text: this.state.mytext,
      isChecked: false
    })
    this.setState({
      list: newList
    })
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

  // 改变list的状态
  handlerChecked = (index) => {
    console.log(index)

    let newList = [...this.state.list]
    newList[index].isChecked = !newList[index].isChecked
    this.setState({
      list: newList
    })
  }
  render() {
    return (
      <div>
        <input value={this.state.mytext} onChange={
          (evt) => {
            this.setState({
              mytext: evt.target.value
            })
          }
        } />
        <button onClick={() => {
          this.handlerClick();
        }}>Add</button>
        <ul>
          {
            this.state.list.map((item, index) => (<li key={item.id}>
              <input type='checkbox' checked={item.isChecked} onChange={() => this.handlerChecked(index)} />
              <span style={
                {
                  textDecoration: item.isChecked ? 'line-through' : '',
                }
              }>
               { item.text }
              </span>
            <button onClick={
              this.handlerDeleteClick.bind(this, index)
            }>delete</button></li>))
          }
        </ul>
      </div>
    )
  }
}