import { Component } from 'react'
import BitDisplay from '../components/BitDisplay'
import LogicalOperations from '../components/LogicalOperations'


export default class LogicalOperationsPage extends Component {

  render () {
    return (
      <div>
      <LogicalOperations />
      <h3>Operand 1</h3>
      <BitDisplay
        digits={[7, 6, 5, 4, 3, 2, 1, 0]}
        fixedNumberOfBits={8}
        id="firstBitDisplay"
      />

      <h3>Operand 2</h3>
      <BitDisplay
        digits={[7, 6, 5, 4, 3, 2, 1, 0]}
        fixedNumberOfBits={8}
        id="secondBitDisplay"
      />


      <h3>Result</h3>
      <BitDisplay
        digits={[7, 6, 5, 4, 3, 2, 1, 0]}
        fixedNumberOfBits={8}
        id="resultBitDisplay"
      />

      </div>
    )
  }
}
