export function toggleBit(id, store) {
  return { 
    type: 'TOGGLE_BIT', 
    payload: {
      id,
      store
    } 
  }
}