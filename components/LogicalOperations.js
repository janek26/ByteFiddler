const captionStyle = (marginBottom, width, fontSize, textAlign ) => {'0px', '317px', '1em', 'center'}


export default ({
  ...rest
}) => (

<div>
  <style jsx>{`
      button.set {
        width: 20px;
        height: 15px;
        margin: 5px 5px;
      }
    `}</style>


    <div id="group1">

      <button class="set"></button>
      <button class="set"></button>
      <button class="set"></button>
      <button class="set"></button>
      <button class="set"></button>
      <button class="set"></button>
      <button class="set"></button>
      <button class="set"></button>
    </div>


    <div class="operands">
      <button id="or">or</button>
      <button id="and">and</button>
      <button id="xor">xor</button>
      <button id="xnor">xnor</button>

      <button id="add">add</button>
      <button id="sub">sub</button>
      <button id="mul">mul</button>
      <button id="div">div</button>
    </div>


    <div id="group2">
      <button class="set"></button>
      <button class="set"></button>
      <button class="set"></button>
      <button class="set"></button>
      <button class="set"></button>
      <button class="set"></button>
      <button class="set"></button>
      <button class="set"></button>
    </div>

    <div id="result">
    </div>
  </div>
)
