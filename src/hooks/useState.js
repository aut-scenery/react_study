import React, { useState } from 'react'

export default function UseState() {
  const [name, setName] = useState('张三')
  const [age, setAge] = useState(18)
  return (
    <div>
      <p>My name is { name }.</p>
      <p>I am { age } years old.</p>
      <button onClick={() => {
        setName('李四')
        setAge(21)
      }}>next</button>
    </div>
  )
}
