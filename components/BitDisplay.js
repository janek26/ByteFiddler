import Digit from './Digit'

export default ({
    digits = [],
    fixedNumberOfBits,
    widthPerBit = 60,
    ...rest
}) => (
  <div style={{
    width: ((fixedNumberOfBits || digits.length) * widthPerBit)
  }}>
    <div className="display" >
      {
        (fixedNumberOfBits ? (new Array(fixedNumberOfBits)).fill(0) : digits).map((x,i) => 
          <Digit {...rest} digit={digits[i]} />
        )
      }
    </div>
    <style jsx>{`
      .display {
        display: grid;
        grid-template-columns: repeat(${(fixedNumberOfBits || digits.length)}, 1fr);
      }
    `}</style>
  </div>
)