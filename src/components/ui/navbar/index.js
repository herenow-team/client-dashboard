import React from 'react'
import PropTypes from 'prop-types'
import NavbarItem from '../navbar-item'

const Navbar = ({links}) => (
  <nav className="navbar is-transparent">
    <ul className="navbar-start">
      {links.map(({href, text}) => (
        <NavbarItem key={href} href={href} text={text} />
      ))}
    </ul>
  </nav>
)

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Navbar
