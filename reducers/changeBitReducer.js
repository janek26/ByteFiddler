import bin2dec from "../components/bin2dec"

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

  if (group == "first") {
    state.bits0 = changePosition(state.bits0, index);
    state.decValues.bits0 = bin2dec(state.bits0)
    console.log(state.bits0)
  } else if (group == "second") {
    state.bits1 = changePosition(state.bits1, index);
    state.decValues.bits1 = bin2dec(state.bits1)
  }

  return state;
}

export default changeBit;
