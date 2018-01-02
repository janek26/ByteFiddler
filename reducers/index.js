import { combineReducers } from "redux"

import lampeReducer from "./lampeReducer"
import logicalReducer from "./logicalReducer"
import bitDisplay from "./bitDisplay"

export default combineReducers({
  bitDisplay,
  lampeReducer,
  logicalReducer
})
