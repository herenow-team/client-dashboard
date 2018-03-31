import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Field = ({
  label,
  placeholder,
  type,
  name,
  isSmall,
  isMedium,
  isLarge,
  ...props
}) => (
  <div className="field">
    {label && <label htmlFor={`input-${name}`}>{label}</label>}
    <div className="control">
      <input
        name={name}
        id={`input-${name}`}
        className={classnames('input', {
          'is-small': isSmall,
          'is-medium': isMedium,
          'is-large': isLarge
        })}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  </div>
)

Field.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isSmall: PropTypes.bool,
  isMedium: PropTypes.bool,
  isLarge: PropTypes.bool
}

Field.defaultProps = {
  type: 'text',
  isSmall: false,
  isMedium: false,
  isLarge: false
}

export default Field
