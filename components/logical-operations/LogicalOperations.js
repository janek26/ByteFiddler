"use strict";

import BitDisplay         from '../BitDisplay';
import BitButtonGroup     from '../logical-operations/BitButtonGroup';
import BitOperationsGroup from '../logical-operations/BitOperationsGroup';

/** States of single bits */
let firstBitgroup   = [1, 0, 1, 0, 1, 0, 1, 0];
let secondBitgroup  = [0, 1, 0, 1, 0, 1, 0, 1];
let result          = [0, 0, 0, 0, 0, 0, 0, 0];


let CreateCaption = props => (<h3>{props.topic}</h3>);

export default class LogicalOperations extends React.Component {
  render() {

    return(
      <div>
        <SingleBitGroup
          name="firstBitDisplay"
          topic="Operand 1" />
        <BitOperationsGroup />

        <SingleBitGroup
          name="secondBitDisplay"
          topic="Operand 1" />

        <CreateCaption topic="Result" />
        <BitDisplay
          digits={result}
          fixedNumberOfBits={8}
          id="resultBitDisplay" />
      </div>
    )
  }
}
