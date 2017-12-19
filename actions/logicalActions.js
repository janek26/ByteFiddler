/*
 * action types
 */
export const LOGICAL_OPERATION    = 'LOGICAL_OPERATION';
export const CHANGE_BIT           = 'CHANGE_BIT';
export const BITGROUP_ACTION      = 'BITGROUP_ACTION';


/*
 * action creators
 */
export function logicalOperation(operation) {
  return { type: LOGICAL_OPERATION, payload: operation }
}

export function changeBit(group, index) {
  return { type: CHANGE_BIT, payload: [group, index] }
}

export function bitgroupAction(g, o) {
 return { type: BITGROUP_ACTION, payload: {group: g, operation:o} }
}
