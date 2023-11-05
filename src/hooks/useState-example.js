import React, { useState } from 'react'

export default function UseStateExample() {
  const [text, setText] = useState('')
  const [list, setList] = useState(['11', '22', '33'])
  const handleChange = function (evt) {
    console.log(evt.target.value)
    setText(evt.target.value)
  }
  const handleAdd = function () {
    setList([...list, text])
    // 清空
    setText('')
  }
  const handleDelete = function (index) {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }
  return (
    <div>
      <input value={text} onChange={handleChange} />
      <button onClick={handleAdd}>add</button>
      <ul>
        {
          list.map((item, index) => <li key={item}>
            {item}
            <button onClick={() => handleDelete(index)}>delete</button>
          </li>)
        }
      </ul>
      { !list.length && <div>暂无待办事项</div>}
    </div>
  )
}
