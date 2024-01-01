import React, { Component } from 'react'
import '../css/public.css';
import Tabber from './components/Tabber'
import store from './redux/store'
import MRouter from './router'

export default class App extends Component {
  
  state = {
    isShow: store.getState().show
  }

  componentDidMount() { 
    store.subscribe(() => {
      console.log(store.getState().show);
      this.setState({
        isShow: store.getState().show
      })
    })
  }

  render() {
    return (
      <div>
        <MRouter>
          { this.state.isShow && <Tabber></Tabber> }
        </MRouter>
      </div>
    )
  }
}
