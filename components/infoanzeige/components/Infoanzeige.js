import React,{Component} from 'react';
import name from './Name'
import PropTypes from 'prop-types'
import './info.css';
class Infoanzeige extends Component{
  render(){
    const{value,onIncrement,onDecrement}= this.props
    return(
    <div className="Infoanzeige">
    <table>
    <tr onClick={onIncrement}>
    <th>CHAR</th><th>DEC</th><th>HEX</th><th>BIN</th><th>NAME</th>
    </tr>
    <tr onClick={onDecrement}>
      <td>{String.fromCharCode(value)}</td>
      <td>{parseInt(value,10).toString(16)} </td>
      <td>{parseInt(value,10)}</td>
      <td>{parseInt(value,10).toString(2)}</td>
      <td>{name[parseInt(value,10)]}</td>
    </tr>
    </table>
    </div>)
  }
}
Infoanzeige.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}
export default Infoanzeige
