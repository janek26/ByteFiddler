function logicalOperation(state, action) {
  let index = action.payload;

  console.log("Payload: " + action.payload);

  return [
    ...state,
    {
      text: action.text
    }
  ]
}

export default logicalOperation;
