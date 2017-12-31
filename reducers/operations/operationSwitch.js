import setFlags from "./setFlags"
import bin2dec from "./bin2dec"
import dec2bin from "./dec2bin"
import add from "./add"
import sub from "./sub"
import mul from "./mul"
import div from "./div"

function operationSwitch(state, action) {
  let op = action.payload;
  let carry = 0;

  // AND/OR/XOR/XNOR benötigen nur die beiden flags
  // zero & parity, carry-flag soll 0 sein. Beim umwandeln
  // der Dezimalen Zahl soll kein Vorzeichen interpretiert werden
  if (op == "AND" || op == "OR" || op == "XOR" || op == "XNOR") {
    if (op == "AND")
      state.result = state.bits0.map((bit, index) =>
        bit === state.bits1[index] && bit === 1
      ).map(x => x ? 1 : 0);
    else if (op == "OR")
      state.result = state.bits0.map((bit, index) =>
        bit === 1 || state.bits1[index] === 1
      ).map(x => x ? 1 : 0);
    else if (op == "XOR")
      state.result = state.bits0.map((bit, index) =>
        bit !== state.bits1[index]
      ).map(x => x ? 1 : 0);
    else if (op == "XNOR")
      state.result = state.bits0.map((bit, index) =>
        bit === state.bits1[index]
      ).map(x => x ? 1 : 0);

    state.flags = setFlags(state.result);
    state.flags.carry = 0;
    state.decValues.result = bin2dec(state.result);
    state.decValues.rest = 0;
  }

  // ADD/SUB/MUL/DIV benötigen alle Flags. Beim umwandeln
  // der Dezimalen Zahl muss Vorzeichen bei SUB interpretiert werden
  // Overflow nur bei Bedarf bei sub setzen, bei allen anderen Reset des States
  else if (op == "ADD" || op == "SUB" || op == "MUL" || op == "DIV") {
    state.flags.overflow = 0;

    if (op == "ADD") {
      state = add(state);
    } else if (op == "SUB")
      state = sub(state);
    else if (op == "MUL")
      state = mul(state);
    else if (op == "DIV")
      state = div(state);

   carry = state.flags.carry == 1 ? 1 : 0;

   state.flags = setFlags(state.result);
   if (carry == 1)
     state.flags.carry = 1;

   }

   state.activeOperation = op.toLowerCase();

   return state;
}

export default operationSwitch;
