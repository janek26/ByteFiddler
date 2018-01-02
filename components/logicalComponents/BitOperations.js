import { bindActionCreators } from "redux"
import withRedux              from 'next-redux-wrapper'
import { connect }            from "react-redux"
import { initStore }          from '../../store'

import { logicalOperation }   from "../../actions/logicalActions";
import Button                 from '../logicalComponents/Button';

class BitOperations extends React.Component {
  render() {
    let props = this.props;
    let activeOperation = this.props.activeOperation;

    var operations =
      ["AND", "OR", "XOR", "XNOR", "ADD", "SUB", "MUL", "DIV"]
      .map(function(x) {
        return index => props.logicalOperation(x);
      });

    return(
      <div>
        <style jsx>{`
          .bitGroupActions {
            margin: 1em 0px;
            display: flex;
            flex-direction: row;
          }
          .buttons {
            margin: 0 8px;
            padding: 5px 10px;
            background-color: #f1f1f1;
            background-image: linear-gradient(#fdfdfd,#67b7c3);
            border: 1px solid #b6d0ef;
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
            cursor: pointer;
            font-weight: bold;
            -ms-user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
          }
          .buttons:hover {
            opacity: 0.9
          }
          .on {
            background-image: linear-gradient(green, lightgreen);
          }

        `}</style>

        <div className="bitGroupActions">
          <div className={`buttons ${activeOperation==='and' ? 'on' : 'off'}`} onClick={operations[0]}>and</div>
          <div className={`buttons ${activeOperation==='or' ? 'on' : 'off'}`} onClick={operations[1]}>or</div>
          <div className={`buttons ${activeOperation==='xor' ? 'on' : 'off'}`} onClick={operations[2]}>xor</div>
          <div className={`buttons ${activeOperation==='xnor' ? 'on' : 'off'}`} onClick={operations[3]}>xnor</div>
          <div className={`buttons ${activeOperation==='add' ? 'on' : 'off'}`} onClick={operations[4]}>add</div>
          <div className={`buttons ${activeOperation==='sub' ? 'on' : 'off'}`} onClick={operations[5]}>sub</div>
          <div className={`buttons ${activeOperation==='mul' ? 'on' : 'off'}`} onClick={operations[6]}>mul</div>
          <div className={`buttons ${activeOperation==='div' ? 'on' : 'off'}`} onClick={operations[7]}>div</div>
        </div>
      </div>
    )
  }
}

export default connect(
  s => s.logicalReducer,
  dispatch => ({
    logicalOperation: bindActionCreators(logicalOperation, dispatch)
  })
)(BitOperations)
