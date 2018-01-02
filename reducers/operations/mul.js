import bin2dec from "./bin2dec"
import dec2bin from "./dec2bin"

export default function mul(state) {
  let bits0 = bin2dec(state.bits0),
      bits1 = bin2dec(state.bits1),
      decResult = 0,
      binResult = 0;

  decResult = binResult = bits0 * bits1;

  if (binResult > 255) {
    binResult -= 256;
  }


  state.result = dec2bin(binResult);
  state.decValues.result = bin2dec(state.result) ;
  if ((bits0 * bits1 - state.decValues.result) > 0) {
    state.decValues.rest = bits0 * bits1 - state.decValues.result;
  } else {
    state.decValues.rest = 0;
  }

  return state;
}
