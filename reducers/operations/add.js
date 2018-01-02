import bin2dec from "./bin2dec"
import dec2bin from "./dec2bin"

export default function add(state) {
  let bits0 = bin2dec(state.bits0),
      bits1 = bin2dec(state.bits1),
      decResult = 0,
      binResult = 0;

  decResult = binResult = bits0 + bits1;

  if (binResult > 255) {
    binResult -= 256;
    state.flags.carry = 1;
  } else
    state.flags.carry = 0;

  state.decValues.rest = 0;
  state.decValues.result = decResult;
  state.result = dec2bin(binResult);

  return state;
}
