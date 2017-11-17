import { andBits, orBits, xorBits, xnorBits } from "../../actions/logicalActions";
import { addBits, subBits, mulBits, divBits } from "../../actions/logicalActions";
import BitOperationButton from '../logicalComponents/BitOperationButton';

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
