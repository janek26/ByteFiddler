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

    let groupActions = ["!", "<<< shift", "shift >>>"]
      .map(function(x, index) {
      return <Button onClick={operations[index]} key={x} text={x.toLowerCase()}/>
    });

    return(
      <div>
        <style jsx>{`
          .bitButtons {
            margin: 1em 0px;
            display: flex;
            flex-direction: row;
          }
          .bitGroupActions {
            margin: 1em 0px;
            display: flex;
            flex-direction: row;
          }
        `}</style>

        <div className="bitGroupActions">
          <div className="topic">{this.props.topic}</div>
          <Center className="groupActionButtons">
            {groupActions}
          </Center>
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
