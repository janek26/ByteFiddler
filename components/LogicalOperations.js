"use strict";

import BitDisplay         from '../components/BitDisplay';
import BitButtonGroup     from '../components/BitButtonGroup';
import BitOperationsGroup from '../components/BitOperationsGroup';


let CreateCaption = props => (<h3>{props.topic}</h3>);

export default class LogicalOperations extends React.Component {
  state = {
    /** States of single bits */
    firstBitgroup:  [1, 0, 1, 0, 1, 0, 1, 0],
    secondBitgroup: [0, 1, 0, 1, 0, 1, 0, 1],
    result:         [0, 0, 0, 0, 0, 0, 0, 0]
  };

  render() {
    return(
      <div>
        <CreateCaption topic="Operand 1" />
        <BitDisplay
          digits={this.state.firstBitgroup}
          fixedNumberOfBits={8}
          id="firstBitDisplay" />
        <BitButtonGroup
          numbers={[7, 6, 5, 4, 3, 2, 1, 0]}
          id="firstBitgroup" />

        <BitOperationsGroup />
        <CreateCaption topic="Operand 2" />
        <BitDisplay
          digits={this.state.secondBitgroup}
          fixedNumberOfBits={8}
          id="secondBitDisplay" />
        <BitButtonGroup
          numbers={[7, 6, 5, 4, 3, 2, 1, 0]}
          id="secondBitgroup" />

        <CreateCaption topic="Result" />
        <BitDisplay
          digits={this.state.result}
          fixedNumberOfBits={8}
          id="resultBitDisplay" />
      </div>
    )
  }
}
