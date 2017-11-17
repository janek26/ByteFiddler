import * as b from "../../actions/bitButtonActions";
import BitButton from '../logicalComponents/BitButton';

export default class BitButtonGroup extends React.Component {
  render() {
    return(
      <div>
      <BitButton onClick={b.changePosition7} text="Bit 7"/>
      <BitButton onClick={b.changePosition6} text="Bit 6"/>
      <BitButton onClick={b.changePosition5} text="Bit 5"/>
      <BitButton onClick={b.changePosition4} text="Bit 4"/>
      <BitButton onClick={b.changePosition3} text="Bit 3"/>
      <BitButton onClick={b.changePosition2} text="Bit 2"/>
      <BitButton onClick={b.changePosition1} text="Bit 1"/>
      <BitButton onClick={b.changePosition0} text="Bit 0"/>
      </div>
    )
  }
}
