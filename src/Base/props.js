import React from 'react';
import Navbar from '../components/navbar';

export default class Props extends React.Component {
   render () {
    const obj = {
      title: '测试',
      leftshow: false,
    }
    return (
      <div>
        <div>
          <h2>首页</h2>
          <Navbar title="首页" leftshow={ false } />
        </div>
        <div>
          <h2>列表</h2>
          <Navbar title="列表" ></Navbar>
        </div>
        <div>
          <h2>购物车</h2>
          <Navbar title="购物车" ></Navbar>
        </div>
        <div>
          <Navbar title={obj.title} leftshow={obj.leftshow} ></Navbar>
          {/* 属性名一致时可以简写 */}
          <Navbar {...obj} ></Navbar>
        </div>
      </div>
    )
   }
}