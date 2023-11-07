import React, { useState, useEffect} from 'react'

export default function UseEffect1() {
  const [name, setName] = useState('liMing')

  // 第一次执行一次，之后name（依赖）更新也会执行
  useEffect(() => {
    setName(name.substring(0, 1).toUpperCase() + name.substring(1))
  }, [name])
  return (
    <div>
      My name is { name }.
      <button onClick={() => {
        setName('zhangLei')
      }}>next</button>
    </div>
  )
}
