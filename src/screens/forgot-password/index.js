import React from 'react'
import Title from '../../components/ui/title'
import Columns from '../../components/ui/columns'
import Section from '../../components/ui/section'
import Column from '../../components/ui/column'
import Field from '../../components/ui/field'
import Text from '../../components/ui/text'
import Button from '../../components/ui/button'

const ForgotPassword = () => (
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
      <Column isOneThird>
        <Field
          type="email"
          name="email"
          label="Email"
          placeholder="Digite seu e-mail"
        />
        <Button
          type="submit"
          isSuccess
          isFullWidth
          isOutlined
          isRounded
          isMedium
        >
          Enviar
        </Button>
      </Column>
    </Columns>
  </Section>
)

export default ForgotPassword
