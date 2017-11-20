import { createStore }    from 'redux'
import Lamperedux from '../reducers/Lamperedux'
const rgba_value = (red, green, blue, transparency) => `rgba(${red},${green},${blue},${transparency})`
export Lampestate ({
  red,
  green,
  blue,
  transparency,
  ...rest
}) => (
  <div>
  <div id="ledrahmen">
  <div id="led" style={{backgroundColor: rgba_value(red, green, blue, transparency)}}>
  </div>
  </div>
  <style jsx>{`
    #ledrahmen {
      background-color: black;
      position: absolute;
      width: 200px;
      height: 200px;
      top: 100px;
      left: 25px;
      border: 1px solid black;
      border-radius: 125px
    }

    #led {
    transition: all 1s ease;
      position: relative;
      width: 150px;
      height: 150px;
      top: 25px;
      left: 25px;
      border: 1px solid black;
      text-align: center;
      border-radius: 75px;
      z-index: 1;
    }
    `}</style>
    </div>
  )
