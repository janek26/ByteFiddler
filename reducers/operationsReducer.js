
function setFlags(state) {
  /*
  this.props.flags.zero,
  this.props.flags.carry,
  this.props.flags.parity
  */
  let r = state.result;

  let found = 0;
  /** Zero & Parity-Flag */
  for (let x=0; x<8; x++)
    if (r[x] == 1) {
      found++;
    }

  if (found == 0) {
    state.flags.zero = 1
    state.flags.parity = 1
  } else {
    state.flags.zero = 0

    if (found % 2 == 0)
      state.flags.parity = 1
    else
      state.flags.parity = 0
  }

  return state;
}

function logicalOperation(state, action) {
  let index = action.payload;
  let b0 = state.bits0;
  let b1 = state.bits1;

  console.log("Payload: " + action.payload);

  if (action.payload == "AND") {
    for (let x=0; x<8; x++)
      if (b0[x] == b1[x] && b0[x] == 1)
        state.result[x] = 1;
      else
        state.result[x] = 0;
  }

  if (action.payload == "OR") {
    for (let x=0; x<8; x++)
      if (b0[x] == 1 || b1[x] == 1)
        state.result[x] = 1;
      else
        state.result[x] = 0;
  }

  if (action.payload == "XOR") {
    for (let x=0; x<8; x++)
      if ((b0[x] == 1 && b1[x] == 0) || (b0[x] == 0 && b1[x] == 1))
        state.result[x] = 1;
      else
        state.result[x] = 0;
  }

  if (action.payload == "XNOR") {
    for (let x=0; x<8; x++)
      if ((b0[x] == 0 && b1[x] == 0) || (b0[x] == 1 && b1[x] == 1))
        state.result[x] = 1;
      else
        state.result[x] = 0;
  }

  state = setFlags(state);

  return state;
}

export default logicalOperation;
