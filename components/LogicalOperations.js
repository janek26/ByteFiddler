"use strict";

import {Component}        from 'react';
import BitDisplay         from '../components/BitDisplay';
import BitButtonGroup     from '../components/BitButtonGroup';


let CreateCaption = props => (<h3>{props.topic}</h3>);

export default class LogicalOperations extends Component {
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

      <div className="operands"><br />
        <button id="or">or</button>
        <button id="and">and</button>
        <button id="xor">xor</button>
        <button id="xnor">xnor</button>

        <button id="add">add</button>
        <button id="sub">sub</button>
        <button id="mul">mul</button>
        <button id="div">div</button>
      </div>

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
