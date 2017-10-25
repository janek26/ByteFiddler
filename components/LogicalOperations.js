const captionStyle = (marginBottom, width, fontSize, textAlign ) => {'0px', '317px', '1em', 'center'}


export default ({
  ...rest
}) => (

<div>
  <style jsx>{`
      #group1, #group2, #result {
        width: 315px;
        height: 60px;
        border: 1px solid black;

      }

      #group1 {
        margin: 0 0 10px 0;
      }

      #group2 {
        margin: 0;
      }

      #result {
        height: 40px;
      }

      button.set {
        width: 20px;
        height: 15px;
        margin: 5px 5px;
      }
    `}</style>


    <div id="group1">


      <span class="numGroup">
        <button class="set"></button>
      </span>

      <span class="numGroup">
        <button class="set"></button>
      </span>

      <span class="numGroup">
        <button class="set"></button>
      </span>

      <span class="numGroup">
        <button class="set"></button>
      </span>

      <span class="numGroup">
        <button class="set"></button>
      </span>

      <span class="numGroup">
        <button class="set"></button>
      </span>

      <span class="numGroup">
        <button class="set"></button>
      </span>

      <span class="numGroup">
        <button class="set"></button>
      </span>
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


      <span class="numGroup">
        <button class="set"></button>
      </span>

      <span class="numGroup">
        <button class="set"></button>
      </span>

      <span class="numGroup">
        <button class="set"></button>
      </span>

      <span class="numGroup">
        <button class="set"></button>
      </span>

      <span class="numGroup">
        <button class="set"></button>
      </span>

      <span class="numGroup">
        <button class="set"></button>
      </span>

      <span class="numGroup">
        <button class="set"></button>
      </span>

      <span class="numGroup">
        <button class="set"></button>
      </span>
    </div>

    <div id="result">
    </div>
  </div>
)
