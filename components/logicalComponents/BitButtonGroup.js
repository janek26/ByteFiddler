import * as b             from "../../actions/bitButtonActions";
import BitButton          from '../logicalComponents/BitButton';

import { createStore }    from 'redux'
import logicalReducer     from '../../reducers/logicalReducer';

const store = createStore(logicalReducer);
let result = store.getState().result;

const changeBit0 = index => store.dispatch(b.changeBit0(index))
const changeBit1 = index => store.dispatch(b.changeBit1(index))
const changeBit2 = index => store.dispatch(b.changeBit2(index))
const changeBit3 = index => store.dispatch(b.changeBit3(index))
const changeBit4 = index => store.dispatch(b.changeBit4(index))
const changeBit5 = index => store.dispatch(b.changeBit5(index))
const changeBit6 = index => store.dispatch(b.changeBit6(index))
const changeBit7 = index => store.dispatch(b.changeBit7(index))

export default class BitButtonGroup extends React.Component {
  render() {
    return(
      <div>
      <BitButton onClick={changeBit7} index="7" text="Bit 7"/>
      <BitButton onClick={changeBit6} index="6" text="Bit 6"/>
      <BitButton onClick={changeBit5} index="5" text="Bit 5"/>
      <BitButton onClick={changeBit4} index="4" text="Bit 4"/>
      <BitButton onClick={changeBit3} index="3" text="Bit 3"/>
      <BitButton onClick={changeBit2} index="2" text="Bit 2"/>
      <BitButton onClick={changeBit1} index="1" text="Bit 1"/>
      <BitButton onClick={changeBit0} index="0" text="Bit 0"/>
      </div>
    )
  }
}
