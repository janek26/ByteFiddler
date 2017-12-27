import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import { connect } from "react-redux"

import Lampe from '../components/Lampe'
import { bindActionCreators } from 'redux'
import lampeReducer     from '../reducers/lampeReducer';

class LampeTestPage extends Component {


  render() {
	const [red, green, blue, transparency] =
  [this.props.lampeReducer.red,
  this.props.lampeReducer.green,
	this.props.lampeReducer.blue,
	this.props.lampeReducer.transparency]

    console.log(this.props.lampeReducer)

    return (
      <div>
      <Lampe
      red = {red}
      green = {green}
      blue = {blue}
      transparency = {transparency}
      />
      </div>
    )
  }
}

export default withRedux(initStore)(
  connect(
    s => s,
  )(LampeTestPage)
)
