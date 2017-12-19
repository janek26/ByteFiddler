import { createStore }    from "redux";
import LogicalOperations  from '../components/logicalComponents/LogicalOperations';
import logicalReducer     from '../reducers/logicalReducer';
import Link from 'next/link'

const store = createStore(logicalReducer);
console.log(store.getState());

class ReduxComponent extends React.Component {
  render() {
    return (
      <div>
        <LogicalOperations />
        <div className='links'>
          <Link href='/' ><span>Zur Index Seite</span></Link>
        </div>
        <style jsx>{`
          .links {
            position: absolute;
            top: 0;
            right: 0;
            padding: 1em;
          }
          .links > * {
            cursor: pointer;
          }
        `}</style>
      </div>
    )
  }
}

export default ReduxComponent;
