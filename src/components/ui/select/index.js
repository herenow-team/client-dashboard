import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Select = ({
  name,
  label,
  options,
  isSmall,
  isMedium,
  isLarge,
  isDanger,
  isSuccess,
  errorMessage,
  ...props
}) => (
  <div className="field">
    {label && <label htmlFor={`input-${name}`}>{label}</label>}
    <div className="control">
      <div
        className={classnames('select', {
          'is-small': isSmall,
          'is-medium': isMedium,
          'is-large': isLarge,
          'is-danger': isDanger,
          'is-success': isSuccess
        })}
      >
        <select id={`input-${name}`} name={name} {...props}>
          {options.map(({value, text}) => (
            <option key={`${name}-option-${value}`} value={value}>
              {text}
            </option>
          ))}
        </select>
      </div>
    </div>
    {isDanger &&
      errorMessage && <p className="help is-danger">{errorMessage}</p>}
  </div>
)

Select.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  isSmall: PropTypes.bool,
  isMedium: PropTypes.bool,
  isLarge: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isDanger: PropTypes.bool,
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}

Select.defaultProps = {
  isSuccess: false,
  isDanger: false,
  isSmall: false,
  isMedium: false,
  isLarge: false,
  errorMessage: false
}

export default Select
