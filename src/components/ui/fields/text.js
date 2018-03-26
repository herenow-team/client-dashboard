import React from 'react'
import PropTypes from 'prop-types'

const Text = ({label, placeholder}) => (
  <div className="field">
    {label && <label>{label}</label>}
    <div className="control">
      <input
        className="input is-medium"
        type="text"
        placeholder={placeholder}
      />
    </div>
  </div>
)

Text.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  placeholder: PropTypes.string.isRequired
}

export default Text
