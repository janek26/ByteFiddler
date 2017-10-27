"use strict";

import BitDisplay         from '../BitDisplay';
import BitButtonGroup     from '../logical-operations/BitButtonGroup';
import BitOperationsGroup from '../logical-operations/BitOperationsGroup';


let CreateCaption = props => (<h3>{props.topic}</h3>);

export default class LogicalOperations extends React.Component {
  render() {
    /** States of single bits */
    let firstBitgroup   = [1, 0, 1, 0, 1, 0, 1, 0];
    let secondBitgroup  = [0, 1, 0, 1, 0, 1, 0, 1];
    let result          = [0, 0, 0, 0, 0, 0, 0, 0];

    return(
      <div>
        <CreateCaption topic="Operand 1" />
        <BitDisplay
          digits={firstBitgroup}
          fixedNumberOfBits={8}
          id="firstBitDisplay" />
        <BitButtonGroup
          numbers={[7, 6, 5, 4, 3, 2, 1, 0]}
          id="firstBitgroup" />

        <BitOperationsGroup />
        <CreateCaption topic="Operand 2" />
        <BitDisplay
          digits={secondBitgroup}
          fixedNumberOfBits={8}
          id="secondBitDisplay" />
        <BitButtonGroup
          numbers={[7, 6, 5, 4, 3, 2, 1, 0]}
          id="secondBitgroup" />

        <CreateCaption topic="Result" />
        <BitDisplay
          digits={result}
          fixedNumberOfBits={8}
          id="resultBitDisplay" />
      </div>
    )
  }
}
