import React, { Component } from 'react'
import axios from 'axios'

class FilmList extends Component {
  state = {
    list: []
  }

  componentDidMount () {
    if (this.props.type === 1) {
       axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4943226',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1695519505618423751016449","bc":"110100"}',
          'X-Host':'mall.film-ticket.film.list'
        }
       }).then(res => {
        console.log(res)
        this.setState({
          list: res.data.data.films
        })
       })
    } else {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=1986271',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1695519505618423751016449","bc":"110100"}',
          'X-Host':'mall.film-ticket.film.list'
        }
       }).then(res => {
        console.log(res)
        this.setState({
          list: res.data.data.films
        })
       })
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.type === 1) {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4943226',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1695519505618423751016449","bc":"110100"}',
          'X-Host':'mall.film-ticket.film.list'
        }
       }).then(res => {
        console.log(res)
        this.setState({
          list: res.data.data.films
        })
       })
    } else {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=1986271',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1695519505618423751016449","bc":"110100"}',
          'X-Host':'mall.film-ticket.film.list'
        }
       }).then(res => {
        console.log(res)
        this.setState({
          list: res.data.data.films
        })
       })
    }
  }
  render () {
    return (
      <ul>
        {
          this.state.list.map(item => <li key={item.filmId}>{item.name}</li>)
        } 
      </ul>
    )
  }
}

export default class Runing3Example extends Component {
  state = {
    type: 1
  }
  render() {
    return (
      <div>
        <ul>
          <li onClick={() => {
            this.setState({
              type: 1
            })
          }}>正在热映</li>
          <li onClick={() => {
            this.setState({
              type: 2
            })
          }}>即将上映</li>
        </ul>
       <FilmList type={this.state.type}></FilmList>
      </div>
    )
  }
}
