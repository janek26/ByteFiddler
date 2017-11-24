import withRedux          from 'next-redux-wrapper'
import { connect }        from "react-redux"
import { initStore }      from '../store'
import LogicalOperations  from '../components/logicalComponents/LogicalOperations';

class ReduxComponent extends React.Component {
  render() {
    return (
      <div>
        <LogicalOperations />
      </div>
    )
  }
}

export default withRedux(initStore)(
  connect(
    s => s
  )(ReduxComponent)
)
