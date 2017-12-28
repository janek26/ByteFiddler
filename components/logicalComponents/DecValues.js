import { bindActionCreators } from "redux"
import withRedux              from 'next-redux-wrapper'
import { connect }            from "react-redux"
import { initStore }          from '../../store'


class DecValues extends React.Component {
  render() {
    let restString = "";

    if (this.props.decValues.rest > 0)
      restString = "Rest: " + this.props.decValues.rest;

    return(
    <div>
      <div className="result">
        <h3>Dezimale Werte</h3>
        <div>Operand 1: {this.props.decValues.bits0}</div>
        <div>Operand 2: {this.props.decValues.bits1}</div>
        <div>Signed Result: {this.props.decValues.result}</div>
        <div>{restString}</div>
      </div>
    </div>
    )
  }
}

export default withRedux(initStore)(
  connect(
    s => s.logicalReducer
  )(DecValues)
)
