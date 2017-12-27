import withRedux          from 'next-redux-wrapper'
import { connect }        from "react-redux"
import { initStore }      from '../store'
import LogicalOperations  from '../components/logicalComponents/LogicalOperations';
import DecValues          from '../components/logicalComponents/DecValues';
import Link               from 'next/link'
import Center             from '../components/Center'

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
          top: 0;
          right: 0;
          padding: 1em;
        }
        .decValues {
          position: absolute;
          left: 20px;
          right: 0;
          padding-left: 30px;

        }
      `}</style>

      <img  className='logo' src="/static/1.png" width="200px" height="300px" />


      <Center flex='row' style={{height: '90vh'}}>

        <Center>
          <LogicalOperations />
          <div className='links'>
            <Link href
            ='/' ><span>Zur Index Seite</span></Link>
          </div>
          </Center>

          <Center flex='row' style={{ margin: '0 20px', width: '135px'}}>
            <DecValues className='decValues'  />
          </Center>

      </Center>


      </div>
    )
  }
}

export default withRedux(initStore)(
  connect(
    s => s
  )(ReduxComponent)
)
