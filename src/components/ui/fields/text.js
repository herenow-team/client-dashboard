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
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  placeholder: PropTypes.string
}

Text.defaultProps = {
  label: false,
  placeholder: ''
}

export default Text
