/*
 * action types
 */
export const CHANGE_BIT = 'CHANGE_BIT'


/*
 * action creators
 */
export function changeBit(index, group) {
  return { type: 'CHANGE_BIT', payload: [index, group] }
}
