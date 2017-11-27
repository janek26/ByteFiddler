import { bindActionCreators } from "redux"
import withRedux              from 'next-redux-wrapper'
import { connect }            from "react-redux"
import { initStore }          from '../../store'

import { changeBit, bitgroupAction } from "../../actions/logicalActions";
import Button                     from '../logicalComponents/Button';

class BitSwitch extends React.Component {
  render() {
    let name  = this.props.name,
        props = this.props;

    let changeBits = [7, 6, 5, 4, 3, 2, 1, 0].map(function(x) {
      return index => props.changeBit(name, x);
    });

    let buttons = [7, 6, 5, 4, 3, 2, 1, 0].map(function(x) {
      return <Button onClick={changeBits[x]} key={x} text={"Bit "+ x}/>
    });

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
        {buttons}
        {groupActions}
      </div>
    )
  }
}

export default withRedux(initStore)(
  connect(
    s => s,
    dispatch => ({
      changeBit: bindActionCreators(changeBit, dispatch),
      bitgroupAction: bindActionCreators(bitgroupAction, dispatch)
    })
  )(BitSwitch)
)
