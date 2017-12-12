export default (state = {
  main: [0,0,0,0, 0,0,0,0], //length: 8
}, action) => {
  const { type, payload } = action
  switch (type) {
    case 'TOGGLE_BIT': {
      const { id, store } = payload
      const newState = {...state}
      newState[store][id] = state[store][id] === 0 ? 1 : 0
      return newState
    }
    default: {
      return state
    }
  }
}