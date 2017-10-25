export default ({
  captionStyle = (marginBottom, width, fontSize, textAlign ) => {'0px', '317px', '1em', 'center'},
  buttonStyle = (width, height, margin) => {'20px', '15px', '5px'},
  ...rest
}) => (

  <div>
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
    <div id="result">
    </div>
  </div>
)
