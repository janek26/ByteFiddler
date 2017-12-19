import bin2dec from "./bin2dec"
import dec2bin from "./dec2bin"

export default function div(state) {
  let bits0 = bin2dec(state.bits0),
      bits1 = bin2dec(state.bits1),
      decResult = 0,
      binResult = 0,
      msg = "";

  decResult = binResult = (bits0 - (bits0 % bits1)) / bits1;

  if ((bits0 % bits1) > 0) {
    msg = " (Rest " + (bits0 / bits1).toFixed(3) + " wird abgeschnitten!)";
  }


  state.result = dec2bin(binResult);
  state.decValues.result = bin2dec(state.result) + msg;

  return state;
}
