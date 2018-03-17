import React from 'react'
import PropTypes from 'prop-types'

const Password = ({label, placeholder}) => (
  <div className="field">
    {label && <label>{label}</label>}
    <div className="control has-icons-left">
      <input
        className="input is-medium"
        type="password"
        placeholder={placeholder}
      />
      <span className="icon is-small is-left">
        <i className="fa fa-lock" />
      </span>
    </div>
  </div>
)

Password.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string
}

Password.defaultProps = {
  label: null,
  placeholder: ''
}

export default Password
