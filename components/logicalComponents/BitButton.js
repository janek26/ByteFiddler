import PropTypes from 'prop-types'

const BitButton = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

BitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default BitButton
