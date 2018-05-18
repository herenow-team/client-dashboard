import React from 'react'
import {Columns, Column, Button, Section} from 'bulma-ui'
import {Helmet} from 'react-helmet'
import UserBaseScreen from '../../containers/user-base-screen'
import Title from '../../components/ui/title'
import Field from '../../components/ui/field'
import Text from '../../components/ui/text'

const ForgotPassword = () => (
  <UserBaseScreen>
    <Helmet>
      <title>Redefinir sua senha - HereNow</title>
    </Helmet>
    <Section>
      <Title isCentered>Redefinição de senha</Title>
      <Columns isCentered>
        <Column>
          <Text isCentered>
            Insira o e-mail que você usou no cadastro. Nós mandaremos um e-mail
            com um link para você redefinir sua senha.
          </Text>
        </Column>
      </Columns>
      <Columns isCentered>
        <Column size="1/3">
          <Field
            type="email"
            name="email"
            label="Email"
            placeholder="Digite seu e-mail"
          />
          <Button
            type="submit"
            size="medium"
            color="success"
            isFullWidth
            isOutlined
            isRounded
          >
            Enviar
          </Button>
        </Column>
      </Columns>
    </Section>
  </UserBaseScreen>
)

export default ForgotPassword
