import { bindActionCreators } from "redux"
import withRedux              from 'next-redux-wrapper'
import { connect }            from "react-redux"
import { initStore }          from '../../store'


class DecValues extends React.Component {
  render() {

    return(
      <div>
        <h3>Decimal Values</h3>
        <div>Operand1: {this.props.decValues.bits0}</div>
        <div>Operand2: {this.props.decValues.bits1}</div>
        <div>Result: {this.props.decValues.result}</div>
      </div>
    )
  }
}

export default withRedux(initStore)(
  connect(
    s => s.logicalReducer
  )(DecValues)
)
