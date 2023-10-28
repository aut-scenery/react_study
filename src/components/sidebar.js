import React from 'react'
import PropsTypes from 'prop-types'

export default function Sidebar(props) {
  let { bg, position } = props
  let obj1 = {
    left: 0
  }
  let obj2 = {
    right: 0
  }
  let obj = {
    backgroundColor: bg,
    width: 200,
    position: 'fixed'
  }
  let styleobj = position === 'left' ? { ...obj1, ...obj } : { ...obj2, ...obj }
  return (
    <div style={styleobj}>
      <ul>
        <li>sidebar</li>
        <li>sidebar</li>
        <li>sidebar</li>
        <li>sidebar</li>
        <li>sidebar</li>
        <li>sidebar</li>
      </ul>
    </div>
  )
}
Sidebar.propTypes = {
  bg: PropsTypes.string,
  position: PropsTypes.string
}
Sidebar.defaultProps = {
  bg: 'white',
  position: 'left'
}