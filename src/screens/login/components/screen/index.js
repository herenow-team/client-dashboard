import React from 'react'
import PropTypes from 'prop-types'
import Section from '../../../../components/ui/section'
import Columns from '../../../../components/ui/columns'
import Column from '../../../../components/ui/column'
import Subscribe from '../subscribe'
import ForgotPassword from '../forgot-password'

const Screen = ({children}) => (
  <Section>
    <Columns isCentered>
      <Column isOneThird>{children}</Column>
    </Columns>
    <Columns isCentered>
      <Column isOneThird>
        <ForgotPassword />
        <Subscribe />
      </Column>
    </Columns>
  </Section>
)

Screen.propTypes = {
  children: PropTypes.node.isRequired
}

export default Screen
