import React, { Component } from 'react'
import axios from 'axios'
import styles from '../css/film.module.css'
// 生产消费模式
const GlobalContext = React.createContext()
class FilmDetail extends Component {
  render () {
    return (
      <GlobalContext.Consumer>
        {
          (value) => {
             return (
              <div className={styles.filmdetail}>
                {
                  value.info
                }
              </div>
            )
          }
        }
      </GlobalContext.Consumer>
      
    )
  }
}

class FilmItem extends Component {
  render () {
    let { name, poster, grade, synopsis } = this.props
    return (
      <GlobalContext.Consumer>
        {
          (value) => {
             return (
              <div className={styles.filmItem} onClick={() => {
                value.changeInfo(synopsis)
              }}>
                <img src={poster} alt={name}></img>
                <h4>{name}</h4>
                <div>观众评分: {grade}</div>
              </div>
             )
          }
        }
      
      </GlobalContext.Consumer>
    )
  }
}

export default class Intermediator extends Component {

  constructor () {
    super()
    console.log('context')
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
    <GlobalContext.Provider value={{
      info: this.state.info,
      changeInfo: (value) => {
        this.setState({
          info: value
        })
      }
    }}>
      <div>
        {
          this.state.filmList.map(item => <FilmItem key={item.filmId} {...item}></FilmItem>)
        }
        <FilmDetail></FilmDetail>
      </div>
    </GlobalContext.Provider>
    )
  }
}
