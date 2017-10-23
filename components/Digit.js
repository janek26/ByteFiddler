const compileBorder = (borderSize, borderColor, borderStyle) => `${borderSize} ${borderStyle} ${borderColor}`
const useRightBorder = (shouldBeActive, activeArray, borderSize, borderColor, borderStyle, activeColor, disableBorder=false) =>
  disableBorder ? 
    `none` 
    : 
    activeArray.includes(shouldBeActive) ? 
      compileBorder(borderSize, activeColor, borderStyle) 
      : 
      compileBorder(borderSize, borderColor, borderStyle)

const BorderedBox = ({
  size = '38px',
  borderSize = '5px',
  borderColor = '#ccc',
  borderStyle = 'solid',
  noTopBorder = false,
  active = [],
  activeColor = 'black',
}) => (
  <div>
    <div 
      className='box' 
      style={{
        borderTop: useRightBorder('top', active, borderSize, borderColor, borderStyle, activeColor, noTopBorder),
        borderRight: useRightBorder('right', active, borderSize, borderColor, borderStyle, activeColor),
        borderBottom: useRightBorder('bottom', active, borderSize, borderColor, borderStyle, activeColor),
        borderLeft: useRightBorder('left', active, borderSize, borderColor, borderStyle, activeColor),
      }}
    />
    <style jsx>{`
      .box {
        width: ${size};
        height: ${size};
        display: block;
        border: ${compileBorder(borderSize, borderColor, borderStyle)};
      }
    `}</style>
  </div>
)

const compileBordersFromDigit = (digit, isTopBox = false) => {
  const output = []

  if(isTopBox) {
    const needsTopBorder = [0,2,3,5,6,7,8,9]
    if(needsTopBorder.includes(digit))
      output.push('top')
      
    const needsRightBorder = [0,1,2,3,4,7,8,9]
    if(needsRightBorder.includes(digit))
      output.push('right')
      
    const needsBottomBorder = [2,3,4,5,6,8,9]
    if(needsBottomBorder.includes(digit))
      output.push('bottom')

    const needsLeftBorder = [0,4,5,6,8,9]
    if(needsLeftBorder.includes(digit))
      output.push('left')
  } else {
    const needsRightBorder = [0,1,3,4,5,6,7,8,9]
    if(needsRightBorder.includes(digit))
      output.push('right')
      
    const needsBottomBorder = [0,2,3,5,6,8,9]
    if(needsBottomBorder.includes(digit))
      output.push('bottom')

    const needsLeftBorder = [0,2,6,8]
    if(needsLeftBorder.includes(digit))
      output.push('left')
  }

  return output
}

export default ({digit}) => (
  <div>
    <BorderedBox 
      active={compileBordersFromDigit(digit, true)}
    />
    <BorderedBox 
      active={compileBordersFromDigit(digit)} 
      noTopBorder 
    />
  </div>
)