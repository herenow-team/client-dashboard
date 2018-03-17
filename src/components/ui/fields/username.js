import React from 'react'
import PropTypes from 'prop-types'

const Text = ({label, placeholder}) => (
  <div className="field">
    {label && <label>{label}</label>}
    <div className="control has-icons-left">
      <input
        className="input is-medium"
        type="text"
        placeholder={placeholder}
      />
      <span className="icon is-small is-left">
        <i className="fa fa-user" />
      </span>
    </div>
  </div>
)

Text.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string
}

Text.defaultProps = {
  label: null,
  placeholder: ''
}

export default Text
