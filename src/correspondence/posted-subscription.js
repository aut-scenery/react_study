import React, { Component } from 'react'
import axios from 'axios'
import bus from '../units/dep'
import styles from '../css/film.module.css'
// 发布订阅模式
class FilmDetail extends Component {
  constructor () {
    super()
    this.state = {
      info: ''
    }
    bus.subscribe((info) => {
       this.setState({
        info: info
       })
    })
  }
  render () {
    return (
      <div className={styles.filmdetail}>
        { this.state.info }
      </div>
    )
  }
}

class FilmItem extends Component {
  render () {
    let { name, poster, grade, synopsis } = this.props
    return (
      <div className={styles.filmItem} onClick={() => {
        // console.log(synopsis)
        bus.publist(synopsis)
      }}>
        <img src={poster} alt={name}></img>
        <h4>{name}</h4>
        <div>观众评分: {grade}</div>
      </div>
    )
  }
}

export default class PostedSubscription extends Component {

  constructor () {
    super()
    this.state = {
      filmList: [], // 电影列表
    }
    axios.get('/data.json').then(res => {
      console.log(res)
      this.setState({
        filmList: res.data.data.films
      })
    })
  }

  render() {
    return (
      <div>
        {
          this.state.filmList.map(item => <FilmItem key={item.filmId} {...item}></FilmItem>)
        }
        <FilmDetail></FilmDetail>
      </div>
    )
  }
}
