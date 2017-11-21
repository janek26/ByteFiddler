import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Infoanzeige from './components/Infoanzeige'
import infoanzeige from './reducers'

const store = createStore(infoanzeige)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Infoanzeige
   value={parseInt(store.getState(),10)}
   onIncrement={() => store.dispatch({ type: 'INC',payload:1 })}
   onDecrement={() => store.dispatch({ type: 'DEC',payload:1 })}
  />,
  rootEl
)

render()
store.subscribe(render)
