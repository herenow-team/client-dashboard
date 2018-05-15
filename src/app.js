import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import * as Routes from './routes'
import './app.scss'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Routes.Login} />
      <Route exact path="/signup" component={Routes.Signup} />
      <Route exact path="/forgot-password" component={Routes.ForgotPassword} />
      <Route exact path="/" component={Routes.Home} />
      <Route component={Routes.NoMatch} />
    </Switch>
  </BrowserRouter>
)

export default App
