export default ({
  rgba_value,
  ...rest
}) => (
  <div>
  <div id="ledrahmen">
  <div id="led">
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
      background-color: rgba(${rgba_value}); /* rgb werte ohne transperenz, hierim kommentar mit transperenz rgba(230,140,140,1.0); */
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
