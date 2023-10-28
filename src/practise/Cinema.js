import React from "react";
import axios from "axios";
import '../css/cinema.css'

export default class Film extends React.Component {
  constructor () {
    super();
    this.state = {
      cinemaList: [], // 影院列表
      copyCinemaList: [] // 备份
    }
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=496102',
      method: 'GET',
      headers: {
        'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"1695519505618423751016449"}',
        'X-Host':'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.setState({
        cinemaList: res.data.data.cinemas,
        copyCinemaList: res.data.data.cinemas
      })
    }).catch(err => {
      console.log(err);
    })
  }
  
  handlerInput = (event) => {
    const newlist = this.state.copyCinemaList.filter(item => item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
    item.address.toUpperCase().includes(event.target.value.toUpperCase()));
    this.setState({
      cinemaList: newlist
    })
  }

  render () {
    return (
      <div>
        <input onInput={this.handlerInput} />
        {
           this.state.cinemaList.map(item => 
            <dl key={item.cinemaId}>
              <dt>{item.name}</dt>
              <dd>{item.address}</dd>
            </dl>)
        }
      </div>
    )
  }
}