export const andBits = text => ({
  type: 'OP.AND',
  payload: text,
})

export const orBits = text => ({
  type: 'OP.OR',
  payload: text,
})

export const xorBits = text => ({
  type: 'OP.XOR',
  payload: text,
})


export const xnorBits = text => ({
  type: 'OP.XNOR',
  payload: text,
})


export const addBits = text => ({
  type: 'OP.ADD',
  payload: text,
})


export const subBits = text => ({
  type: 'OP.SUB',
  payload: text,
})


export const mulBits = text => ({
  type: 'OP.MUL',
  payload: text,
})


export const divBits = text => ({
  type: 'OP.DIV',
  payload: text,
})


export const createTodo = text => ({
  type: 'TODOS.CREATE',
  payload: text,
})

export const removeTodo = text => ({
  type: 'TODOS.REMOVE',
  payload: text,
})
