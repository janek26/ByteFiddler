import { Component } from 'react'
import BitDisplay from '../components/BitDisplay'
import LogicalOperations from '../components/LogicalOperations'


/**
 * function CreateCaption()
 * Creates captions for the Bitgroups
 *
 * props.topic:      Topic
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

      <CreateCaption topic="Operand 1" />
      <BitDisplay
        digits={[0, 0, 0, 0, 0, 0, 0, 0]}
        fixedNumberOfBits={8}
        id="firstBitDisplay" />
      <ButtonGroup
        numbers={[7, 6, 5, 4, 3, 2, 1, 0]}
        id="firstBitButtonGroup" />

      <CreateCaption topic="Operand 2" />
      <BitDisplay
        digits={[0, 0, 0, 0, 0, 0, 0, 0]}
        fixedNumberOfBits={8}
        id="secondBitDisplay" />
      <ButtonGroup
        numbers={[7, 6, 5, 4, 3, 2, 1, 0]}
        id="secondBitButtonGroup" />

      <CreateCaption topic="Result" />
      <BitDisplay
        digits={[0, 0, 0, 0, 0, 0, 0, 0]}
        fixedNumberOfBits={8}
        id="resultBitDisplay" />
      </div>
    )
  }
}
