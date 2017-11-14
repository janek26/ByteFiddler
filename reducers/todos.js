export default (state = [
  {
    text: 'Example Todo',
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