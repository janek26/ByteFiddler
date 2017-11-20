import * as l             from "../../actions/logicalActions";
import Button             from '../logicalComponents/Button';

import { createStore }    from 'redux'
import logicalReducer     from '../../reducers/logicalReducer';

const store = createStore(logicalReducer);
let result = store.getState().result;

const andBits   = index => store.dispatch(l.andBits(index))
const orBits    = index => store.dispatch(l.orBits(index))
const xorBits   = index => store.dispatch(l.xorBits(index))
const xnorBits  = index => store.dispatch(l.xnorBits(index))
const addBits   = index => store.dispatch(l.addBits(index))
const subBits   = index => store.dispatch(l.subBits(index))
const mulBits   = index => store.dispatch(l.mulBits(index))
const divBits   = index => store.dispatch(l.divBits(index))

export default class BitOperationButtonGroup extends React.Component {
  render() {
    return(
      <div>
        <Button onClick={andBits} text="and"/>
        <Button onClick={orBits} text="or"/>
        <Button onClick={xorBits} text="xor"/>
        <Button onClick={xnorBits} text="xnor"/>
        <Button onClick={addBits} text="add"/>
        <Button onClick={subBits} text="sub"/>
        <Button onClick={mulBits} text="mul"/>
        <Button onClick={divBits} text="div"/>
      </div>
    )
  }
}
