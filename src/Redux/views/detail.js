import React, { useEffect } from 'react'
import store from '../redux/store'

export default function Detail(props) {
  // console.log(props)
  // console.log(props.match.params.id)
  // console.log(props.match.params.id)
  // console.log(props.location.state.id)
  console.log(props)
  useEffect(() => {
    // console.log("create")
    store.dispatch({
      type: "hide-tabbar"
    })
    return () => {
      // console.log('destroy')
      store.dispatch({
        type: "show-tabbar"
      })
    }
  }, [])
  return (
    <div>detail</div>
  )
}
