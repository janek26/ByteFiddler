import { Component } from 'react'
import BitDisplay from '../components/BitDisplay'
import LogicalOperations from '../components/LogicalOperations'


/**
 * function ButtonGroup()
 * Creates a group of Buttons for switching different bit-positions
 *
 * props.numbers:  Array with numbers for identification
 * props.id:        Group-ID
 */
function ButtonGroup(props) {
  // Mapping Numbers to Buttons
  const buttonItems = props.numbers.map((number) =>
    <button id={props.id+number} className={number}>{number}</button>
  );

  return (
    <div id={props.id}>
      {buttonItems}
    </div>
  )
}


export default class LogicalOperationsPage extends Component {
  render () {

    return (
      <div>
      <LogicalOperations />
      <h3 style={LogicalOperations.captionStyle}>Operand 1</h3>
      <BitDisplay
        digits={[0, 0, 0, 0, 0, 0, 0, 0]}
        fixedNumberOfBits={8}
        id="firstBitDisplay"
      />
      <ButtonGroup
        numbers={[7, 6, 5, 4, 3, 2, 1, 0]}
        id="firstBitButtonGroup"
      />

      <h3 style={LogicalOperations.captionStyle}>Operand 2</h3>
      <BitDisplay
        digits={[0, 0, 0, 0, 0, 0, 0, 0]}
        fixedNumberOfBits={8}
        id="secondBitDisplay"
      />
      <ButtonGroup
        numbers={[7, 6, 5, 4, 3, 2, 1, 0]}
        id="secondBitButtonGroup"
      />

      <h3 style={LogicalOperations.captionStyle}>Result</h3>
      <BitDisplay
        digits={[0, 0, 0, 0, 0, 0, 0, 0]}
        fixedNumberOfBits={8}
        id="resultBitDisplay"
      />

      </div>
    )
  }
}
