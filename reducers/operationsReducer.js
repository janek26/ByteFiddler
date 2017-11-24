function logicalOperation(state, action) {
  let index = action.payload;

  console.log("Payload: " + action.payload);

  return state;
}

export default logicalOperation;
