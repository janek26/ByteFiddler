"use strict";

import { Component }      from 'react';
import BitDisplay         from '../BitDisplay';
import BitButtonGroup     from '../logicalComponents/BitButtonGroup';

import { createStore } from 'redux'
import logicalReducer from '../../reducers'
let store = createStore(logicalReducer)

let firstBitgroup   = store.getState().logicalReducer[0].bits0;
let secondBitgroup  = store.getState().logicalReducer[0].bits1;

class SingleBitGroup extends Component {
  render() {
    let name  = this.props.id;
    let topic = this.props.topic;

    return(
      <div>
        <h3>{topic}</h3>
        <BitDisplay
          digits={firstBitgroup}
          fixedNumberOfBits={8}
          id="{name}" />
        <BitButtonGroup />
      </div>
    )
  }
}

export default SingleBitGroup
