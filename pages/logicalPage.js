import withRedux          from 'next-redux-wrapper'
import { bindActionCreators } from "redux"
import { connect }        from "react-redux"
import { initStore }      from '../store'
import LogicalOperations  from '../components/logicalComponents/LogicalOperations';
import Link               from 'next/link'
import Center             from '../components/Center'
import { showInfo }       from '../actions/logicalActions'


class ReduxComponent extends React.Component {
  render() {
    return (
      <div>
      <style jsx>{`
        .links {
          position: absolute;
          bottom: 0;
          right: 0;
          padding: 1em;
        }
        .links > * {
          cursor: pointer;
        }
        .logo {
          position: absolute;
          top: -10px;
          right: 0;
          padding: 0px 1em;
        }
      `}</style>

      <img onClick={this.props.showInfo} className='logo' src="/static/1.png" width="200px" height="300px" />

      <Center flex='row' style={{height: '90vh'}}>
        <Center>
          <LogicalOperations />
          <div className='links'>
            <Link href
            ='/' ><span>Zur Index Seite</span></Link>
          </div>
        </Center>
      </Center>

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
  )(ReduxComponent)
)
