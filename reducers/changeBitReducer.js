import bin2dec from "./operations/bin2dec"

function changeBit(state, action) {
  let group = action.payload[0];
  let index = action.payload[1];

  if (group == "first") {
    state.bits0[index] = state.bits0[index] == 0 ? 1 : 0;
    state.decValues.bits0 = bin2dec(state.bits0)
  } else if (group == "second") {
    state.bits1[index] = state.bits1[index] == 0 ? 1 : 0;
    state.decValues.bits1 = bin2dec(state.bits1)
  }

  return state;
}

export default changeBit;
