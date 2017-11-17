export default (state = [
  {
    a0: '00000000',
    done: false,
    visible: true,
  }
], action) => {
  switch (action.type) {
    case 'TODOS.CREATE': {
      return [...state, {
        text: action.payload,
        done: false,
        visible: true,
        test: true
      }]
    }
    case 'TODOS.REMOVE': {
      return [...state].filter(
        x => x.text !== action.payload
      )
    }
    case 'OP.MUL': {
      return [...state, {
        text: action.payload,
        done: false,
        visible: true,
        test: true
      }]
    }
    default: {
      return state
    }
  }
}
