import React, { Component } from 'react';
import './Infoanzeige.css';

class Infoanzeige extends Component {
  state = {
    text: '0'
  }
  handleInputChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    var name = [
      'NUL','SOH','STX','ETX','EOT','ENQ','ACK','BEL','BS','HT',
      'LF','VT','FF','CR','SO','SI','DLE','DC1','DC2','DC3',
      'DC4','NAK','SYN','ETB','CAN','EM','SUM','ESC','FS','GS',
      'RS','US','SP',null,null,null,null,null,null,null,
      null,null,null,null,null,null,null,null,null,null,
      null,null,null,null,null,null,null,null,null,null,
      null,null,null,null,null,null,null,null,null,null,
      null,null,null,null,null,null,null,null,null,null,
      null,null,null,null,null,null,null,null,null,null,
      null,null,null,null,null,null,null,null,null,null,
      null,null,null,null,null,null,null,null,null,null,
      null,null,null,null,null,null,null,null,null,null,
      null,null,null,null,null,null,null,null,null,null,
      null,null,null,null,null,null,null,'DEL','PAD','HOP',
      'BPH','NBH','IND','NEL','SSA','ESA','HTS','VTS','PLD',
      'PLU','RI','SS2','SS3','DCS','PU1','PU2','STS','CCH','MW',
      'SPA','EPA','SOS','SGCI','SCI','ST','OSC','PM','APC','NBSP',
      null,null,null,'SHY',null,null,null,null,null,null
  ];

    return (
      <div className="Infoanzeige">
      <input
        onChange={this.handleInputChange.bind(this)}
      />
      <table>
      <tr>
        <th>CHAR</th>
        <th>DEC</th>
        <th>HEX</th>
        <th>BIN</th>
        <th>NAME</th>
      </tr>
      <tr>
        <td>{String.fromCharCode(this.state.text)}</td>
        <td>{parseInt(this.state.text).toString(16)} </td>
        <td>{parseInt(this.state.text)}</td>
        <td>{parseInt(this.state.text).toString(2)}</td>
        <td>{name[parseInt(this.state.text)]}</td>
      </tr>
      </table>
      </div>
    );
  }
}


export default Infoanzeige;
