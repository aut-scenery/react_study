import React from "react";
import ReactDOM from "react-dom/client";
import UseState from "./hooks/useState";
import UseStateExample from "./hooks/useState-example";
import UseEffect from "./hooks/useEffect";
function AllPages1 () {
  return (
    <div>
      <UseState />
      <UseStateExample />
    </div>
  )
}
AllPages1()
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UseEffect />
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
