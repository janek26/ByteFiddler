import { CHANGE_BIT, LOGICAL_OPERATION, BITGROUP_ACTION }  from '../actions/logicalActions'
import changeBit                          from './changeBitReducer.js'
import operationSwitch                    from './operations/operationSwitch.js'
import bitgroupOperation                  from './operations/bitgroupOperation.js'

const initialState = {
  bits0:  [0, 0, 0, 1, 0, 1, 1, 1],
  bits1:  [0, 0, 1, 0, 1, 0, 1, 0],
  result: [0, 0, 0, 0, 0, 0, 0, 0],
  flags:  {carry: 0, zero: 1, parity: 1, overflow: 0},
  decValues: {bits0: 23, bits1: 42, result: 0, rest:0},
}

function logicalReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BIT:
      return {
        ...state,
          action: changeBit(state, action)
        }
    case LOGICAL_OPERATION:
      return {
        ...state,
        action: operationSwitch(state, action)
      }
    case BITGROUP_ACTION:
      return {
        ...state,
          action: bitgroupOperation(state, action)
        }
    default:
      return state
  }
}

export default logicalReducer;
