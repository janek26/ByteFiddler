"use strict";


/**
 * BitButtonGroup
 * Creates a group of Buttons for switching different bit-positions
 *
 * props.numbers:  Array with numbers for identification
 * props.id:       Group-ID
 */
export default class BitButtonGroup extends React.Component {
  handleBitClick (groupId, number, e) {
    if (groupId == 'firstBitgroup')
        console.log(groupId, number);
    else if (groupId == 'secondBitgroup')
        console.log(groupId, number);
  }

  render() {
    let groupId = this.props.id;

    /** Mapping Numbers to Buttons */
    let buttonItems = this.props.numbers.map((number) =>
      <button
      key={groupId+number}
      className={'b'+number}
      onClick={(e) => this.handleBitClick(groupId, number, e)}>Bit {number}</button>
    );

    return (
      <div id={groupId}>
        {buttonItems}
      </div>
    );
  }
};
