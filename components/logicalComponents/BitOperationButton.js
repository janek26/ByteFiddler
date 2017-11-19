import PropTypes from 'prop-types'

const BitOperationButton = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

BitOperationButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}


export default BitOperationButton
