import React, { useRef } from 'react'

export default function UseRef() {
  const myText = useRef()
  return (
    <div>
      <input ref={myText} />
      <button onClick={() => {
        console.log(myText)
      }}>get</button>
    </div>
  )

}
