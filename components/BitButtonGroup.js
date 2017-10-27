"use strict";

import {Component}        from 'react';

let handleClick = (groupId, number, e) => {
  if (groupId == 'firstBitgroup')
      console.log(groupId, number);
  else if (groupId == 'secondBitgroup')
      console.log(groupId, number);
};

/**
 * BitButtonGroup
 * Creates a group of Buttons for switching different bit-positions
 *
 * props.numbers:  Array with numbers for identification
 * props.id:       Group-ID
 */
export default class BitButtonGroup extends Component {
  render() {
    let groupId = this.props.id;

    /** Mapping Numbers to Buttons */
    let buttonItems = this.props.numbers.map((number) =>
      <button
      key={groupId+number}
      className={'b'+number}
      onClick={(e) => handleClick(groupId, number, e)}>Bit {number}</button>
    );

    return (
      <div id={groupId}>
        {buttonItems}
      </div>
    );
  }
};
