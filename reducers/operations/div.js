import bin2dec from "./bin2dec"
import dec2bin from "./dec2bin"

export default function div(state) {
  let bits0 = bin2dec(state.bits0),
      bits1 = bin2dec(state.bits1),
      decResult = 0,
      binResult = 0;

  decResult = binResult = (bits0 - (bits0 % bits1)) / bits1;

  if ((bits0 % bits1) > 0) {
    state.decValues.rest = ((bits0 / bits1) - decResult).toFixed(3);
  } else {
    state.decValues.rest = 0;
  }


  state.result = dec2bin(binResult);
  state.decValues.result = bin2dec(state.result);



  return state;
}
