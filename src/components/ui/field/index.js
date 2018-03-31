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
  isSuccess,
  isDanger,
  errorMessage,
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
          'is-large': isLarge,
          'is-danger': isDanger,
          'is-success': isSuccess
        })}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      {isDanger && <p className="help is-danger">{errorMessage}</p>}
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
  isLarge: PropTypes.bool,
  errorMessage: PropTypes.string,
  isSuccess: PropTypes.bool,
  isDanger: PropTypes.bool
}

Field.defaultProps = {
  type: 'text',
  isSmall: false,
  isMedium: false,
  isLarge: false,
  errorMessage: '',
  isSuccess: false,
  isDanger: false
}

export default Field
