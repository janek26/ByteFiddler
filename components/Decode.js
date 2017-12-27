const rgba_value = (red, green, blue, transparency) => `rgba(${red}, ${green}, ${blue}, ${transparency})`

export default ({
  digits,
  ...rest
}) => {
  const joinedDigits = digits.join('')
  const digitsAsInt = parseInt(joinedDigits, 2)
  const digitsAsHex = digitsAsInt.toString(16)

  return (
    <div {...rest}>
      <div className='grid'>
        <div>
          <h3>Decimal</h3>
          <h2>{digitsAsInt}</h2>
        </div>
        <div>
          <h3>Hexadecimal</h3>          
          <h2>{digitsAsHex}</h2>
        </div>
        <div>
          <h3>ASCII</h3>          
          <h2>"{String.fromCharCode(digitsAsInt)}"</h2>
        </div>
      </div>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 3em;
          border-bottom: 1px solid #ccc;
          border-top: 1px solid #ccc;
          width: 100%;
        }
      `}</style>
    </div>
  )
}
