"use strict";

import {Component}        from 'react';
import BitDisplay         from '../components/BitDisplay';
import LogicalOperations  from '../components/LogicalOperations';


/**
 * CreateCaption()
 * Creates captions for the Bitgroups
 *
 * props.topic:      Caption for the Bitgroup
 */
let CreateCaption = props => React.createElement(
    'h3',
    {
      style: {
        marginBottom: '0px',
        width: '480px',
        fontSize: '1em',
        textAlign: 'center'
      }
    },
    props.topic
  );


/**
 * ButtonGroup()
 * Creates a group of Buttons for switching different bit-positions
 *
 * props.numbers:  Array with numbers for identification
 * props.id:       Group-ID
 */
 let ButtonGroup = props => {
  let groupId = props.id;

  /** Mapping Numbers to Buttons */
  let buttonItems = props.numbers.map((number) =>
    <button
      key={groupId+number}
      className={'b'+number}
      onClick={(e) => handleClick(groupId, number, e)}>Bit {number}</button>
  );

  return (
    <div id={props.id}>
      {buttonItems}
    </div>
  );
};


let handleClick = (groupId, number, e) => {
  if (groupId == 'firstBitgroup')
      console.log(groupId, number);
  else if (groupId == 'secondBitgroup')
      console.log(groupId, number);
};


export default class LogicalOperationsPage extends Component {
  state = {
    /** States of single bits */
    firstBitgroup:  [1, 0, 1, 0, 1, 0, 1, 0],
    secondBitgroup: [0, 1, 0, 1, 0, 1, 0, 1],
    result:         [0, 0, 0, 0, 0, 0, 0, 0]
  };

  render () {
    return (
      <div>
      <LogicalOperations />

      <CreateCaption topic="Operand 1" />
      <BitDisplay
        digits={this.state.firstBitgroup}
        fixedNumberOfBits={8}
        id="firstBitDisplay" />
      <ButtonGroup
        numbers={[7, 6, 5, 4, 3, 2, 1, 0]}
        id="firstBitgroup" />

      <CreateCaption topic="Operand 2" />
      <BitDisplay
        digits={this.state.secondBitgroup}
        fixedNumberOfBits={8}
        id="secondBitDisplay" />
      <ButtonGroup
        numbers={[7, 6, 5, 4, 3, 2, 1, 0]}
        id="secondBitgroup" />

      <CreateCaption topic="Result" />
      <BitDisplay
        digits={this.state.result}
        fixedNumberOfBits={8}
        id="resultBitDisplay" />
      </div>
    );
  }
}
