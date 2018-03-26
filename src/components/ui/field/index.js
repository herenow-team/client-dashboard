import React from 'react'
import PropTypes from 'prop-types'

const Field = ({label, placeholder, type}) => (
  <div className="field">
    {label && <label>{label}</label>}
    <div className="control">
      <input
        className="input is-medium"
        type={type}
        placeholder={placeholder}
      />
    </div>
  </div>
)

Field.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired
}

Field.defaultProps = {
  type: 'text'
}

export default Field
