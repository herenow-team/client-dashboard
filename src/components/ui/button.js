import React from 'react'
import PropTypes from 'prop-types'

const Button = ({name}) => (
  <button type="submit" className="button is-success is-fullwidth is-medium">
    {name}
  </button>
)

Button.propTypes = {
  name: PropTypes.string.isRequired
}

export default Button
