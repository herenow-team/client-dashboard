import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Title = ({children, isCentered}) => (
  <h1 className={classnames('title', {'has-text-centered': isCentered})}>
    {children}
  </h1>
)

Title.propTypes = {
  children: PropTypes.node.isRequired,
  isCentered: PropTypes.bool
}

Title.defaultProps = {
  isCentered: false
}

export default Title
