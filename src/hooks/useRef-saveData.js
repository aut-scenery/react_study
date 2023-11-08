import React, { useRef, useState } from 'react'

export default function UseRefSaveData() {
  const [num, setNum] = useState(1)
  // useRef可以缓存数据
  const mynum = useRef(1)
  return (
    <div>
      <p>num is {num}.</p>
      <p>mynum is {mynum.current}.</p>
      <button onClick={
        () => {
          mynum.current++
          setNum(num + 1)
        }
      }>add</button>
    </div>
  )
}
