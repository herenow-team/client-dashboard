import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Text = ({isCentered, children}) => (
  <div className={classnames({'has-text-centered': isCentered})}>
    {children}
  </div>
)

Text.propTypes = {
  children: PropTypes.node.isRequired,
  isCentered: PropTypes.bool
}

Text.defaultProps = {
  isCentered: false
}

export default Text
