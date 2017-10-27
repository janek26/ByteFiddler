"use strict";

export default class BitOperationsGroup extends React.Component {
  render() {
    return (
      <div className="operands"><br />
        <button id="or">or</button>
        <button id="and">and</button>
        <button id="xor">xor</button>
        <button id="xnor">xnor</button>

        <button id="add">add</button>
        <button id="sub">sub</button>
        <button id="mul">mul</button>
        <button id="div">div</button>
      </div>
    );
  }
}
