import React from 'react';
import '../css/component-style.css'

export default class Style extends React.Component { 
   render () {
    const myName = '张三'
    const obj = {
      backgroundColor: 'yellow',
      fontSize: '20px',
    }
    return (
      <div>
        { 10 + 20 }-{ myName }
        { 10 > 20 ? 'aaa' : 'bbb' }
        <div style={obj}>1111111111111</div>
        <div style={{background: 'red'}}>222222222</div>
        {/* class属性要写成className */}
        <div className='active'>33333333333</div>
        {/* for属性要写成htmlFor */}
        <label htmlFor='username'>用户名:</label>
        <input type='text' id='username' />
      </div>
    )
   }
}