import React, { Component } from 'react'
import axios from 'axios'
import styles from '../css/film.module.css'
// 中间人模式
class FilmDetail extends Component {
  render () {
    return (
      <div className={styles.filmdetail}>
        {this.props.info}
      </div>
    )
  }
}

class FilmItem extends Component {
  render () {
    console.log(this.props)
    let { name, poster, grade, synopsis } = this.props
    return (
      <div className={styles.filmItem} onClick={() => {
        console.log(synopsis)
        this.props.onEvent(synopsis)
      }}>
        <img src={poster} alt={name}></img>
        <h4>{name}</h4>
        <div>观众评分: {grade}</div>
      </div>
    )
  }
}

export default class Intermediator extends Component {

  constructor () {
    super()
    this.state = {
      filmList: [], // 电影列表
      info: '' // 详情
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
          this.state.filmList.map(item => <FilmItem key={item.filmId} {...item} onEvent={
            (value) => {
              this.setState({
                info: value
              })
            }
          }></FilmItem>)
        }
        <FilmDetail info={this.state.info}></FilmDetail>
      </div>
    )
  }
}
