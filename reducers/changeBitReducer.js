function changeBit(state, action) {
  let group = action.payload[0];
  let index = action.payload[1];

  if (group == "first")
    state.bits0[index] = state.bits0[index] == 0 ? 1 : 0;
  else if (group == "second")
    state.bits1[index] = state.bits1[index] == 0 ? 1 : 0;
    
  console.log("Group: " + group + ", Bit: " + index);
  console.log(state)
  return  Object.assign({},state,);
}

export default changeBit;
