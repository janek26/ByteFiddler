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
          <h2>Decimal</h2>
          <h3>{digitsAsInt}</h3>
        </div>
        <div>
          <h2>Hexadecimal</h2>
          <h3>{digitsAsHex}</h3>
        </div>
        <div>
          <h2>ASCII</h2>
          <h3>"{String.fromCharCode(digitsAsInt)}"</h3>
        </div>

      </div>
      <style jsx>{`
        .grid {
          margin-top: 10px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          text-align: center;
          grid-gap: 10px;
          width: 100%;
          padding: 5px;
          font-family: Arial, sans-serif;
        }
      `}</style>
    </div>
  )
}
