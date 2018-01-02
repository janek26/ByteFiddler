const rgba_value = (red, green, blue, transparency) => `rgba(${red}, ${green}, ${blue}, ${transparency})`

export default ({
  digits,
  ...rest
}) => {
  const joinedDigits = digits.join('')
  const digitsAsInt = parseInt(joinedDigits, 2)
  const digitsAsHex = digitsAsInt.toString(16)

  return (
    <div>
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
          grid-gap: 1em;
          width: 100%;
          padding: 10px;
        }
      `}</style>
    </div>
  )
}
