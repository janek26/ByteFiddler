"use strict";

import BitDisplay         from '../BitDisplay';
import BitOperationsGroup from '../logical-operations/BitOperationsGroup';
import SingleBitGroup     from '../logical-operations/SingleBitGroup';

/** States of single bits */
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
          topic="Operand 2" />

        <CreateCaption topic="Result" />
        <BitDisplay
          digits={result}
          fixedNumberOfBits={8}
          id="resultBitDisplay" />
      </div>
    )
  }
}
