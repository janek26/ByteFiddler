import BitDisplay         from '../BitDisplay';
import BitButtonGroup     from '../logicalComponents/BitButtonGroup';

import { createStore }    from 'redux'
import logicalReducer     from '../../reducers/logicalReducer';

const store = createStore(logicalReducer);

let firstBitgroup   = store.getState().bits0;
let secondBitgroup  = store.getState().bits1;

class SingleBitGroup extends React.Component {
  render() {
    let name  = this.props.name;
    let topic = this.props.topic;

    return(
      <div>
        <h3>{topic}</h3>
        <BitDisplay
          digits={firstBitgroup}
          fixedNumberOfBits={8}
          name={this.props.name} />
        <BitButtonGroup name={this.props.name} />
      </div>
    )
  }
}

export default SingleBitGroup
