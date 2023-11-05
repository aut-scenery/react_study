import React, { Component } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/swiper-bundle.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Swiper.use([Navigation, Pagination])

export default class SwiperOne extends Component {
  state = {
    list: ['111', '222', '333', '444']
  }
  componentDidMount() { 
    new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      pagination: {
        el: '.swiper-pagination',
      },
    })
   }
  render() {
    return (
      <div>
        <div className="swiper" style={{
          height: '200px',
          backgroundColor: 'yellow'
        }}>
          <div className="swiper-wrapper">
            {
              this.state.list.map(item => <div className="swiper-slide" key={ item }>{ item }</div>)
            }
          </div>
          {/* 分页器 */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}
