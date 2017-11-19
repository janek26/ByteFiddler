export default (state =0, action) => {
    switch (action.type) {
      case 'INC':
      return  state+=action.payload;
        break;
      case 'DEC':
        return state-=action.payload;
        break;
      default:
      return state;
    }
}
