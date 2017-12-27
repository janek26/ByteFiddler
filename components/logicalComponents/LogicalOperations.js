import withRedux      from 'next-redux-wrapper'
import { connect }    from "react-redux"
import { initStore }  from '../../store'

import BitDisplay     from '../BitDisplay';
import SingleBitGroup from '../logicalComponents/SingleBitGroup';
import BitOperations  from '../logicalComponents/BitOperations';
import Flags          from '../logicalComponents/Flags';

class LogicalOperations extends React.Component {
  render() {
    return(
      <div>
      <style jsx>{`
        .topic {
          text-align: center;
        }
      `}</style>

        <SingleBitGroup
          name="first"
          topic="Operand 1" /><br />

        <BitOperations />

        <SingleBitGroup
          name="second"
          topic="Operand 2" />

        <div className="topic">Result</div>
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
