import React from 'react'
import {Link} from 'react-router-dom'
import Section from '../components/ui/section'
import Button from '../components/ui/button'
import Text from '../components/ui/fields/text'
import Password from '../components/ui/fields/password'
import style from './style.css'

const Login = () => (
  <Section>
    <div className="columns is-centered">
      <div className="column is-one-third is-narrow">
        <Text label={false} placeholder="Digite seu e-mail" />
        <Password label={false} placeholder="Digite o Senha" />
        <Button type="submit" name="Entrar" />
      </div>
    </div>
    <div className="columns is-centered">
      <div className="column is-one-third is-narrow">
        <div className="has-text-success has-text-centered">
          <Link to="/forgot-password" className="has-text-success">
            Esqueceu sua senha?
          </Link>
        </div>
        <p className="has-text-centered">
          Não tem uma conta?
          <Link
            to="/subscribe"
            className={`has-text-success ${style.subscribe}`}
          >
            Inscrever-se
          </Link>
        </p>
      </div>
    </div>
  </Section>
)

export default Login
