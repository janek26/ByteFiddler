import bin2dec from "./bin2dec"
import dec2bin from "./dec2bin"

export default function mul(state) {
  let bits0 = bin2dec(state.bits0),
      bits1 = bin2dec(state.bits1),
      decResult = 0,
      binResult = 0,
      msg = "";

  decResult = binResult = bits0 * bits1;

  if (binResult > 255) {
    binResult -= 256;
    msg = " (8bit, Rest bis " + decResult + " wird abgeschnitten!)";
  }


  state.result = dec2bin(binResult);
  state.decValues.result = bin2dec(state.result) + msg;

  return state;
}
