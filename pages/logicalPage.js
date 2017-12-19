import withRedux          from 'next-redux-wrapper'
import { connect }        from "react-redux"
import { initStore }      from '../store'
import LogicalOperations  from '../components/logicalComponents/LogicalOperations';

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

export default withRedux(initStore)(
  connect(
    s => s
  )(ReduxComponent)
)
