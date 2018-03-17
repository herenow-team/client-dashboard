import React from 'react'
import Container from '../../components/ui/container'
import Section from '../../components/ui/section'
import Button from '../../components/ui/button'
import UserName from '../../components/ui/fields/username'
import PasswordField from '../../components/ui/fields/password'
import style from './style.css'

const LoginScreen = () => (
  <div>
    <header className={`${style.header}`}>
      <h1 className={`has-text-success ${style.logo}`}>LOGO GOES HERE</h1>
    </header>
    <Container>
      <Section>
        <div className="columns is-centered">
          <div className="column is-half is-narrow">
            <UserName placeholder="Digite seu e-mail" />
            <PasswordField placeholder="Digite o Senha" />
            <Button name="Entrar" type="button" />
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-half is-narrow">
            <div className="has-text-success has-text-centered">
              <a src="#" className="has-text-success">
                Esqueceu sua senha?
              </a>
            </div>
            <div className="has-text-success has-text-centered">
              Não tem uma conta? <a src="#">Inscrever-se</a>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  </div>
)

export default LoginScreen
