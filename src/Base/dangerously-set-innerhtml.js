import React from "react";

export default class DangerouslySetInnerHTML extends React.Component {
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
          <li onClick={() => {
            console.log(123)
          }}>测试事件</li>
          {
            this.state.list.map((item) => (<li key={item.id}>
              <span dangerouslySetInnerHTML={
                {
                  __html: item.text
                }
              }></span>
            </li>))
          }
        </ul>
      </div>
    )
  }
}