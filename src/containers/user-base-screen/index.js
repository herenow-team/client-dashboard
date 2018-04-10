import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Container} from 'bulma-ui'
import style from './style.css'

const Header = () => (
  <header className={style.header}>
    <Link to="/" className={`has-text-success ${style.logo}`}>
      LOGO GOES HERE
    </Link>
  </header>
)

const UserBaseScreen = ({children}) => (
  <div>
    <Header />
    <Container>{children}</Container>
  </div>
)

UserBaseScreen.propTypes = {
  children: PropTypes.node.isRequired
}

export default UserBaseScreen
