import React from 'react'
import Async from 'react-code-splitting'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import BaseScreen from './containers/base-screen'
import './app.scss'

const Home = props => (
  <Async load={import('./screens/home')} componentProps={props} />
)

const About = props => (
  <Async load={import('./screens/about')} componentProps={props} />
)

const Topics = props => (
  <Async load={import('./screens/topics')} componentProps={props} />
)

const Timer = props => (
  <Async load={import('./screens/timer')} componentProps={props} />
)

const NoMatch = props => (
  <Async load={import('./screens/no-match')} componentProps={props} />
)

const Login = () => <div>Login</div>

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route>
        <BaseScreen>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Route path="/timer" component={Timer} />
            <Route component={NoMatch} />
          </Switch>
        </BaseScreen>
      </Route>
    </Switch>
  </Router>
)

export default App
