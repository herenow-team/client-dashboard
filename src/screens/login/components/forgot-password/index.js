import React from 'react'
import {Link} from 'react-router-dom'

const ForgotPassword = () => (
  <div className="has-text-success has-text-centered">
    <Link to="/forgot-password" className="has-text-success">
      Esqueceu sua senha?
    </Link>
  </div>
)

export default ForgotPassword
