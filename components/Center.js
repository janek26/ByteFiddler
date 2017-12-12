export default ({
  style = {},
  flex = 'column',
  ...props
}) => (
  <div>
    <div className='center' style={{ ...style, flexDirection: flex }} {...props} />
    <style jsx>{`
      .center {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
)