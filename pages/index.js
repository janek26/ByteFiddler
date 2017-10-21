import React, { Component } from 'react'

export default class IndexPage extends Component {

  state = {
    text: ''
  }

  handleInputChange(e) {
    this.setState({ 
      text: e.target.value 
    })
  }

  render () {
    return (
      <div>
        <input 
          value={this.state.text} 
          onChange={this.handleInputChange.bind(this)}
        />
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}