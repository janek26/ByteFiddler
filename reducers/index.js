import { combineReducers } from "redux"

import todos from "./todos"
import logicalReducer from "./logicalReducer"

export default combineReducers({
  logicalReducer,
  todos,
})