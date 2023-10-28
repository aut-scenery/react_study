import React from "react";
import ReactDOM from "react-dom/client";
import App from './Base/class-component'
import Home from "./Base/functional-component";
import Father from "./Base/nesting-component";
import Style from "./Base/component-style";
import EventBinding1 from "./Base/event-binding-1";
import EventBinding2 from "./Base/event-binding-2";
import Ref from "./Base/ref";
import State from "./Base/state";
import CircularRendering from "./Base/circular-rendering";
import TodolistAdd from "./Base/todolist-add";
import TodolistDelete from "./Base/todolist-delete";
import ConditionRender from "./Base/condition-render";
import DangerouslySetInnerHTML from "./Base/dangerously-set-innerhtml";
import OptionCard from "./practise/option-card";
import SetStateDetail from "./Base/setState-detail";
import BetterScrollA from "./Base/betterScroll";
import Props from "./Base/props";
import FunctionalProps from "./Base/functional-props";
import PropsVsState from "./Base/propsVsState";
import Uncontrolled from "./Base/uncontrolled";
import Controlled from "./Base/controlled";
import TodolistCon from "./Base/todolist-con";
import FatherAndSon from "./correspondence/father-and-son";
import FormField from "./correspondence/form-field";
import FatherAndSonRef from "./correspondence/father-and-son-ref";
import Intermediator from "./correspondence/intermediator";
import PostedSubscription from "./correspondence/posted-subscription";
import Context from './correspondence/context'
import Slot from "./correspondence/slot";
import Init from "./life-cycle/init";
import Example from "./life-cycle/example";
import Runing from "./life-cycle/runing";
import Runing2 from "./life-cycle/runing2";
import Runing2Example from "./life-cycle/runing2-example";
import Runing3 from "./life-cycle/runing3";
import Runing3Example from "./life-cycle/runing3-example";
import Destory from "./life-cycle/destory";
import GetDerivedStateFromProps from "./life-cycle/getDerivedStateFromProps";
import GDSFPExample from "./life-cycle/gDSFP-example";
const root = ReactDOM.createRoot(document.getElementById("root"));
function AllPages () {
  return (
    <>
     <App />
     <Home />
     <Father />
     <Style />
     <EventBinding1 />
     <EventBinding2 />
     <Ref />
     <State />
     <CircularRendering />
     <TodolistAdd />
     <TodolistDelete />
     <ConditionRender />
     <DangerouslySetInnerHTML />
     <OptionCard />
     <SetStateDetail />
     <BetterScrollA />
     <Props />
     <FunctionalProps />
     <PropsVsState />
     <Uncontrolled />
     <Controlled />
     <TodolistCon />
     <FatherAndSon />
     <FormField />
     <FatherAndSonRef />
     <Intermediator />
     <PostedSubscription />
     <Context />
     <Slot />
     <Init />
     <Example />
     <Runing />
     <Runing2 />
     <Runing2Example />
     <Runing3 />
     <Runing3Example />
     <Destory />
     <GetDerivedStateFromProps />
    </>
  )
}
AllPages()
root.render(
  <React.StrictMode>
    <GDSFPExample />
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
