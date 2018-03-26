import React from 'react'
import Async from 'react-code-splitting'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import BaseScreen from './containers/base-screen'
import UserBaseScreen from './containers/user-base-screen'
import './app.scss'

const Home = props => (
  <Async load={import('./screens/home')} componentProps={props} />
)

const NoMatch = props => (
  <Async load={import('./screens/no-match')} componentProps={props} />
)

const Login = props => <Async load={import('./login')} componentProps={props} />

const ForgotPassword = props => (
  <Async load={import('./screens/forgot-password')} componentProps={props} />
)

const Subscribe = props => (
  <Async load={import('./subscribe')} componentProps={props} />
)

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/login">
        <UserBaseScreen>
          <Login />
        </UserBaseScreen>
      </Route>
      <Route exact path="/subscribe">
        <UserBaseScreen>
          <Subscribe />
        </UserBaseScreen>
      </Route>
      <Route exact path="/forgot-password">
        <UserBaseScreen>
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
