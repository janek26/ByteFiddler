"use strict";

import {Component}            from 'react';
import withRedux              from 'next-redux-wrapper'
import { bindActionCreators } from "redux";
import { initStore }          from '../store'
import { connect }            from "react-redux";

import LogicalOperations  from '../components/logicalComponents/LogicalOperations';

import { andBits, orBits, xorBits, xnorBits } from "../actions/logicalActions";
import { addBits, subBits, mulBits, divBits } from "../actions/logicalActions";

class ReduxComponent extends Component {

  render() {
    return (
    <div>
      <pre onClick={() => this.props.mulBits('test')} >
        {JSON.stringify(this.props, null, 2)||'NOTHING TO SHOW'}
      </pre>
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
      divBits: bindActionCreators(divBits, dispatch)
    })
  )(ReduxComponent)
)
