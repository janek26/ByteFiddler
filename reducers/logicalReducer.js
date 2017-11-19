import {  CHANGE_BIT_0 } from '../actions/bitButtonActions'
import {  OL_MUL } from '../actions/logicalActions'

const initialState = {
  bits0:  [0, 1, 0, 1, 0, 1, 0, 1],
  bits1:  [1, 0, 1, 0, 1, 0, 1, 0],
  result: [0, 0, 0, 0, 1, 1, 1, 1],
}

function logicalReducer(state = initialState, action) {
console.log("action.type: " + action.type)

  switch (action.type) {
    case 'CHANGE_BIT_0': {

      return [
        ...state,
        {
          text: action.text
        }
      ]
    }

    case 'OL_MUL': {
    console.log("Type: " + action.type)

      return [
        ...state,
        {
          text: action.text
        }
      ]
    }
    default: {
      return state
    }
  }

}

export default logicalReducer;
