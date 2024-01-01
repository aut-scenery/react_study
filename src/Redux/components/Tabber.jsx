import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Tabber.module.css'

export default class Tabber extends Component {
  render() {
    return (
      <div className={styles.tabber}>
        <ul>
          <li>
            {/* <a href='#/film'>电影</a> */}
            <NavLink to="/film" activeClassName={styles.kwactive}>电影</NavLink>
          </li>
          <li>
            {/* <a href='#/cinema'>影院</a> */}
            <NavLink to="/cinema" activeClassName={styles.kwactive}>影院</NavLink>
          </li>
          <li>
            {/* <a href='#/center'>我的</a> */}
            <NavLink to="/center" activeClassName={styles.kwactive}>我的</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
