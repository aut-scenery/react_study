import React, { useEffect } from 'react'

export default function Detail(props) {
  // console.log(props)
  // console.log(props.match.params.id)
  // console.log(props.match.params.id)
  // console.log(props.location.state.id)
  console.log(props)
  useEffect(() => {
    console.log("create")
    return () => {
      console.log('destroy')
    }
  }, [])
  return (
    <div>detail</div>
  )
}
