import React from 'react'
import {Helmet} from 'react-helmet'
import UserBaseScreen from '../../containers/user-base-screen'
import Screen from './components/screen'
import Form from './containers/form'

const Login = () => (
  <UserBaseScreen>
    <Helmet>
      <title>Login - HereNow</title>
    </Helmet>
    <Screen>
      <Form />
    </Screen>
  </UserBaseScreen>
)

export default Login
