import withRedux      from 'next-redux-wrapper'
import { connect }    from "react-redux"
import { initStore }  from '../../store'

import BitDisplay     from '../BitDisplay';
import SingleBitGroup from '../logicalComponents/SingleBitGroup';
import BitOperations  from '../logicalComponents/BitOperations';
import Flags          from '../logicalComponents/Flags';

let CreateCaption = props => (<h3>{props.topic}</h3>);

class LogicalOperations extends React.Component {
  render() {
    return(
      <div>
        <SingleBitGroup
          name="first"
          topic="Operand 1" /><br />

        <BitOperations />

        <SingleBitGroup
          name="second"
          topic="Operand 2" />

        <CreateCaption topic="Result" />
        <BitDisplay
          digits={this.props.result}
          fixedNumberOfBits={8}
          id="resultBitDisplay" />

        <Flags />
      </div>
    )
  }
}

export default withRedux(initStore)(
  connect(
    s => s.logicalReducer
  )(LogicalOperations)
)
