import * as l             from "../../actions/logicalActions";
import Button             from '../logicalComponents/Button';

import { createStore }    from 'redux'
import logicalReducer     from '../../reducers/logicalReducer';

const store = createStore(logicalReducer);
let result  = store.getState().result;

class BitOperations extends React.Component {
  render() {
    let name = this.props.name
    var operations =
      ["AND", "OR", "XOR", "XNOR", "ADD", "SUB", "MUL", "DIV"].map(function(x) {
        return index => store.dispatch(l.logicalOperation(x));
      });

      let buttons = ["AND", "OR", "XOR", "XNOR", "ADD", "SUB", "MUL", "DIV"].map(function(x, index) {
        return <Button onClick={operations[index]} key={x} text={x.toLowerCase()}/>
      });
    return(
      <div>
        {buttons}
      </div>
    )
  }
}

export default BitOperations
