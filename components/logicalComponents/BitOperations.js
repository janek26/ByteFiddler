import { bindActionCreators } from "redux"
import withRedux              from 'next-redux-wrapper'
import { connect }            from "react-redux"
import { initStore }          from '../../store'

import { logicalOperation }   from "../../actions/logicalActions";
import Button                 from '../logicalComponents/Button';

class BitOperations extends React.Component {
  render() {
    let props = this.props;

    var operations =
      ["AND", "OR", "XOR", "XNOR", "ADD", "SUB", "MUL", "DIV"].map(function(x) {
        return index => props.logicalOperation(x);
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

export default withRedux(initStore)(
  connect(
    s => s,
    dispatch => ({
      logicalOperation: bindActionCreators(logicalOperation, dispatch)
    })
  )(BitOperations)
)
