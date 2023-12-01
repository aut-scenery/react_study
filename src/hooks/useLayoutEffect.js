import React, { useState, useLayoutEffect } from 'react'

function Child () {
  // 在浏览器重新绘制屏幕之前触发
  useLayoutEffect(() => {
    window.onresize = () => {
      console.log('onresize')
    }
    const timer = setInterval(() => {
      console.log('111')
    }, 1000)
    // 第二个参数为空时，组件销毁就会调用
    return () => {
      console.log('已销毁')
      window.onresize = null
      clearInterval(timer)
    }
  }, [])
  return (
    <div>child</div>
  )
}

export default function UseLayoutEffect () {
  const [isCreated, setIsCreated] = useState(true);
  return (
    <div>
      <button onClick={
        () => {
          setIsCreated(!isCreated);
        }
      }>change</button>
      { isCreated ? <Child /> : '已销毁'}
    </div>
  )
}

