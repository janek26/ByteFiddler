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
          digits={[0,1,2,3,4,5,6,7,8,9]} 
        />
        <br/>
        <Voltmeter value={parseInt(this.state.text)} />
      </div>
    )
  }
}