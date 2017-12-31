import { CHANGE_BIT, LOGICAL_OPERATION, BITGROUP_ACTION, SHOW_INFO, SHOW_FLAGS, SHOW_DECINFO }  from '../actions/logicalActions'
import changeBit                          from './changeBitReducer.js'
import operationSwitch                    from './operations/operationSwitch.js'
import bitgroupOperation                  from './operations/bitgroupOperation.js'

const initialState = {
  bits0:  [0, 0, 0, 1, 0, 1, 1, 1],
  bits1:  [0, 0, 1, 0, 1, 0, 1, 0],
  result: [0, 0, 0, 0, 0, 0, 0, 0],
  flags:  {carry: 0, zero: 1, parity: 1, overflow: 0},
  decValues: {bits0: 23, bits1: 42, result: 0, rest:0},
  activeOperation: 'info',
  activeGroup: 0,
  info: {
    info: ['Info', 'Die Operanden und das Ergebnis sind als Byte dargestellt. Operationen werden auf die Bytes angewendet. Das Ergebnis ist dezimal rechts zu sehen. Flags werden ggf. bei der Berechnung gesetzt.'],
    info_flags: ['Flags', 'Zero-Flag: Wird gesetzt, wenn das Ergebnis nur aus 0 besteht. Carry-Flag: Wird bei add/mul als Übertragsbit für 256 verwendet, bei Subtraktion als Borrow-Bit gesetzt. Parity-Flag: Wird bei einer geraden Anzahl von 1 gesetzt.'],
    info_dec:  ['Dezimale Werte', 'Hier ist die dezimale Darstellung der einzelnen Bytes (Operand 1, Operand 2 und das Ergebnis) zu sehen. Der Eintrag Rest stellt den Rest dar, der bei einer Multiplikation oder Division nicht dargestellt werden kann.'],
    and:  ['and', 'Die logische und-Verknüpfung wird auch als Konjunktion bezeichnet. Das Ergebnis ist dann wahr, wenn beide Bits wahr sind. Ansonsten ist das Ergebnis falsch. Hier wird ggf. das Zero- und das Parity-Flag gesetzt.'],
    or:   ['or', 'Das inklusive oder wird auf zwei Operanden angewendet. Das Ergebnis ist wahr, wenn einer der beiden Bits wahr ist. Falls beide falsch sind, ist das Ergebnis auch falsch. Das Zero- und das Parity-Flag wird ggf. gesetzt.'],
    xor:  ['xor', 'Das exklusive oder wird auch als Kontravalenz bezeichnet. Das Ergebnis ist dann wahr, wenn genau einer der beiden Bits wahr ist. Das Zero- und das Parity-Flag wird ggf. bei der Operation gesetzt.'],
    xnor: ['xnor', 'Das exklusive nicht oder wird als Äquivalenz bezeichnet. Das Ergebnis ist dann wahr, wenn beide Bits identisch sind. Falls ein Bit unterschiedlich ist, ist das Ergebnis falsch. Zero- und Parity-Flag werden ggf. gesetzt.'],
    add:  ['add', 'add ist das binäre addieren beider Operanden. Wenn das Ergebnis größer als 255 ist, wird das Carry-Flag für den Übertrag (als neuntes Bit) gesetzt. Das Zero- und Parity-Flag wird gesetzt, falls die Bedingungen wahr sind.'],
    sub:  ['sub', 'sub ist das binäre subtrahieren der Bits. Wenn das Ergebnis negativ ist, wird das Carry-Flag gesetzt. Das Zero- und Parity-Flag wird ggf. gesetzt wenn die Bedingungen erfüllt sind.'],
    mul:  ['mul', 'mul ist das binäre multiplizieren beider Operanden. Wenn das Ergebnis über 255 ist, wird das Carry-Flag gesetzt. Das Zero- und Parity-Flag werden gesetzt, falls die Bedingungen wahr sind.'],
    div:  ['div', 'div ist das binäre dividieren beider Operanden. Hier wird das Ergebnis als binärzahl dargestellt. Das Parity- und Zero-Flag wird gesetzt, falls die Bedingungen dafür erfüllt sind.'],
    not:  ['not', 'Die Negation wirkt sich auf eine Bitgruppe aus. Hierbei wird jedes Bit negiert, das bedeutet aus einer 0 eine 1 wird und umgekehrt. Flags werden bei der Operation nicht gesetzt.'],
    shl:  ['shift left', 'Die Operation wirkt sich auf eine Bitgruppe aus. Hierbei wird die Bitgruppe nach links verschoben. Das rechte Bit wird auf 0 gesetzt und das linke Bit geht ins das Carry-Flag. Parity- und Zero-Flag werden nicht gesetzt.'],
    shr:  ['shift right', 'Die Operation wirkt sich auf eine Bitgruppe aus. Hierbei wird die Bitgruppe nach rechts verschoben. Das linke Bit wird auf 0 gesetzt und das rechte Bit geht ins das Carry-Flag. Parity- und Zero-Flag werden nicht gesetzt.'],
  }

}

function logicalReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BIT:
      return {
        ...state,
          action: changeBit(state, action)
        }
    case LOGICAL_OPERATION:
      return {
        ...state,
        action: operationSwitch(state, action)
      }
    case BITGROUP_ACTION:
      return {
        ...state,
          action: bitgroupOperation(state, action)
        }
    case SHOW_INFO:
      state.activeOperation = 'info';
      return {
        ...state,
          action: state
        }
    case SHOW_FLAGS:
        state.activeOperation = 'info_flags';
        return {
          ...state,
            action: state
          }
    case SHOW_DECINFO:
        state.activeOperation = 'info_dec';
        return {
          ...state,
            action: state
          }
    default:
      return state
  }
}

export default logicalReducer;
