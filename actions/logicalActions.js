/*
 * action types
 */
export const LOGICAL_OPERATION  = 'LOGICAL_OPERATION'
export const CHANGE_BIT         = 'CHANGE_BIT'


/*
 * action creators
 */
export function logicalOperation(operation) {
  return { type: LOGICAL_OPERATION, payload: operation }
}

export function changeBit(group, index) {
  return { type: 'CHANGE_BIT', payload: [group, index] }
}
