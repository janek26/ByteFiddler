
export function andBits(bits) {
  let result = '00000000';
  console.log("andBits");
  return { type: 'OP.AND', payload: result }
}
export function orBits(bits) {
  let result = '00000001';
  console.log("orBits");
  return { type: 'OP.OR', payload: result }
}
export function xorBits(bits) {
  let result = '00000010';
  console.log("xorBits");
  return { type: 'OP.XOR', payload: result }
}
export function xnorBits(bits) {
  let result = '00000100';
  console.log("xnorBits");
  return { type: 'OP.XNOR', payload: result }
}
export function addBits(bits) {
  let result = '00001000';
  console.log("addBits");
  return { type: 'OP.ADD', payload: result }
}
export function subBits(bits) {
  let result = '00010000';
  console.log("subBits");
  return { type: 'OP.SUB', payload: result }
}

export function mulBits(bits) {
  let result = '00100000';
  console.log("mulBits");
  return { type: 'OP_MUL', payload: result }
}

export function divBits(bits) {
  let result = '01000000';
  console.log("divBits");
  return { type: 'OP.DIV', payload: result }
}
