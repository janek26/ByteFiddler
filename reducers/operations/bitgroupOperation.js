import setFlags from "./setFlags"
import bin2dec from "./bin2dec"
import dec2bin from "./dec2bin"

function bitgroupOperation(state, action) {
  let op = action.payload.operation;
  let group = action.payload.group;
  let bits = 0;

  bits = group === "first" ? state.bits0 : state.bits1;

  if (op == "SHL")
    bits = bits.map((bit, index) =>
      bit = bits[index+1]
    ).map((bit, index) => index === 7 ? 0 : bit);
  else if (op == "SHR")
    bits = bits.map((bit, index) =>
      bit = bits[index-1]
    ).map((bit, index) => index === 0 ? 0 : bit);
  else if (op == "NOT")
    bits = bits.map((bit, index) =>
      bit === 0
    ).map(x => x ? 1 : 0);

    if (group === "first") {
      state.bits0 = bits;
      state.decValues.bits0 = bin2dec(state.bits0);
    } else {
      state.bits1 = bits;
      state.decValues.bits1 = bin2dec(state.bits1);
    }

    return state;
}

export default bitgroupOperation;
