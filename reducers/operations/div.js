import bin2dec from "./bin2dec"
import dec2bin from "./dec2bin"

export default function div(state) {
  let bits0 = bin2dec(state.bits0),
      bits1 = bin2dec(state.bits1),
      decResult = 0,
      binResult = 0;

  if (bits1 == 0) {
    alert("Division durch 0 nicht möglich!");
    return state;
  }
  
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
