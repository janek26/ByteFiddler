import {  CHANGE_BIT } from '../actions/bitButtonActions'
import {  OP_MUL } from '../actions/logicalActions'

const initialState = {
  bits0:  [0, 1, 0, 1, 0, 1, 0, 1],
  bits1:  [1, 0, 1, 0, 1, 0, 1, 0],
  result: [0, 0, 0, 0, 1, 1, 1, 1],
}


function logicalReducer(state = initialState, action) {
console.log("action.type: " + action.type)

  switch (action.type) {
    case 'CHANGE_BIT': {
      let index = action.payload[0];
      let group = action.payload[1];

      if (group == "first")
        state.bits0[index] = state.bits0[index] == 0 ? 1 : 0;
      else if (group == "second")
        state.bits1[index] = state.bits1[index] == 0 ? 1 : 0;

      console.log(state)

      return Object.assign({},state,)
    }

    case 'OP_MUL': {
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
