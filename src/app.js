import React from 'react'
import Async from 'react-code-splitting'
import {Router, Switch, Route} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import history from './core/history'
import BaseScreen from './containers/base-screen'
import UserBaseScreen from './containers/user-base-screen'
import './app.scss'

const Home = props => (
  <Async load={import('./screens/home')} componentProps={props} />
)

const Login = props => (
  <Async load={import('./screens/login')} componentProps={props} />
)

const ForgotPassword = props => (
  <Async load={import('./screens/forgot-password')} componentProps={props} />
)

const Signup = props => (
  <Async load={import('./screens/signup')} componentProps={props} />
)

const NoMatch = props => (
  <Async load={import('./screens/no-match')} componentProps={props} />
)

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/login">
        <UserBaseScreen>
          <Helmet>
            <title>Login - HereNow</title>
          </Helmet>
          <Login />
        </UserBaseScreen>
      </Route>
      <Route exact path="/signup">
        <UserBaseScreen>
          <Helmet>
            <title>Increver-se - HereNow</title>
          </Helmet>
          <Signup />
        </UserBaseScreen>
      </Route>
      <Route exact path="/forgot-password">
        <UserBaseScreen>
          <Helmet>
            <title>Redefinir sua senha - HereNow</title>
          </Helmet>
          <ForgotPassword />
        </UserBaseScreen>
      </Route>
      <Route>
        <BaseScreen>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </BaseScreen>
      </Route>
    </Switch>
  </Router>
)

export default App
