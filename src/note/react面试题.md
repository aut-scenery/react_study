## 1、React 事件绑定与原生事件绑定的区别
React中的事件是绑定到document上面，而原生的事件是绑定到DOM上面。
相对绑定的地方来说，DOM上的事件要优先于document上的事件执行。
React的事件对象是合成对象，不是原生的。
原生事件名纯小写，React中事件名小驼峰。
原生事件传入一个字符串，React中使用JSX传入函数作为事件处理函数。
原生事件可以使用return false阻止默认行为，React中必须显式使用preventdefault。
**优点：** 好处是占用内存小，不用考虑什么时候移除这个事件
## 2、React 中的性能优化方案
1、手动优化 shouldComponentUpdate
2、自动优化 PureComponent
**缺点：** 如果state或props永远在变就不太适用
## 3、useEffect 和 useLayoutEffect 的区别
简单来说就是调用时机不同，useLayoutEffect和componentDidMount&componentDidUpdate一致，在react完成DOM更新后马上同步调用的代码，
会阻塞页面的渲染。而useEffect是会在整个页面渲染完成才会调用的代码。
官方建议优先使用 useEffect
在实际使用时如果想避免页面抖动(在useEffect里修改DOM很有可能出现)的话，可以把需要操作DOM的代码放在useLayoutEffect里。在这里做DOM
操作，这些DOM的修改会和react做出的更改一起被一次性渲染到屏幕上，只有一次回流、重绘的代价。
