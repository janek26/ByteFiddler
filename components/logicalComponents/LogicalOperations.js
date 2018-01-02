import withRedux      from 'next-redux-wrapper'
import { connect }    from "react-redux"
import { initStore }  from '../../store'

import BitDisplay     from '../BitDisplay';
import SingleBitGroup from '../logicalComponents/SingleBitGroup';
import BitOperations  from '../logicalComponents/BitOperations';
import Flags          from '../logicalComponents/Flags';
import DecValues      from '../logicalComponents/DecValues';
import LogInfo        from '../logicalComponents/LogInfo';

class LogicalOperations extends React.Component {
  render() {
    return(
      <div>
      <style jsx>{`
        .topic {
          padding: 5px 0;
          font-size: 18px;
          font-weight: bold;
          margin-left: 5px;
        }
        .firstContainer, .secondContainer, .resultContainer {
          display: flex;
          flex-direction: row;
        }
        .resultContainer {
          margin-top: 20px;
        }
        .firstBitgroup, .secondBitgroup, .resultBits {
          width: 480px;
          padding: 10px;
          border: 1px solid #d2d2d2;
          box-shadow: 0 8px 6px -6px black;
        }
        .firstBitgroup, .logInfo {
          margin-top: 10px;
        }
        .flags, .decValues, .logInfo {
          width: 200px;
          margin-left: 20px;
          border: 1px solid #d2d2d2;
          box-shadow: 0 8px 6px -6px black;
          padding: 5px;
        }


      `}</style>

      <div className="firstContainer">
        <div className="firstBitgroup">
          <SingleBitGroup
            name="first"
            topic="Operand 1" />
        </div>
        <div className="logInfo">
          <LogInfo />
        </div>
      </div>

        <BitOperations />

        <div className="secondContainer">
          <div className="secondBitgroup">
            <SingleBitGroup
              name="second"
              topic="Operand 2" />
            </div>

            <div className="decValues">
              <DecValues />
            </div>
        </div>

        <div className="resultContainer">
          <div className="resultBits">
            <div className="topic">Ergebnis</div>
            <BitDisplay
              digits={this.props.result}
              fixedNumberOfBits={8}
              id="resultBitDisplay" />
          </div>
          <div className="flags">
            <Flags />
          </div>
        </div>
      </div>
    )
  }
}


export default connect(
  s => s.logicalReducer
)(LogicalOperations)
