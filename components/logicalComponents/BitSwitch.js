import { createStore }    from 'redux'
import * as l             from "../../actions/logicalActions";
import Button             from '../logicalComponents/Button';
import logicalReducer     from '../../reducers/logicalReducer';

const store = createStore(logicalReducer);
let result  = store.getState().result;

class BitSwitch extends React.Component {
  render() {
    let name = this.props.name
    var changeBits = [0, 1, 2, 3, 4, 5, 6, 7].map(function(x) {
      return index => store.dispatch(l.changeBit(name, x));
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

export default BitSwitch
