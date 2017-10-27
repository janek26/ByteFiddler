"use strict";

export default class BitOperationsGroup extends React.Component {
  and() {console.log('and')}
  or() {console.log('or')}
  xor() {console.log('xor')}
  xnor() {console.log('xnor')}
  add() {console.log('add')}
  sub() {console.log('sub')}
  mul() {console.log('mul')}
  div() {console.log('div')}

  render() {
    return (
      <div className="operands"><br />
        <button onClick={this.and}>and</button>
        <button onClick={this.or}>or</button>
        <button onClick={this.xor}>xor</button>
        <button onClick={this.xnor}>xnor</button>

        <button onClick={this.add}>add</button>
        <button onClick={this.sub}>sub</button>
        <button onClick={this.mul}>mul</button>
        <button onClick={this.div}>div</button>
      </div>
    );
  }
}
