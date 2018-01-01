import withRedux     from 'next-redux-wrapper'
import { connect }   from "react-redux"
import { initStore } from '../../store'
import { bindActionCreators } from "redux"

import BitDisplay    from '../BitDisplay';
import { showFlags }  from '../../actions/logicalActions'

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
        .help {
          border: 1px solid #696969;
          border-radius: .6em;
          background-color: #f1f1f1;
          background-image: linear-gradient(#fdfdfd,#67b7c3);
          border: 1px solid #b6d0ef;
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
          cursor: pointer;
          font-weight: bold;
          position: relative;
          top: -25px;
          right: -165px;
          width: 20px;
          height: 20px;
          text-align: center;
          -ms-user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }
        .help:hover {
          opacity: 0.9
        }

      `}</style>
        <div className="topic">Flags</div>
        <div className="help" onClick={this.props.showFlags}>?</div>
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


export default connect(
  s => s.logicalReducer,
  dispatch => ({
    showFlags: bindActionCreators(showFlags, dispatch)
  })
)(Flags)
