const rgba_value = (red, green, blue, transparency) => `rgba(${red}, ${green}, ${blue}, ${transparency})`

export default ({
  red,
  green,
  blue,
  transparency = 1,
  ...rest
}) => (
  <div {...rest}>
    <div 
      className='lamp' 
      style={{backgroundColor: rgba_value(red, green, blue, transparency)}}
    />
    <style jsx>{`
      .lamp {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 10px solid black;
      }
    `}</style>
    </div>
  )
