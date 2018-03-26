import React from 'react'
import PropTypes from 'prop-types'

const Field = ({label, placeholder, type, name}) => (
  <div className="field">
    {label && <label htmlFor={`input-${name}`}>{label}</label>}
    <div className="control">
      <input
        name={name}
        id={`input-${name}`}
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
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}

Field.defaultProps = {
  type: 'text'
}

export default Field
