import { bindActionCreators } from "redux"
import withRedux              from 'next-redux-wrapper'
import { connect }            from "react-redux"
import { initStore }          from '../../store'

import { changeBit } from "../../actions/logicalActions";
import Button                 from '../logicalComponents/Button';
import Center                 from '../Center';
import Slider                 from '../Btn'

class BitSwitch extends React.Component {
  render() {
    let name  = this.props.name,
        props = this.props,
        digits = this.props.digits;

    let changeBits = [7, 6, 5, 4, 3, 2, 1, 0].map(function(x) {
      return index => props.changeBit(name, x);
    });

    let buttons = [7, 6, 5, 4, 3, 2, 1, 0].map(function(x) {
      return <Slider onClick={changeBits[x]} value={digits[7-x] === 1} key={x}
      style={{width: '19px', margin: '0 19.5px'}}/>
    });

    return(
      <div>
        <style jsx>{`
          .bitButtons {
            margin: 1em 0px;
            display: flex;
            flex-direction: row;
          }
        `}</style>

        <div className="bitButtons">
          {buttons}
        </div>
      </div>
    )
  }
}

export default connect(
  s => s,
  dispatch => ({
    changeBit: bindActionCreators(changeBit, dispatch),
  })
)(BitSwitch)
