import * as b from "../../actions/bitButtonActions";
import BitButton from '../logicalComponents/BitButton';

export default class BitButtonGroup extends React.Component {
  render() {
    return(
      <div>
      <BitButton onClick={b.changeBitPosition} index="7" text="Bit 7"/>
      <BitButton onClick={b.changeBitPosition} index="6" text="Bit 6"/>
      <BitButton onClick={b.changeBitPosition} index="5" text="Bit 5"/>
      <BitButton onClick={b.changeBitPosition} index="4" text="Bit 4"/>
      <BitButton onClick={b.changeBitPosition} index="3" text="Bit 3"/>
      <BitButton onClick={b.changeBitPosition} index="2" text="Bit 2"/>
      <BitButton onClick={b.changeBitPosition} index="1" text="Bit 1"/>
      <BitButton onClick={b.changeBitPosition} index="0" text="Bit 0"/>
      </div>
    )
  }
}
