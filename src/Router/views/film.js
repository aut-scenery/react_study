import React from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
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
      <ul>
        <li>
          <NavLink to="/film/nowplaying" >正在热映</NavLink>
        </li>
        <li>
          <NavLink to="/film/comingsoon" >即将上映</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/film/nowplaying" component={ NowPlaying }></Route>
        <Route path="/film/comingsoon" component={ Comingsoon }></Route>
        <Redirect from="/film" to="/film/nowplaying"></Redirect>
      </Switch>
    </div>
  )
}
