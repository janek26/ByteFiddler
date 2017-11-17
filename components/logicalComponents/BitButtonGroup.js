import { changePosition7, changePosition6, changePosition5, changePosition4 } from "../../actions/bitButtonActions";
import { changePosition3, changePosition2, changePosition1, changePosition0 } from "../../actions/bitButtonActions";
import BitButton from '../logicalComponents/BitButton';

export default class BitButtonGroup extends React.Component {
  render() {
    return(
      <div>
      <BitButton onClick={changePosition7} text="Bit 7"/>
      <BitButton onClick={changePosition6} text="Bit 6"/>
      <BitButton onClick={changePosition5} text="Bit 5"/>
      <BitButton onClick={changePosition4} text="Bit 4"/>
      <BitButton onClick={changePosition3} text="Bit 3"/>
      <BitButton onClick={changePosition2} text="Bit 2"/>
      <BitButton onClick={changePosition1} text="Bit 1"/>
      <BitButton onClick={changePosition0} text="Bit 0"/>
      </div>
    )
  }
}
