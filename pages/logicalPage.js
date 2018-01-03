import withRedux          from 'next-redux-wrapper'
import { bindActionCreators } from "redux"
import { connect }        from "react-redux"
import { initStore }      from '../store'
import LogicalOperations  from '../components/logicalComponents/LogicalOperations';
import Center             from '../components/Center'
import { showInfo }       from '../actions/logicalActions'
import Router             from 'next/router'


class ReduxComponent extends React.Component {
  render() {
    var hrefLink = process.env.NODE_ENV === 'production' ? 'index.html' : '/';

    return (
      <div className="htmlBackground">
      <style jsx>{`
        h3 {
          margin-bottom: 0px;
        }
        .links {
          position: absolute;
          top: 280px;
          right: 30px;
          padding: 1em;
          font-size: 18px;
        }
        .links:hover {
          text-decoration: underline;
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
        .htmlBackground {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 9999;
          background: #bbbaba;
          font-family: Arial, sans-serif;
          overflow-y: auto;
        }

      `}</style>

      <img onClick={this.props.showInfo} className='logo' src="static/1.png" width="200px" height="300px" />

      <Center flex='row'>
        <Center>
          <LogicalOperations />
          <div className='links'>
            <span onClick={() => Router.push(hrefLink)}>Zur Hauptseite</span>
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
