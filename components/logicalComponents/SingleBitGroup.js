import withRedux     from 'next-redux-wrapper'
import { connect }   from "react-redux"
import { initStore } from '../../store'
import BitDisplay    from '../BitDisplay';
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
        <h3>{topic}</h3>
        <BitDisplay
          digits={bitgroup}
          fixedNumberOfBits={8}
          name={this.props.name} />
        <BitSwitch name={this.props.name} />
      </div>
    )
  }
}

export default withRedux(initStore)(
  connect(
    s => s.logicalReducer
  )(SingleBitGroup)
)
