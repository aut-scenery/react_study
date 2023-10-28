import React from "react";
import styles from '../css/test.module.css'
console.log(styles)
export default class Film extends React.Component {

  render () {
    return (
      <div className={styles.test}>
        这是电影组件
      </div>
    )
  }
}