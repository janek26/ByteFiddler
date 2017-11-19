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
  return { type: OP_AND, text }
}

export function orBits(text) {
  return { type: OP_OR, text }
}

export function xorBits(text) {
  return { type: OP_XOR, text }
}

export function xnorBits(text) {
  return { type: OP_XNOR, text }
}

export function addBits(text) {
  return { type: OP_ADD, text }
}

export function subBits(text) {
  return { type: OP_SUB, text }
}

export function mulBits(text) {
  return { type: OP_MUL, text }
}

export function divBits(text) {
  return { type: OP_DIV, text }
}
