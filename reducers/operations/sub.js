import bin2dec from "./bin2dec"
import dec2bin from "./dec2bin"

export default function sub(state) {
  let bits0 = bin2dec(state.bits0),
      bits1 = bin2dec(state.bits1),
      decResult = 0,
      binResult = 0;

  decResult = binResult = bits0 - bits1;

  if (binResult < 0) {
    state.flags.carry = 1;
    state.flags.overflow = 1;
    binResult = 256 + binResult;
  }

  state.decValues.result = decResult;
  state.result = dec2bin(binResult);

  return state;
}
