import { Component } from 'react'
import BitDisplay from '../components/BitDisplay'
import LogicalOperations from '../components/LogicalOperations'


export default class LogicalOperationsPage extends Component {

  render () {
    return (
      <div>

      <LogicalOperations />
      <BitDisplay
        digits={[7, 6, 5, 4, 3, 2, 1, 0]}
        fixedNumberOfBits={8}
        id="firstBitDisplay"
      />

      <BitDisplay
        digits={[7, 6, 5, 4, 3, 2, 1, 0]}
        fixedNumberOfBits={8}
        id="secondBitDisplay"
      />

      <BitDisplay
        digits={[7, 6, 5, 4, 3, 2, 1, 0]}
        fixedNumberOfBits={8}
        id="resultBitDisplay"
      />

      </div>
    )
  }
}
