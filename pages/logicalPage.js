import { createStore }    from "redux";
import LogicalOperations  from '../components/logicalComponents/LogicalOperations';
import logicalReducer     from '../reducers/logicalReducer';

import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from "redux"
import { initStore } from '../store'
import { connect } from "react-redux"

class ReduxComponent extends React.Component {
  render() {
    return (
      <div>
        <pre>
          {JSON.stringify(this.props.logicalReducer, null, 2)}
        </pre>
        <LogicalOperations />
      </div>
    )
  }
}

export default withRedux(initStore)(
  connect(
    s => s,
  )(ReduxComponent)
)