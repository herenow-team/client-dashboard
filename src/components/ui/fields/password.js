import React from 'react'
import PropTypes from 'prop-types'

const Password = ({label, placeholder}) => (
  <div className="field">
    {label && <label>{label}</label>}
    <div className="control">
      <input
        className="input is-medium"
        type="password"
        placeholder={placeholder}
      />
    </div>
  </div>
)

Password.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  placeholder: PropTypes.string.isRequired
}

export default Password
