import React from 'react'
import PropTypes from 'prop-types'

const Section = ({children}) => <div className="section">{children}</div>

Section.propTypes = {
  children: PropTypes.node.isRequired
}

export default Section
