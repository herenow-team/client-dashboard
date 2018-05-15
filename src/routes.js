import loadable from 'loadable-components'

export const Home = loadable(() => import('./screens/home'))
export const Login = loadable(() => import('./screens/login'))
export const ForgotPassword = loadable(() =>
  import('./screens/forgot-password')
)
export const Signup = loadable(() => import('./screens/signup'))
export const NoMatch = loadable(() => import('./screens/no-match'))
