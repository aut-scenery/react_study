import UseState from "./hooks/useState";
import UseStateExample from "./hooks/useState-example";
import UseEffect from "./hooks/useEffect";
import UseEffect1 from "./hooks/useEffect1";
import UseEffect1Example from "./hooks/useEffect1-example";
import UseEffect2 from "./hooks/useEffect2";
import UseLayoutEffect from "./hooks/useLayoutEffect";
import UseCallback from "./hooks/useCallback";
import UseMemo from "./hooks/useMemo";
import UseRef from "./hooks/useRef";
import UseRefSaveData from "./hooks/useRef-saveData";
import UseContext from "./hooks/useContext";
import UseReducer1 from "./hooks/useReducer1";
import UseReducer2 from "./hooks/useReducer2";
import CustomHooks from "./hooks/customHooks";
function AllPages1 () {
  return (
    <div>
      <UseState />
      <UseStateExample />
      <UseEffect />
      <UseEffect1 />
      <UseEffect1Example />
      <UseEffect2 />
      <UseLayoutEffect />
      <UseCallback />
      <UseMemo />
      <UseRef />
      <UseRefSaveData />
      <UseContext />
      <UseReducer1 />
      <UseReducer2 />
      <CustomHooks />
    </div>
  )
}
AllPages1()
