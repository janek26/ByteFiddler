export const createTodo = text => ({
  type: 'TODOS.CREATE',
  payload: text,
})

export const removeTodo = text => ({
  type: 'TODOS.REMOVE',
  payload: text,
})