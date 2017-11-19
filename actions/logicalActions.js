/*
 * action types
 */

export const OP_AND = 'OP_AND'
export const OP_OR = 'OP_OR'
export const OP_XOR = 'OP_XOR'
export const OP_XNOR = 'OP_XNOR'

export const OP_ADD = 'OP_ADD'
export const OP_SUB = 'OP_SUB'
export const OP_MUL = 'OP_MUL'
export const OP_DIV = 'OP_DIV'


/*
 * action creators
 */

export function andBits(text) {
  console.log("andBits");
  return { type: OP_AND, text }
}


export function orBits(text) {
  console.log("orBits");
  return { type: OP_OR, text }
}

export function xorBits(text) {
  let result = '00000010';
  console.log("xorBits");
  return { type: OP_XOR, text }
}

export function xnorBits(text) {
  let result = '00000100';
  console.log("xnorBits");
  return { type: OP_XNOR, text }
}


export function addBits(text) {
  let result = '00001000';
  console.log("addBits");
  return { type: OP_ADD, text }
}


export function subBits(text) {
  let result = '00010000';
  console.log("subBits");
  return { type: OP_SUB, text }
}


export function mulBits(text) {
  let result = '00100000';
  console.log("mulBits");
  return { type: OP_MUL, text }
}


export function divBits(text) {
  let result = '01000000';
  console.log("divBits");
  return { type: OP_DIV, text }
}
