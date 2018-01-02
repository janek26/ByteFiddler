/*
 * action types
 */
export const LOGICAL_OPERATION    = 'LOGICAL_OPERATION';
export const CHANGE_BIT           = 'CHANGE_BIT';
export const BITGROUP_ACTION      = 'BITGROUP_ACTION';
export const SHOW_INFO            = 'SHOW_INFO';
export const SHOW_FLAGS           = 'SHOW_FLAGS';
export const SHOW_DECINFO         = 'SHOW_DECINFO';


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

export function showInfo(o) {
 return { type: SHOW_INFO, payload: {operation:o} }
}

export function showFlags(o) {
 return { type: SHOW_FLAGS, payload: {operation:o} }
}

export function showDecInfo(o) {
 return { type: SHOW_DECINFO, payload: {operation:o} }
}
