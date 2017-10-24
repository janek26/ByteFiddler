const calcDeg = (value, minDeg = -120, maxDeg = 120) => 
  minDeg + (value * ((maxDeg - minDeg) / 100))
const renderNumber = (count, min, max) => ((max-min)/10)*count
const calcProcent = (value, min, max) => value / (max-min)

export default ({
  value = 0,
  animationDuration = 200,
  min = 0,
  max = 100,
}) => (
    <div>
      <div id="voltmeter">
        <div className="ii">
          <div><b><span className="num_1">{renderNumber(0, min, max)}</span></b></div>
          <div><b></b></div>
          <div><b><span className="num_2">{renderNumber(1, min, max)}</span></b></div>
          <div><b></b></div>
          <div><b><span className="num_3">{renderNumber(2, min, max)}</span></b></div>
          <div><b></b></div>
          <div><b><span className="num_4">{renderNumber(3, min, max)}</span></b></div>
          <div><b></b></div>
          <div><b><span className="num_5">{renderNumber(4, min, max)}</span></b></div>
          <div><b></b></div>
          <div><b><span className="num_6">{renderNumber(5, min, max)}</span></b></div>
          <div><b></b></div>
          <div><b><span className="num_7">{renderNumber(6, min, max)}</span></b></div>
          <div><b></b></div>
          <div><b><span className="num_8">{renderNumber(7, min, max)}</span></b></div>
          <div><b></b></div>
          <div><b><span className="num_9">{renderNumber(8, min, max)}</span></b></div>
          <div><b></b></div>
          <div><b><span className="num_10">{renderNumber(9, min, max)}</span></b></div>
          <div><b></b></div>
          <div><b><span className="num_11">{renderNumber(10, min, max)}</span></b></div>
        </div>
        <div className="voltage">{(calcProcent(value, min, max)*100).toFixed(2)}%</div>
        <div className="line" style={{transform: `rotate(${calcDeg(value)}deg)`}}></div>
        <div className="voltage"></div>
        <div className="pin"><div className="inner"></div></div>
      </div>
      <style jsx>{`
        #voltmeter{
          background:#171717;
          margin:100px auto;
          width:600px;
          height:600px;
          box-shadow: inset 0px 0px 9px 3px rgba(0, 0, 0, 1);
          border: 5px solid #171717;
          border-radius: 100%;
          display: block;
          position: relative;  
        }


        .ii {
          position: absolute;
          width: 600px;
          height: 600px;
          z-index: 2;
          
        }
        .ii div {
          position: absolute;
          width: 600px;
          height: 600px;
          padding:4px;
          box-sizing: border-box;
        }
        .ii div b {
          position: absolute;
          display: block;
          left: 50%;
          width: 5px;
          height: 20px;
          background: #FFF;
          margin: 0 -5px 0;
          
        }
        .ii div:nth-child(2n+1) b {
          width: 10px;
          height: 35px;
          margin: 0 -5px 0;
        }

        .ii div:nth-child(1) {
          transform: rotate(240deg);
        }
        .ii div:nth-child(2) {
          transform: rotate(252deg);
        }
        .ii div:nth-child(3) {
          transform: rotate(264deg);
        }
        .ii div:nth-child(4) {
          transform: rotate(276deg);
        }
        .ii div:nth-child(5) {
          transform: rotate(288deg);
        }
        .ii div:nth-child(6) {
          transform: rotate(300deg);
        }
        .ii div:nth-child(7) {
          transform: rotate(312deg);
        }
        .ii div:nth-child(8) {
          transform: rotate(324deg);
        }
        .ii div:nth-child(9) {
          transform: rotate(336deg);
        }
        .ii div:nth-child(10) {
          transform: rotate(348deg);
        }
        .ii div:nth-child(11) {
          transform: rotate(0deg);
        }
        .ii div:nth-child(12) {
          transform: rotate(12deg);
        }
        .ii div:nth-child(13) {
          transform: rotate(24deg);
        }
        .ii div:nth-child(14) {
          transform: rotate(36deg);
        }
        .ii div:nth-child(15) {
          transform: rotate(48deg);
        }
        .ii div:nth-child(16) {
          transform: rotate(60deg);
        }
        .ii div:nth-child(17) {
          transform: rotate(72deg);
        }
        .ii div:nth-child(18) {
          transform: rotate(84deg);
        }
        .ii div:nth-child(19) {
          transform: rotate(96deg);
        }
        .ii div:nth-child(20) {
          transform: rotate(108deg);
        }
        .ii div:nth-child(21) {
          transform: rotate(120deg);
        }


        [class^="num_"] {
          color:#FFF;
          display: block;
          position: absolute;
          width: 10px;
          font-size:40px;
          text-align: center;
          text-transform: uppercase;
          font-family: 'Open Sans', sans-serif;
          text-decoration:none;
            
        }

        .num_1 {transform: rotate(120deg); top:20px;}
        .num_2 {transform: rotate(96deg); top:13px; left:5px}
        .num_3 {transform: rotate(74deg); top:21px;}
        .num_4 {transform: rotate(50deg); top:25px;}
        .num_5 {transform: rotate(26deg);  top:30px;left:-8px}
        .num_6 {transform: rotate(2deg); top:35px;left:-8px}
        .num_7 {transform: rotate(338deg); top:40px;left:-7px;}
        .num_8 {transform: rotate(314deg);top:45px; left:-4px}
        .num_9 {transform: rotate(290deg);top:50px;}
        .num_10 {transform: rotate(266deg);top:60px;left:8px}
        .num_11 {transform: rotate(242deg);top:75px;left:8px}

        .voltage {
          color:#FFF;
          left:39%;
          top:70%;
          font-size:60px;
          margin: -25px 0 0 -25px;
          border-radius: 50%;
          position: absolute;
        }

        .line {
          transition: all ${animationDuration}ms ease-in-out;
          background: #F14134;
          background-image: linear-gradient(to bottom, #F14134, #343536);
          height: 0;
          left: 50%;
          position: absolute;
          top: 50%;
          width: 0;
          transform-origin: 50% 100%;
          margin: -285px -8px 0;
          padding: 285px 8px 0;
          z-index:2;
          border-radius: 50% 50% 0 0;           
        }

        .pin {
          width: 50px;
          height: 50px;
          left:50%;
          top:50%;
          margin: -25px 0 0 -25px;
          background-color: #343536;
          border-radius: 50%;
          position: absolute;
          box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.5);
          background-image: linear-gradient(to bottom, #F14134, #343536);
          z-index: 4;
        }


        .inner {
          width: 30px;
          height: 30px;
          margin: 10px auto 0;
          background-color: #343536;
          border-radius: 100%;
          box-shadow: inset 0 8px 15px 0 rgba(167, 23, 10, 0.4);
          position: relative;
        }
    `}</style>
    </div>
  )