import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../css/film.module.css'
// 生产消费模式
const GlobalContext = React.createContext()
function FilmDetail() {
  const value = useContext(GlobalContext)
  return (
    <div className={styles.filmdetail}>
      {
        value.info
      }
    </div>
  )
}

function FilmItem (props) {
  let { name, poster, grade, synopsis } = props
  const value = useContext(GlobalContext)
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

export default function UseContext () {
  const [filmList, setFilmList] = useState([])
  const [info, setInfo] = useState('')
  useEffect(() => {
    axios.get('/data.json').then(res => {
      console.log(res)
      setFilmList(res.data.data.films)
    })
  }, [])
  return (
    <GlobalContext.Provider value={{
      info: info,
      changeInfo: (value) => {
        setInfo(value)
      }
    }}>
      <div>
        {
          filmList.map(item => <FilmItem key={item.filmId} {...item}></FilmItem>)
        }
        <FilmDetail></FilmDetail>
      </div>
    </GlobalContext.Provider>
    )
}
