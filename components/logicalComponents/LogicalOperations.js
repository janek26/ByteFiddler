"use strict";

import BitDisplay                 from '../BitDisplay';
import SingleBitGroup             from '../logicalComponents/SingleBitGroup';
import BitOperationButtonGroup    from '../logicalComponents/BitOperationButtonGroup';
import { createStore }            from 'redux'
import logicalReducer             from '../../reducers'

let result =
  createStore(logicalReducer)
  .getState()
  .logicalReducer[0]
  .result;

let CreateCaption = props => (<h3>{props.topic}</h3>);

export default class LogicalOperations extends React.Component {
  render() {

    return(
      <div>
        <SingleBitGroup
          name="firstBitDisplay"
          topic="Operand 1" /><br />

        <BitOperationButtonGroup />

        <SingleBitGroup
          name="secondBitDisplay"
          topic="Operand 2" />

        <CreateCaption topic="Result" />
        <BitDisplay
          digits={result}
          fixedNumberOfBits={8}
          id="resultBitDisplay" />
      </div>
    )
  }
}
