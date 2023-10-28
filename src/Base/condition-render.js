import React from 'react';
import '../css/condition-style.css';

export default class ConditionRender extends React.Component {
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
          {/* { !this.state.list.length && <div>暂无待办事项</div>} */}
          <div className={this.state.list.length ? 'hidden' : 'show'}>暂无待办事项</div>
        </div>
      )
  }
}