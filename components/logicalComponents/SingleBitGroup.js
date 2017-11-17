"use strict";

import BitDisplay         from '../BitDisplay';
import BitButtonGroup     from '../logicalComponents/BitButtonGroup';

let firstBitgroup   = [1, 0, 1, 0, 1, 0, 1, 0];
let secondBitgroup  = [0, 1, 0, 1, 0, 1, 0, 1];

export default class SingleBitGroup extends React.Component {
  render() {
    let name  = this.props.id;
    let topic = this.props.topic;

    return(
      <div>
        <h3>{topic}</h3>
        <BitDisplay
          digits={firstBitgroup}
          fixedNumberOfBits={8}
          id="{name}" />
        <BitButtonGroup
          id="firstBitgroup" />
      </div>
    )
  }
}
