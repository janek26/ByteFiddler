import * as l             from "../../actions/logicalActions";
import BitOperationButton from '../logicalComponents/BitOperationButton';

import { createStore }    from 'redux'
import logicalReducer     from '../../reducers/logicalReducer';

const store = createStore(logicalReducer);
let result = store.getState().result;

const andBits = index => store.dispatch(l.andBits(index))
const orBits = index => store.dispatch(l.orBits(index))
const xorBits = index => store.dispatch(l.xorBits(index))
const xnorBits = index => store.dispatch(l.xnorBits(index))
const addBits = index => store.dispatch(l.addBits(index))
const subBits = index => store.dispatch(l.subBits(index))
const mulBits = index => store.dispatch(l.mulBits(index))
const divBits = index => store.dispatch(l.divBits(index))

export default class BitOperationButtonGroup extends React.Component {
  render() {
    return(
      <div>
        <BitOperationButton onClick={andBits} text="and"/>
        <BitOperationButton onClick={orBits} text="or"/>
        <BitOperationButton onClick={xorBits} text="xor"/>
        <BitOperationButton onClick={xnorBits} text="xnor"/>
        <BitOperationButton onClick={addBits} text="add"/>
        <BitOperationButton onClick={subBits} text="sub"/>
        <BitOperationButton onClick={mulBits} text="mul"/>
        <BitOperationButton onClick={divBits} text="div"/>
      </div>
    )
  }
}
