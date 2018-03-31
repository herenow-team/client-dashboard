import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Button = ({
  type,
  children,
  isSuccess,
  isFullWidth,
  isOutlined,
  isRounded,
  isMedium,
  isLoading
}) => (
  <button
    type={type}
    className={classnames('button', {
      'is-success': isSuccess,
      'is-fullwidth': isFullWidth,
      'is-outlined': isOutlined,
      'is-rounded': isRounded,
      'is-medium': isMedium,
      'is-loading': isLoading
    })}
  >
    {children}
  </button>
)

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isSuccess: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isOutlined: PropTypes.bool,
  isRounded: PropTypes.bool,
  isMedium: PropTypes.bool,
  isLoading: PropTypes.bool
}

Button.defaultProps = {
  isSuccess: false,
  isFullWidth: false,
  isOutlined: false,
  isRounded: false,
  isMedium: false,
  isLoading: false
}

export default Button
