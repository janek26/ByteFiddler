import React, { Component } from 'react';
import name from './name';

export default class Erklaerung extends Component {
  render() {
  var tools = [];

  for( var i = 0; i<256; i++ ){
  	tools[i] = <tr key={i} >
			          <td>{String.fromCharCode(i)}</td>
                <td>{i.toString(2)}</td>
      			    <td>{i}</td>
                <td>{i.toString(8)}</td>
      			    <td>{i.toString(16)}</td>
             	  <td>{name[i]}</td>
              </tr>;
  }


  return (
     <div>

     <style jsx>{`
       table
       {
       width:50%;
       border-collapse:collapse;
       }
     td{
     color:white;
     }
     th
       {
         border-bottom: 1px solid black;
         padding: 5px 10px 5px 0;
         text-align: left;
        }
       div{
         overflow-x:auto;
         overflow-y: auto;
         height: 500px;
         width:340px;
         font-family: Arial, sans-serif;
       }

     `}</style>
      <table >
      <thead>
       <tr>
        <th>CHAR</th>
        <th>BIN</th>
        <th>DEC</th>
        <th>OCT</th>
        <th>HEX</th>
        <th>NAME</th>
       </tr>
       </thead>
       <tbody>
        {tools}
      </tbody>
	    </table>
    </div>
    );
  }
}
