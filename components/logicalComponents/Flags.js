import withRedux     from 'next-redux-wrapper'
import { connect }   from "react-redux"
import { initStore } from '../../store'

import BitDisplay    from '../BitDisplay';

class Flags extends React.Component {
  render() {
    return(
      <div>
      <style jsx>{`
        .topic {
          text-align: center;
        }
      `}</style>
        <div className="topic">Flags</div>
        <BitDisplay
          digits={[
            this.props.flags.zero,
            this.props.flags.carry,
            this.props.flags.parity
          ]}
          fixedNumberOfBits={3}
          name="flags" />
          <span>Zero </span>
          <span>Carry </span>
          <span>Parity</span>
      </div>
    )
  }
}

export default withRedux(initStore)(
  connect(
    s => s.logicalReducer
  )(Flags)
)
