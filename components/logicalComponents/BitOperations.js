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
          .bitGroupActions>div {
            margin: 0 8px;
            padding: 5px 10px;
            background-color: #f1f1f1;
            background-image: linear-gradient(#fdfdfd,#67b7c3);
            border: 1px solid #b6d0ef;
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
            cursor: pointer;
            font-weight: bold;
          }
          .bitGroupActions>div:hover {
            opacity: 0.8
          }

        `}</style>

        <div className="bitGroupActions">
          <div onClick={operations[0]}>and</div>
          <div onClick={operations[1]}>or</div>
          <div onClick={operations[2]}>xor</div>
          <div onClick={operations[3]}>xnor</div>
          <div onClick={operations[4]}>add</div>
          <div onClick={operations[5]}>sub</div>
          <div onClick={operations[6]}>mul</div>
          <div onClick={operations[7]}>div</div>
        </div>
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
