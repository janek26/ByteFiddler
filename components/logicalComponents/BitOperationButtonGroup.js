import * as l from "../../actions/logicalActions";
import BitOperationButton from '../logicalComponents/BitOperationButton';

export default class BitOperationButtonGroup extends React.Component {
  render() {
    return(
      <div>
        <BitOperationButton onClick={l.andBits} text="and"/>
        <BitOperationButton onClick={l.orBits} text="or"/>
        <BitOperationButton onClick={l.xorBits} text="xor"/>
        <BitOperationButton onClick={l.xnorBits} text="xnor"/>
        <BitOperationButton onClick={l.addBits} text="add"/>
        <BitOperationButton onClick={l.subBits} text="sub"/>
        <BitOperationButton onClick={l.mulBits} text="mul"/>
        <BitOperationButton onClick={l.divBits} text="div"/>
      </div>
    )
  }
}
