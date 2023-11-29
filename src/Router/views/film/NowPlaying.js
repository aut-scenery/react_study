import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function NowPlaying(props) {

  const [list, setList] = useState([])

  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=2152835',
      method: 'GET',
      headers: {
      'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"1695519505618423751016449","bc":"110100"}',
      'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res)
      setList(res.data.data.films)
    })
  }, [])

  const history = useHistory()
  const handleChangePage = (id) => {
    // 第一种传参方式  动态路由
    // history.push(`/detail/${id}`)
    // 第二种传参方式  query传参
    // history.push({
    //   pathname: '/detail',
    //   query: {id: id}
    // })
    // 第三种传参方式  state传参
    history.push({
      pathname: '/detail',
      state: {id}
    })
    // console.log(props)
    // props.history.push(`/detail/${id}`)
  }

  return (
    <div>
      <ul>
        {
          list.map(item => <li key={item.filmId} onClick={() => handleChangePage(item.filmId)}>
            { item.name }
          </li>)
        }
      </ul>
    </div>
  )
}
