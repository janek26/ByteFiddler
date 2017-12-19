import React, { Component } from 'react';
import name from './name';

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
      <style jsx>{`
        table
        {
        width:50%;
        border-collapse:collapse;
        }
        table th, td
      {
      border: 1.5px solid black;
      }
      td{
      background-color:gray;
      color:white;
      }
      th
        {
        background-color:Black;
        color:orange;
        }
        div{
          overflow-x:auto;
          overflow-y: auto;
          height: 500px;
          width:280px;
      
        }
      
      `}</style>
    </div>
    );
  }
}

