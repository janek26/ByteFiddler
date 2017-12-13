import Digit from './Digit'
import Btn from './Btn'
import Center from './Center'

export default ({
    digits = [],
    fixedNumberOfBits,
    widthPerBit = 60,
    onToggleBit = id => {},
    ...rest,
}) => (
  <div style={{
    width: ((fixedNumberOfBits || digits.length) * widthPerBit)
  }}>
    <div className="display" >
      {
        (fixedNumberOfBits ? (new Array(fixedNumberOfBits)).fill(0) : digits).map((x,i) => 
          <Center key={i}>
            <Digit {...rest} digit={digits[i]} key={i} />
            <Btn 
              style={{marginTop: '1em'}} 
              onClick={onToggleBit.bind(this, i)}
              value={digits[i] === 1}
            />
          </Center>
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