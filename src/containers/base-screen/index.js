import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../components/ui/navbar'
import Section from '../../components/ui/section'
import Container from '../../components/ui/container'

const links = [
  {href: '/', text: 'Home'},
  {href: '/subscribe', text: 'Subscribe'},
  {href: '/login', text: 'Login'},
  {href: '/forgot-password', text: 'Forgot Password'}
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
