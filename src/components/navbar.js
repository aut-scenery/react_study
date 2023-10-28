import React from "react";
import PropsTypes from 'prop-types'

export default class Navbar extends React.Component {

  static propTypes = {
    title: PropsTypes.string,
    leftshow: PropsTypes.bool,
  }

  static defaultProps = {
    leftshow: true,
  }

  render () {
    let { title, leftshow } = this.props
    return (
      <div>
        { leftshow && <button>返回</button> }
        navbar-{ title }
        <button>home</button>
      </div>
    )
  }
}

// 类属性
// Navbar.propTypes = {
//   title: PropsTypes.string,
//   leftshown: PropsTypes.bool,
// }

// 默认值
// Navbar.defaultProps = {
//   leftshow: true,
// }