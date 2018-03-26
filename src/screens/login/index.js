import React from 'react'
import Section from '../../components/ui/section'
import Button from '../../components/ui/button'
import Field from '../../components/ui/field'
import Columns from '../../components/ui/columns'
import Column from '../../components/ui/column'
import Subscribe from './components/subscribe'
import ForgotPassword from './components/forgot-password'

const Login = () => (
  <Section>
    <Columns isCentered>
      <Column isOneThird>
        <Field
          type="email"
          name="email"
          label={false}
          placeholder="Digite seu e-mail"
        />
        <Field
          type="password"
          name="password"
          label={false}
          placeholder="Digite a Senha"
        />
        <Button
          type="submit"
          isSuccess
          isFullWidth
          isOutlined
          isRounded
          isMedium
        >
          Entrar
        </Button>
      </Column>
    </Columns>
    <Columns isCentered>
      <Column isOneThird>
        <ForgotPassword />
        <Subscribe />
      </Column>
    </Columns>
  </Section>
)

export default Login
