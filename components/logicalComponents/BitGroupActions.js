import { bindActionCreators } from "redux"
import withRedux              from 'next-redux-wrapper'
import { connect }            from "react-redux"
import { initStore }          from '../../store'

import { bitgroupAction } from "../../actions/logicalActions";
import Button                 from '../logicalComponents/Button';
import Center                 from '../Center';

class BitSwitch extends React.Component {
  render() {
    let name  = this.props.name,
        props = this.props,
        activeOperation = this.props.activeOperation,
        activeGroup = this.props.activeGroup,
        group = 0;

    if (this.props.name === 'first')
      group = 1;
    else {
      group = 2;
    }

    let operations =
      ["NOT", "INC", "DEC", "SHL", "SHR"].map(function(x) {
      return index => props.bitgroupAction(name, x)
    });

    return(
      <div>
        <style jsx>{`
          .bitButtons {
            margin: 1em 0px;
          }
          .bitGroupActions {
            margin: 1em 0px;
            display: flex;
            flex-direction: row;
          }
          .topic {
            margin-left: 5px;
            margin-right: 42px;
            padding: 5px 0;
            font-size: 18px;
            font-weight: bold;
          }
          .buttons {
            margin: 0 8px;
            padding: 5px 8px;
            background-color: #f1f1f1;
            background-image: linear-gradient(#fdfdfd,#797979);
            border: 1px solid #929292;
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
            cursor: pointer;
            font-weight: bold;
            -ms-user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
            border-radius: 5px;
          }
          .buttons:hover {
            opacity: 0.9
          }

          .on {
            background-image: linear-gradient(#bbbaba,white)
          }
        `}</style>

        <div className="bitGroupActions">
          <div className="topic">{this.props.topic}</div>
          <div className={`buttons ${activeOperation==='not'&&activeGroup==group ? 'on' : 'off'}`}  onClick={operations[0]}>~</div>
          <div className={`buttons ${activeOperation==='inc'&&activeGroup==group ? 'on' : 'off'}`}  onClick={operations[1]}>inc</div>
          <div className={`buttons ${activeOperation==='dec'&&activeGroup==group ? 'on' : 'off'}`}  onClick={operations[2]}>dec</div>
          <div className={`buttons ${activeOperation==='shl'&&activeGroup==group ? 'on' : 'off'}`}  onClick={operations[3]}>&lt;&lt; shift</div>
          <div className={`buttons ${activeOperation==='shr'&&activeGroup==group ? 'on' : 'off'}`}  onClick={operations[4]}>shift &gt;&gt;</div>

        </div>
      </div>
    )
  }
}

export default connect(
  s => s.logicalReducer,
  dispatch => ({
    bitgroupAction: bindActionCreators(bitgroupAction, dispatch)
  })
)(BitSwitch)
