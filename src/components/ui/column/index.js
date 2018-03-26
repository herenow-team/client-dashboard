import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Column = ({isOneThird, children}) => (
  <div className={classnames('column', {'is-one-third': isOneThird})}>
    {children}
  </div>
)

Column.propTypes = {
  children: PropTypes.node.isRequired,
  isOneThird: PropTypes.bool
}

Column.defaultProps = {
  isOneThird: false
}

export default Column
