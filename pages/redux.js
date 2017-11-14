import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from "redux";
import { initStore } from '../store'
import { connect } from "react-redux";

import { createTodo } from "../actions/todos";

class ReduxComponent extends Component {

  render() {
    return (
      <pre onClick={() => this.props.createTodo('test')} >
        {JSON.stringify(this.props, null, 2)||'NOTHING TO SHOW'}
      </pre>
    )
  }
}

const mapStateToProps = state => 
  state

export default withRedux(initStore)(
  connect(
    s => s,
    dispatch => ({
      createTodo: bindActionCreators(createTodo, dispatch)
    })
  )(ReduxComponent)
)