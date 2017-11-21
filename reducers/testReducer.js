export default (state = {
  text: 'Hallo',
}, action) => {
  switch (action.type) {
    case 'TEXT_INPUT.CHANGE':
      return {
        ...state,
        text: action.payload
      }
    default:
      return state
  }
}