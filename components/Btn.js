export default ({
  value = false,
  ...rest
}) => (
  <div>
    <div className='btn' {...rest}>
      <div className={`slider ${value ? 'on' : 'off'}`} />
    </div>
    <style jsx>{`
      .btn {
        height: 2em;
        border: 1px solid #ccc;
        border-radius: .6em;
        cursor: pointer;
      }
      .slider {
        width: 1.2em;
        height: 1.2em;
        border-radius: 50%;
        background-color: #2ecc71;
        transition: all 200ms ease-in-out;
      }
      .slider.off {
        background-color: #e74c3c;
        transform: translateY(.8em);
      }
    `}</style>
  </div>
)