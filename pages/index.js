import { Component } from 'react'

import withRedux from 'next-redux-wrapper'
import Link from 'next/link'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { initStore } from '../store'
import { toggleBit } from '../actions/bitDisplay'

import BitDisplay from '../components/BitDisplay'
import Voltmeter from '../components/Voltmeter'
import Center from '../components/Center'
import Lampe from '../components/Lampe'
import Decode from '../components/Decode'

import { bitGroupSum } from '../calculations/bitDisplay'

class IndexPage extends Component {

  render () {
    const { toggleBit, bitDisplay } = this.props
    
    return (
      <Center flex='row' style={{height: '100vh'}}>
        <Center>
          <Lampe 
            red={255 - Math.floor(bitGroupSum([bitDisplay.main[0], bitDisplay.main[1], bitDisplay.main[2]]) /7*255)}
            green={255 - Math.floor(bitGroupSum([bitDisplay.main[3], bitDisplay.main[4], bitDisplay.main[5]]) /7*255)}
            blue={255 - Math.floor(bitGroupSum([bitDisplay.main[6], bitDisplay.main[7]]) /3*255)}
            style={{
              marginBottom: '-11em',
              marginRight: '100%',
            }}
          />
          <Voltmeter
            min={0}
            max={100}
            value={bitGroupSum(bitDisplay.main)/255 *100}
          />
        </Center>
        <Center
          style={{
            paddingLeft: '5em'
          }}
        >
          <Decode 
            digits={bitDisplay.main} 
            style={{marginBottom: '3em'}}
          />
          <BitDisplay
            digits={bitDisplay.main}
            withButtons
            onToggleBit={id => toggleBit(id, 'main')}
          />
        </Center>
        <div className='links'>
          <Link href='/logicalPage' ><span>Zur Logikseite</span></Link>
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
      </Center>
    )
  }
}

export default withRedux(initStore)(
  connect(
    s => s,
    dispatch => ({
      toggleBit: bindActionCreators(toggleBit, dispatch)
    })
  )(IndexPage)
)