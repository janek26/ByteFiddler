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
      changePosition0: bindActionCreators(bAct.changePosition0, dispatch),
      changePosition1: bindActionCreators(bAct.changePosition1, dispatch),
      changePosition2: bindActionCreators(bAct.changePosition2, dispatch),
      changePosition3: bindActionCreators(bAct.changePosition3, dispatch),
      changePosition4: bindActionCreators(bAct.changePosition4, dispatch),
      changePosition5: bindActionCreators(bAct.changePosition5, dispatch),
      changePosition6: bindActionCreators(bAct.changePosition6, dispatch),
      changePosition7: bindActionCreators(bAct.changePosition7, dispatch),
    })
  )(ReduxComponent)
)
