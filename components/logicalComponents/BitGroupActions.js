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
        props = this.props;

    let operations =
      ["NOT", "SHL", "SHR"].map(function(x) {
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
            margin-right: 154px;
            padding: 5px 0;
            font-size: 18px;
            font-weight: bold;
          }
          .buttons {
            margin: 0 8px;
            padding: 5px 10px;
            background-color: #f1f1f1;
            border: 1px solid #aba3a354;
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
            cursor: pointer;
          }
          .buttons:hover {
            opacity: 0.8
          }

        `}</style>

        <div className="bitGroupActions">
          <div className="topic">{this.props.topic}</div>
          <div className="buttons" onClick={operations[0]}>!</div>
          <div className="buttons" onClick={operations[1]}>&lt;&lt;&lt; shift</div>
          <div className="buttons" onClick={operations[2]}>shift &gt;&gt;&gt;</div>

        </div>
      </div>
    )
  }
}

export default withRedux(initStore)(
  connect(
    s => s,
    dispatch => ({
      bitgroupAction: bindActionCreators(bitgroupAction, dispatch)
    })
  )(BitSwitch)
)
