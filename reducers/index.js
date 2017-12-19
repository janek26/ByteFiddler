import { combineReducers } from "redux"

import lampeReducer from "./lampeReducer"
import bitDisplay from "./bitDisplay"

export default combineReducers({
  bitDisplay,
  lampeReducer,
})
