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
          <span>{digitsAsInt}</span>
        </div>
        <div>
          <h3>Hexadecimal</h3>
          <span>{digitsAsHex}</span>
        </div>
        <div>
          <h3>ASCII</h3>
          <span>"{String.fromCharCode(digitsAsInt)}"</span>
        </div>

      </div>
      <style jsx>{`
        .grid {
          margin-top: 10px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 1em;
          width: 100%;
          padding: 10px;
          font-family: Arial, sans-serif;
        }
      `}</style>
    </div>
  )
}
