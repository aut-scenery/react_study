## 1、React 事件绑定与原生事件绑定的区别
React中的事件是绑定到document上面，而原生的事件是绑定到DOM上面。
相对绑定的地方来说，DOM上的事件要优先于document上的事件执行。
React的事件对象是合成对象，不是原生的。
原生事件名纯小写，React中事件名小驼峰。
原生事件传入一个字符串，React中使用JSX传入函数作为事件处理函数。
原生事件可以使用return false阻止默认行为，React中必须显式使用preventdefault。
**优点：** 好处是占用内存小，不用考虑什么时候移除这个事件