import React from 'react'
import PropTypes from 'prop-types'

const Button = ({type, children}) => (
  <button
    type={type}
    className="button is-success is-fullwidth is-outlined is-rounded"
  >
    {children}
  </button>
)

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Button
