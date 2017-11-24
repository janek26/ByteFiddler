import { bindActionCreators } from "redux"
import withRedux              from 'next-redux-wrapper'
import { connect }            from "react-redux"
import { initStore }          from '../../store'

import { changeBit }          from "../../actions/logicalActions";
import Button                 from '../logicalComponents/Button';

class BitSwitch extends React.Component {
  render() {
    let name = this.props.name,
        props = this.props;

    var changeBits = [0, 1, 2, 3, 4, 5, 6, 7].map(function(x) {
      return index => props.changeBit(name, x);
    });

    let buttons = [7, 6, 5, 4, 3, 2, 1, 0].map(function(x) {
      return <Button onClick={changeBits[x]} key={x} text={"Bit "+ x}/>
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
      changeBit: bindActionCreators(changeBit, dispatch)
    })
  )(BitSwitch)
)
