import React, { Component } from 'react'
import axios from 'axios'

export default class Comingsoon extends Component {

  componentDidMount() { 
     axios({
       url: 'ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=FE71A8B08F3E11EE971739C01C8C0416AFEB517409A941DB9F74B5B1FCD05C33&optimus_risk_level=71&optimus_code=10'
     }).then(res => {
       console.log(res)
     })
   }

  render() {
    return (
      <div>Comingsoon</div>
    )
  }
}
