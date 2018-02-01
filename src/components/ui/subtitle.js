import React from 'react'
import PropTypes from 'prop-types'

const Subtitle = ({children}) => <h2 className="subtitle">{children}</h2>

Subtitle.propTypes = {
  children: PropTypes.node.isRequired
}

export default Subtitle
