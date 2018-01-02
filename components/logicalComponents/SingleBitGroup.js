import withRedux     from 'next-redux-wrapper'
import { connect }   from "react-redux"
import { initStore } from '../../store'

import BitDisplay    from '../BitDisplay';
import BitGroupActions    from '../logicalComponents/BitGroupActions';
import BitSwitch     from '../logicalComponents/BitSwitch';

class SingleBitGroup extends React.Component {
  render() {
    let name      = this.props.name,
        topic     = this.props.topic,
        bitgroup  = [];

    if (this.props.name == "first")
      bitgroup = this.props.bits0;
    else if (this.props.name == "second")
      bitgroup = this.props.bits1;

    return(
      <div>
        <BitGroupActions name={this.props.name} topic={topic}/>
        <BitDisplay
          digits={bitgroup}
          fixedNumberOfBits={8}
          name={this.props.name} />
        <BitSwitch digits={bitgroup} name={this.props.name} />
      </div>
    )
  }
}

export default withRedux(initStore)(
  connect(
    s => s.logicalReducer
  )(SingleBitGroup)
)
