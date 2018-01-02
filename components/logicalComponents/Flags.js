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
          padding: 5px 0;
          font-size: 18px;
          font-weight: bold;
          margin-left: 5px;
        }
        .entry {
          margin: 13px;
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
          <span className="entry">Zero</span>
          <span className="entry">Carry</span>
          <span className="entry">Parity</span>
      </div>
    )
  }
}

export default withRedux(initStore)(
  connect(
    s => s.logicalReducer
  )(Flags)
)
