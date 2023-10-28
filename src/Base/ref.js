import React from "react";
export class Ref extends React.Component {
  myref = React.createRef()
  render() {
    return (
      <div>
        {/* <input ref="username" /> */}
        <input ref={this.myref} />
        <button onClick={ () => {
          // console.log("click", this.refs.username.value)
          console.log(this.myref.current.value)
        }}>按钮</button>
      </div>
    )
  }
}

export default Ref