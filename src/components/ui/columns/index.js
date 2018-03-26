import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Columns = ({isCentered, children}) => (
  <div className={classnames('columns', {'is-centered': isCentered})}>
    {children}
  </div>
)

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  isCentered: PropTypes.bool
}

Columns.defaultProps = {
  isCentered: false
}

export default Columns
