import { CHANGE_BIT, LOGICAL_OPERATION }  from '../actions/logicalActions'
import changeBit                          from './changeBitReducer.js'
import logicalOperation                   from './operationsReducer.js'

const initialState = {
  bits0:  [0, 1, 0, 1, 0, 1, 0, 1],
  bits1:  [1, 0, 1, 0, 1, 0, 1, 0],
  result: [0, 0, 0, 0, 0, 0, 0, 0],
  flags:  {carry: 0, zero: 1, parity: 1},
}

function logicalReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_BIT':
      return {
        ...state,
          action: changeBit(state, action)
        }
    case LOGICAL_OPERATION:
      return {
        ...state,
        action: logicalOperation(state, action)
      }
    default:
      return state
  }
}

export default logicalReducer;
