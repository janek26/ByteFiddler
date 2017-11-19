"use strict";

import {Component}            from 'react';
import withRedux              from 'next-redux-wrapper'
import { bindActionCreators } from "redux";
import { connect }            from "react-redux";
import { initStore }          from '../store'

import LogicalOperations  from '../components/logicalComponents/LogicalOperations';

import * as lAct from "../actions/logicalActions";
import * as bAct  from "../actions/bitButtonActions";

class ReduxComponent extends Component {
  render() {
    return (
      <div>
        <LogicalOperations />
      </div>
    )
  }
}

const mapStateToProps = state => state

export default withRedux(initStore)(
  connect(
    s => s,
    dispatch => ({
      andBits: bindActionCreators(lAct.andBits, dispatch),
      orBits: bindActionCreators(lAct.orBits, dispatch),
      xorBits: bindActionCreators(lAct.xorBits, dispatch),
      xnorBits: bindActionCreators(lAct.xnorBits, dispatch),
      addBits: bindActionCreators(lAct.addBits, dispatch),
      subBits: bindActionCreators(lAct.subBits, dispatch),
      mulBits: bindActionCreators(lAct.mulBits, dispatch),
      divBits: bindActionCreators(lAct.divBits, dispatch),
      changeBitPosition: bindActionCreators(bAct.changeBitPosition, dispatch),
    })
  )(ReduxComponent)
)
