import { Component } from 'react'
import BitDisplay from '../components/BitDisplay'
import LogicalOperations from '../components/LogicalOperations'


function BitButton(props) {
  return <button className={props.position}>{props.position}</button>;
}

function ButtonGroup(props) {
  return (
    <div id={props.name}>
      <BitButton name={props.name} position="7" />
      <BitButton name={props.name} position="6" />
      <BitButton name={props.name} position="5" />
      <BitButton name={props.name} position="4" />
      <BitButton name={props.name} position="3" />
      <BitButton name={props.name} position="2" />
      <BitButton name={props.name} position="1" />
      <BitButton name={props.name} position="0" />
    </div>
  );
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
        name="firstGroup"
      />

      <h3 style={LogicalOperations.captionStyle}>Operand 2</h3>
      <BitDisplay
        digits={[0, 0, 0, 0, 0, 0, 0, 0]}
        fixedNumberOfBits={8}
        id="secondBitDisplay"
      />
      <ButtonGroup
        name="secondGroup"
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
