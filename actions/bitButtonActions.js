/*
 * action types
 */
export const CHANGE_DISPLAY = 'CHANGE_DISPLAY'


/*
 * action creators
 */
export function changeBitPosition(index) {
  console.log(index);
  return { type: 'CHANGE_DISPLAY', payload: index }
}
