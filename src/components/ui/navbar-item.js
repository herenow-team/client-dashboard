import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const NavbarItem = ({href, text}) => (
  <li className="navbar-item">
    <Link to={href}>{text}</Link>
  </li>
)

NavbarItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default NavbarItem
