import React from 'react'
import PropTypes from 'prop-types'
import Container from '../../components/ui/container'
import style from './style.css'

const Header = () => (
  <header className={style.header}>
    <h1 className={`has-text-success ${style.logo}`}>LOGO GOES HERE</h1>
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
