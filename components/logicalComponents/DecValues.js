import { bindActionCreators } from "redux"
import withRedux              from 'next-redux-wrapper'
import { connect }            from "react-redux"
import { initStore }          from '../../store'
import { showDecInfo }        from '../../actions/logicalActions'


class DecValues extends React.Component {
  render() {
    let restString = "";

    if (this.props.decValues.rest > 0)
      restString = "Rest: " + this.props.decValues.rest;

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

      <div className="result">
        <h3>Dezimale Werte</h3>
        <div className="help" onClick={this.props.showDecInfo}>?</div>
        <div>Operand 1: {this.props.decValues.bits0}</div>
        <div>Operand 2: {this.props.decValues.bits1}</div>
        <div>Ergebnis: {this.props.decValues.result}</div>
        <div>{restString}</div>
      </div>
    </div>
    )
  }
}


export default connect(
  s => s.logicalReducer,
  dispatch => ({
    showDecInfo: bindActionCreators(showDecInfo, dispatch)
  })
)(DecValues)
