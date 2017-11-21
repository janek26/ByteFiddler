import { createStore }    from "redux";
import LogicalOperations  from '../components/logicalComponents/LogicalOperations';
import logicalReducer     from '../reducers/logicalReducer';

const store = createStore(logicalReducer);
console.log(store.getState());

class ReduxComponent extends React.Component {
  render() {
    return (
      <div>
        <LogicalOperations />
      </div>
    )
  }
}

export default ReduxComponent;
