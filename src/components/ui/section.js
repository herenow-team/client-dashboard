import React from 'react'
import PropTypes from 'prop-types'

const Section = ({children}) => (
  <section className="section">{children}</section>
)

Section.propTypes = {
  children: PropTypes.node.isRequired
}

export default Section
