import { Component } from 'react'
import BitDisplay from '../components/BitDisplay'
import LogicalOperations from '../components/LogicalOperations'


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

      <h3 style={LogicalOperations.captionStyle}>Operand 2</h3>
      <BitDisplay
        digits={[0, 0, 0, 0, 0, 0, 0, 0]}
        fixedNumberOfBits={8}
        id="secondBitDisplay"
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
