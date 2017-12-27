export const CHANGE_LAMPE = 'CHANGE_LAMPE'

export function changeLampe(colour, value) {
  return { type: CHANGE_LAMPE, payload: [colour, value] }
}
