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
        border: 1px solid #696969;
        border-radius: .6em;
        cursor: pointer;
      }
      .slider {
        width: 1.2em;
        height: 1.2em;
        border-radius: 50%;
        background-color: #2ecc71;
        background-image: linear-gradient(green,lightgreen);

        transition: all 200ms ease-in-out;
      }
      .slider.off {
        background-color: #e74c3c;
        background-image: linear-gradient(#fd0000,#ea0b0b);
        transform: translateY(.8em);
      }
    `}</style>
  </div>
)
