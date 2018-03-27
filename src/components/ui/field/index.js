import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Field = ({
  label,
  placeholder,
  type,
  name,
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
        className={classnames('input', 'is-medium', {
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
  errorMessage: PropTypes.string,
  isSuccess: PropTypes.bool,
  isDanger: PropTypes.bool,
  placeholder: PropTypes.string.isRequired
}

Field.defaultProps = {
  type: 'text',
  errorMessage: '',
  isSuccess: false,
  isDanger: false
}

export default Field
