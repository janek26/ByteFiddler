import { combineReducers } from "redux"

import todos from "./todos"
import logicalReducer from "./logicalReducer"
import testReducer from "./testReducer"

export default combineReducers({
  logicalReducer,
  todos,
  testReducer,
})