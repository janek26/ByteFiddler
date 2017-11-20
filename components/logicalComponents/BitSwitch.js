import * as b             from "../../actions/bitButtonActions";
import Button             from '../logicalComponents/Button';

import { createStore }    from 'redux'
import logicalReducer     from '../../reducers/logicalReducer';

const store = createStore(logicalReducer);
let result = store.getState().result;


export default class BitSwitch extends React.Component {
  render() {
    let name = this.props.name
    var changeBits = [0, 1, 2, 3, 4, 5, 6, 7].map(function(x) {
      return index => store.dispatch(b.changeBit(x, name));
    });

    return(
      <div>
        <Button onClick={changeBits[7]} index="7" text="Bit 7"/>
        <Button onClick={changeBits[6]} index="6" text="Bit 6"/>
        <Button onClick={changeBits[5]} index="5" text="Bit 5"/>
        <Button onClick={changeBits[4]} index="4" text="Bit 4"/>
        <Button onClick={changeBits[3]} index="3" text="Bit 3"/>
        <Button onClick={changeBits[2]} index="2" text="Bit 2"/>
        <Button onClick={changeBits[1]} index="1" text="Bit 1"/>
        <Button onClick={changeBits[0]} index="0" text="Bit 0"/>
      </div>
    )
  }
}
