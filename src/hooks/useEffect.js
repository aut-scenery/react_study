import React, { useEffect, useState } from 'react'
import axios from 'axios'
// 副作用函数，相当于vue中的生命周期
export default function UseEffect() {
  const [list, setList] = useState([])
  useEffect(() => {
    axios.get('/data.json').then(res => {
      console.log(res.data)
      setList(res.data.data.films)
    })
  }, [])
  return (
    <div>
      <ul>
        {
           list.map((item) => <li key={item.filmId}>{ item.name }</li>)
        }
      </ul>
      
    </div>
  )
}
