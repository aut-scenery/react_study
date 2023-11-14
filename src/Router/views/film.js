import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NowPlaying from './film/NowPlaying'
import Comingsoon from './film/Comingsoon'

export default function Film() {
  return (
    <div>
      <div style={{
        height: '200px',
        backgroundColor: 'yellow'
      }}>
        大轮播
      </div>
      <div>导航栏</div>
      <Switch>
        <Route path="/film/nowplaying" component={ NowPlaying }></Route>
        <Route path="/film/comingsoon" component={ Comingsoon }></Route>
        <Redirect from="/film" to="/film/nowplaying"></Redirect>
      </Switch>
    </div>
  )
}
