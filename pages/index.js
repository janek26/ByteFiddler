import { Component } from 'react'

import withRedux from 'next-redux-wrapper'
import Router from 'next/router'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { initStore } from '../store'
import { toggleBit } from '../actions/bitDisplay'

import BitDisplay from '../components/BitDisplay'
import Voltmeter from '../components/Voltmeter'
import Center from '../components/Center'
import Lampe from '../components/Lampe'
import Decode from '../components/Decode'
import Erklaerung from '../components/Erklaerungcomponents/Erklaerung'


import { bitGroupSum } from '../calculations/bitDisplay'

class IndexPage extends Component {

  render () {
    const { toggleBit, bitDisplay } = this.props

    var hrefLink = process.env.NODE_ENV === 'production' ? 'logicalPage.html' : '/logicalPage';


    return (
      <div className="htmlBackground">
      <style jsx>{`
        .links {
          position: absolute;
          top: 280px;
          right: 45px;
          padding: 1em;
        }
        .links > * {
          cursor: pointer;
        }
        .erklaerung {
          margin-right: 60px;
          padding: 10px;
          border: 1px solid #d2d2d2;
          box-shadow: 0 8px 6px -6px black;


        }
      }
      .decode {
        width: 280px;
        margin-left: 20px;
        padding: 10px;
        border: 1px solid #d2d2d2;
        box-shadow: 0 8px 6px -6px black;

      }
      .bitdisplay {
        width: 480px;
        padding: 10px;
        border: 1px solid #d2d2d2;
        box-shadow: 0 8px 6px -6px black;

      }
      .lampe {
        position: relative;
        top: 15px;
        left: -100px;
      }
      .voltmeter {
        margin-top: -130px;
      }
      .logo {
        position: absolute;
        top: -10px;
        right: 0;
        padding: 0px 1em;
      }
      .secondBlock {
        display: flex;
        flex-direction: row;
        margin-top: -75px;
      }
      .firstBlock {
        position: relative;
        left: -150px;
      }
      .htmlBackground {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        background: #b1b1b1;
      }

      `}</style>

      <Center flex='row'>

          <div className="erklaerung">
            <Erklaerung />
          </div>


        <Center>
        <div className="firstBlock">

          <div className="lampe">
          <Lampe
              red={255 - Math.floor(bitGroupSum([bitDisplay.main[0], bitDisplay.main[1], bitDisplay.main[2]]) /7*255)}
              green={255 - Math.floor(bitGroupSum([bitDisplay.main[3], bitDisplay.main[4], bitDisplay.main[5]]) /7*255)}
              blue={255 - Math.floor(bitGroupSum([bitDisplay.main[6], bitDisplay.main[7]]) /3*255)}
            />
          </div>

          <div className="voltmeter">
         <Voltmeter
            min={0}
            max={100}
            value={bitGroupSum(bitDisplay.main)/255 *100}
          />
          </div>
        </div>

        <div className="secondBlock">

          <div className="bitdisplay">
          <BitDisplay
            digits={bitDisplay.main}
            withButtons
            onToggleBit={id => toggleBit(id, 'main')}
          />
          </div>
          <div className="decode">
            <Decode
              digits={bitDisplay.main}
              style={{marginBottom: '3em'}}
            />
          </div>
        </div>

        </Center>
        <img onClick={this.props.showInfo} className='logo' src="static/1.png" width="200px" height="300px" />


        <div className='links'>
          <span onClick={() => Router.push(hrefLink)}>Zur Logikseite</span>
        </div>
      </Center>
      </div>
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
