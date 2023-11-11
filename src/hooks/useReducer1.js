import React, { useReducer } from 'react'

const reducer = (prevState, action) => {
  console.log('reducer', prevState, action);
  let newState = { ...prevState }
  switch (action.type) {
    case 'increase':
      newState.count++;
      return newState
    case 'decrease':
      newState.count--;
      return newState
    default:
      return prevState
  }
}

const intialState = {
  count: 0,
}

export default function UseReducer1() {
  const [state, dispatch] = useReducer(reducer, intialState)
  console.log('render')
  return (
    <div>
      <button onClick={
        () => {
          dispatch({
            type: 'decrease',
          })
        }
      }>-</button>
      { state.count }
      <button onClick={
        () => {
          dispatch({
            type: 'increase'
          })
        }
      }>+</button>
    </div>
  )
}
