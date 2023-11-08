import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import '../css/cinema.css'

export default function UseMemo () {
  const [text, setText] = useState('')
  const [cinemaList, setCinemaList] = useState([])
  useEffect(function () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=496102',
      method: 'GET',
      headers: {
        'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"1695519505618423751016449"}',
        'X-Host':'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      setCinemaList(res.data.data.cinemas)
    }).catch(err => {
      console.log(err);
    })
  }, [])
  const getCinemaList = useMemo(() => cinemaList.filter(item => item.name.toUpperCase().includes(text.toUpperCase()) ||
  item.address.toUpperCase().includes(text.toUpperCase())), [text, cinemaList])
  return (
    <div>
        <input value={text} onChange={(evt) => {
          setText(evt.target.value)
        }} />
        {
           getCinemaList.map(item => 
            <dl key={item.cinemaId}>
              <dt>{item.name}</dt>
              <dd>{item.address}</dd>
            </dl>)
        }
      </div>
  )
}
