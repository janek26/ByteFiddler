import React, { Component } from 'react';
import './Erklaerung.css';
import name from './Name';
export default class Erklaerung extends Component {
  render() {
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

