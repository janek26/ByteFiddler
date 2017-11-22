import { combineReducers } from "redux"

import todos from "./todos";
import  lampeReducer from "./lampeReducer"

export default combineReducers({
  todos,
  lampeReducer,
})
