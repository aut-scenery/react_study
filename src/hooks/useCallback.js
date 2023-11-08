import React, { useState, useCallback } from 'react'

export default function UseCallback() {
  const [name, setName] = useState('张三')
  const [text, setText] = useState('')
  const [list, setList] = useState(['11', '22', '33'])
  // 防止因为组件重新渲染，导致方法被重建，起到缓存作用，只有第二个参数变化了才重新声明一次
  // 如果传入空数组，那么第一次创建后就被缓存
  // 如果不传第二个参数，每次都会重新声明一次
  const handleChange = useCallback(function (evt) {
    console.log(evt.target.value)
    setText(evt.target.value)
  }, [])
  const handleAdd = useCallback(function () {
    setList([...list, text])
    // 清空
    setText('')
  }, [list, text])
  const handleDelete = useCallback(function (index) {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }, [list])
  const changeName = useCallback(function () {
    setName(name + 1)
  }, [name])
  return (
    <div>
      <div>{name}<button onClick={
        changeName
      }>click</button></div>
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
