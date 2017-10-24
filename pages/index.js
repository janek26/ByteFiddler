import { Component } from 'react'
import BitDisplay from '../components/BitDisplay'
import Voltmeter from '../components/Voltmeter'

export default class IndexPage extends Component {

  state = {
    text: '0'
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
        <BitDisplay 
          digits={[3,3,5,6,5,3,5]} 
          fixedNumberOfBits={8}
        />
        <br/>
        <Voltmeter value={parseInt(this.state.text)} />
      </div>
    )
  }
}