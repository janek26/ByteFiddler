"use strict";

import {Component}            from 'react';
import withRedux              from 'next-redux-wrapper'
import { bindActionCreators } from "redux";
import { initStore }          from '../store'
import { connect }            from "react-redux";

import LogicalOperations  from '../components/logicalComponents/LogicalOperations';

import { andBits, orBits, xorBits, xnorBits } from "../actions/logicalActions";
import { addBits, subBits, mulBits, divBits } from "../actions/logicalActions";

import { changePosition0, changePosition1, changePosition2, changePosition3 }   from "../actions/bitButtonActions";
import { changePosition4, changePosition5, changePosition6, changePosition7 }   from "../actions/bitButtonActions";
class ReduxComponent extends Component {

  render() {
    return (
      <div>
        <LogicalOperations />
      </div>

    )
  }
}

const mapStateToProps = state =>
  state

export default withRedux(initStore)(
  connect(
    s => s,
    dispatch => ({
      andBits: bindActionCreators(andBits, dispatch),
      orBits: bindActionCreators(orBits, dispatch),
      xorBits: bindActionCreators(xorBits, dispatch),
      xnorBits: bindActionCreators(xnorBits, dispatch),
      addBits: bindActionCreators(addBits, dispatch),
      subBits: bindActionCreators(subBits, dispatch),
      mulBits: bindActionCreators(mulBits, dispatch),
      divBits: bindActionCreators(divBits, dispatch),
      changePosition0: bindActionCreators(changePosition0, dispatch),
      changePosition1: bindActionCreators(changePosition1, dispatch),
      changePosition2: bindActionCreators(changePosition2, dispatch),
      changePosition3: bindActionCreators(changePosition3, dispatch),
      changePosition4: bindActionCreators(changePosition4, dispatch),
      changePosition5: bindActionCreators(changePosition5, dispatch),
      changePosition6: bindActionCreators(changePosition6, dispatch),
      changePosition7: bindActionCreators(changePosition7, dispatch),
    })
  )(ReduxComponent)
)
