import React from "react";
export default class State extends React.Component {
  state = {
    text: "收藏",
    judgementText: true
  }
  render () {
    return (
      <div>
        <p>react的state的运用</p>
        <button onClick={() => {
          this.setState({
            judgementText: !this.state.judgementText,
            mytest: 111
          });
          console.log(this.state);
          if (this.state.judgementText) {
            console.log("成功收藏")
          } else {
            console.log("取消收藏")
          }
        }}>{ this.state.judgementText ? "取消收藏" : "收藏"}</button>
      </div>
    )
  }
}