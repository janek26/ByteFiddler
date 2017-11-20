
function changePosition(bitGroup, index) {
  if (bitGroup[index] == 0)
    bitGroup[index] = 1;
  else
    bitGroup[index] = 0;
    
  return bitGroup;
}

function changeBit(state, action) {
  let group = action.payload[0];
  let index = action.payload[1];

  if (group == "first")
    state.bits0 = changePosition(state.bits0, index);
  else if (group == "second")
    state.bits1 = changePosition(state.bits1, index);

  console.log("Group: " + group + ", Bit: " + index);
  console.log(state)
  return  Object.assign({},state,);
}

export default changeBit;
