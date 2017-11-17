export default (state = [
  {
    bits0:  [0, 1, 0, 1, 0, 1, 0, 1],
    bits1:  [1, 0, 1, 0, 1, 0, 1, 0],
    result: [0, 0, 0, 0, 1, 1, 1, 1],
  }
], action) => {
  switch (action.type) {
    case 'CHANGE_DISPLAY': {
      return [...state, {
        text: action.payload,
      }]
    }
    case 'TODOS.REMOVE': {
      return [...state].filter(
        x => x.text !== action.payload
      )
    }
    default: {
      return state
    }
  }
}
