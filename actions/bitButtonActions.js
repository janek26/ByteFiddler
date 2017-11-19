/*
 * action types
 */
export const CHANGE_BIT_0 = 'CHANGE_BIT_0'
export const CHANGE_BIT_1 = 'CHANGE_BIT_1'
export const CHANGE_BIT_2 = 'CHANGE_BIT_2'
export const CHANGE_BIT_3 = 'CHANGE_BIT_3'
export const CHANGE_BIT_4 = 'CHANGE_BIT_4'
export const CHANGE_BIT_5 = 'CHANGE_BIT_5'
export const CHANGE_BIT_6 = 'CHANGE_BIT_6'
export const CHANGE_BIT_7 = 'CHANGE_BIT_7'


/*
 * action creators
 */
export function changeBit0(index) {
  console.log(index);
  return { type: 'CHANGE_BIT_0', payload: index }
}

export function changeBit1(index) {
 console.log(index);
 return { type: 'CHANGE_BIT_1', payload: index }
}

export function changeBit2(index) {
 console.log(index);
 return { type: 'CHANGE_BIT_2', payload: index }
}

export function changeBit3(index) {
 console.log(index);
 return { type: 'CHANGE_BIT_3', payload: index }
}

export function changeBit4(index) {
 console.log(index);
 return { type: 'CHANGE_BIT_4', payload: index }
}

export function changeBit5(index) {
 console.log(index);
 return { type: 'CHANGE_BIT_5', payload: index }
}

export function changeBit6(index) {
 console.log(index);
 return { type: 'CHANGE_BIT_6', payload: index }
}

export function changeBit7(index) {
 console.log(index);
 return { type: 'CHANGE_BIT_7', payload: index }
}
