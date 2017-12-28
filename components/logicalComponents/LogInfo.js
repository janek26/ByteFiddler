import { bindActionCreators } from "redux"
import withRedux              from 'next-redux-wrapper'
import { connect }            from "react-redux"
import { initStore }          from '../../store'
import { showInfo }           from '../../actions/logicalActions'

class LogInfo extends React.Component {
  render() {
    let op = this.props.activeOperation,
        topic = this.props.info[op][0],
        descr = this.props.info[op][1];

    return(
    <div>
    <style jsx>{`
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
        top: -40px;
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

      <div className="info">
        <h3>{topic}</h3>
        <div className="help" onClick={this.props.showInfo}>?</div>
        <div>{descr}</div>
      </div>
    </div>
    )
  }
}

export default withRedux(initStore)(
  connect(
    s => s.logicalReducer,
    dispatch => ({
      showInfo: bindActionCreators(showInfo, dispatch)
    })
  )(LogInfo)
)
