import React from 'react'
import PropTypes from 'prop-types'

const Button = ({type, name}) => (
  <button
    type={type}
    className="button is-success is-fullwidth is-outlined is-rounded"
  >
    {name}
  </button>
)

Button.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Button
