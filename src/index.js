import React from "react";
import ReactDOM from "react-dom/client";
import UseState from "./hooks/useState";
import UseStateExample from "./hooks/useState-example";
import UseEffect from "./hooks/useEffect";
import UseEffect1 from "./hooks/useEffect1";
import UseEffect1Example from "./hooks/useEffect1-example";
import UseEffect2 from "./hooks/useEffect2";
import UseLayoutEffect from "./hooks/useLayoutEffect";
function AllPages1 () {
  return (
    <div>
      <UseState />
      <UseStateExample />
      <UseEffect />
      <UseEffect1 />
      <UseEffect1Example />
      <UseEffect2 />
    </div>
  )
}
AllPages1()
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UseLayoutEffect />
  </React.StrictMode>
);
// root.render(
// <div>
//   <b>1111</b>
//   <ul>
//     <li>111111</li>
//     <li>111111</li>
//     <li>111111</li>
//     <li>111111</li>
//     <li>111111</li>
//   </ul>
// </div>);
// root.render(
//   React.createElement(
//     'div',
//     {
//       className: 'box',
//       id: 'box'
//     },
//     [
//       '111',
//       <p key="2">222</p>
//     ]
//   )
//   );
