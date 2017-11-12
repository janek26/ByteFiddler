import React, { Component } from 'react';
import './Erklaerung.css';

class Erklaerung extends Component {
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
  var tools = [];
  for( var i = 0; i<256; i++ ){
  	tools.push(
             <tr>
  			  <td>{String.fromCharCode(i)}</td>
  			  <td>{i.toString(2)}</td>
  			  <td>{i}</td>
  			  <td>{i.toString(16)}</td>
         	  <td>{name[i]}</td>
             </tr>);
  }
  return (
     <div>
      <table >
       <tr>
        <th>CHAR</th>
        <th>BIN</th>
        <th>DEC</th>
        <th>HEX</th>
        <th>NAME</th>
       </tr>
        {tools}
	  </table>
     </div>
    );
  }
}


export default Erklaerung;
