import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import { connect } from "react-redux"

import H1 from '../components/h1'
import Input from '../components/inbox'
import { changeInput } from '../actions/test'
import { bindActionCreators } from 'redux'

class ExamplePage extends Component {
  handleChange(e) {
    console.log(e.target.value)
  }

  render() {
    const {
      text,
      changeInput,
    } = this.props

    console.log(this.props)

    return (
      <div>
        <H1>{text}</H1>
        <Input onChange={e => changeInput(e.target.value)} />
      </div>
    )
  }
}

export default withRedux(initStore)(
  connect(
    s => s.testReducer,
    dispatch => ({
      changeInput: bindActionCreators(changeInput, dispatch)
    })
  )(ExamplePage)
)