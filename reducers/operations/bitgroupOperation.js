import setFlags from "./setFlags"
import bin2dec from "./bin2dec"
import dec2bin from "./dec2bin"

function bitgroupOperation(state, action) {
  let op      = action.payload.operation;
  let group   = action.payload.group;
  let bits    = 0,
      decVal  = 0;

  bits = group === "first" ? state.bits0 : state.bits1;

  if (op == "SHL") {
    state.flags.carry = bits[0];
    bits = bits.map((bit, index) =>
      bit = bits[index+1]
    ).map((bit, index) => index === 7 ? 0 : bit);

    let oldCarry = state.flags.carry;
    state.flags = setFlags(bits);
    state.flags.carry = oldCarry;
  } else if (op == "SHR") {
    state.flags.carry = bits[7];
    bits = bits.map((bit, index) =>
      bit = bits[index-1]
    ).map((bit, index) => index === 0 ? 0 : bit);

    let oldCarry = state.flags.carry;
    state.flags = setFlags(bits);
    state.flags.carry = oldCarry;
  } else if (op == "NOT") {
    bits = bits.map((bit, index) =>
      bit === 0
    ).map(x => x ? 1 : 0);
  } else if (op == "INC") {
    decVal = bin2dec(bits);
    decVal++;
    bits = dec2bin(decVal);
    let oldCarry = state.flags.carry;
    state.flags = setFlags(bits);
    state.flags.carry = oldCarry;
  } else if (op == "DEC") {
    decVal = bin2dec(bits);
    decVal--;
    bits = dec2bin(decVal);
    setFlags(bits);
    let oldCarry = state.flags.carry;
    state.flags = setFlags(bits);
    state.flags.carry = oldCarry;
  }

    if (group === "first") {
      state.bits0 = bits;
        state.decValues.bits0 = bin2dec(state.bits0);
      state.activeGroup = 1;
    } else {
      state.bits1 = bits;
        state.decValues.bits1 = bin2dec(state.bits1);
      state.activeGroup = 2;
    }

    state.activeOperation = op.toLowerCase();
    return state;
}

export default bitgroupOperation;
