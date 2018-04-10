import React from 'react'
import PropTypes from 'prop-types'
import {Container, Section} from 'bulma-ui'
import Navbar from '../../components/ui/navbar'

const links = [
  {href: '/', text: 'Home'},
  {href: '/signup', text: 'Inscrever-se'},
  {href: '/login', text: 'Login'},
  {href: '/forgot-password', text: 'Esqueceu a senha'}
]

const BaseScreen = ({children}) => (
  <div>
    <Navbar links={links} />

    <Section>
      <Container>{children}</Container>
    </Section>
  </div>
)

BaseScreen.propTypes = {
  children: PropTypes.node.isRequired
}

export default BaseScreen
