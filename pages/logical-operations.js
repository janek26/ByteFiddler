import { Component } from 'react'
import BitDisplay from '../components/BitDisplay'
import LogicalOperations from '../components/LogicalOperations'


/**
 * function CreateCaption()
 * Creates captions for the Bitgroups
 *
 * props.topic:      Caption for the Bitgroup
 */
function CreateCaption(props) {
  var topicElement = React.createElement(
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
  )

  return topicElement
}


function handleClick(number, e) {
  console.log(number);
}

/**
 * function ButtonGroup()
 * Creates a group of Buttons for switching different bit-positions
 *
 * props.numbers:  Array with numbers for identification
 * props.id:       Group-ID
 */
function ButtonGroup(props) {
  /** Mapping Numbers to Buttons */
  const buttonItems = props.numbers.map((number) =>
    <button
      id={props.id+number}
      className={number}change={number}
      onClick={(e) => handleClick(number, e)}>Bit {number}</button>
  );

  return (
    <div id={props.id}>
      {buttonItems}
    </div>
  )
}

export default class LogicalOperationsPage extends Component {

  state = {
    /** States of single bits */
    firstBitgroup:  [0, 0, 0, 0, 0, 0, 0, 0],
    secondBitgroup: [0, 0, 0, 0, 0, 0, 0, 0],
    result:         [0, 0, 0, 0, 0, 0, 0, 0]
  }

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
        id="firstBitButtonGroup" />

      <CreateCaption topic="Operand 2" />
      <BitDisplay
        digits={this.state.secondBitgroup}
        fixedNumberOfBits={8}
        id="secondBitDisplay" />
      <ButtonGroup
        numbers={[7, 6, 5, 4, 3, 2, 1, 0]}
        id="secondBitButtonGroup" />

      <CreateCaption topic="Result" />
      <BitDisplay
        digits={this.state.result}
        fixedNumberOfBits={8}
        id="resultBitDisplay" />
      </div>
    )
  }
}
