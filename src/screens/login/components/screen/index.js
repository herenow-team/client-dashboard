import React from 'react'
import PropTypes from 'prop-types'
import {Columns, Column, Section} from 'bulma-ui'
import Singup from '../signup'
import ForgotPassword from '../forgot-password'

const Screen = ({children}) => (
  <Section>
    <Columns isCentered>
      <Column size="1/3">{children}</Column>
    </Columns>
    <Columns isCentered>
      <Column size="1/3">
        <ForgotPassword />
        <Singup />
      </Column>
    </Columns>
  </Section>
)

Screen.propTypes = {
  children: PropTypes.node.isRequired
}

export default Screen
