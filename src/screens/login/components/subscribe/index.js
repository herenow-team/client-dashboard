import React from 'react'
import {Link} from 'react-router-dom'
import style from './style.css'

const Subscribe = () => (
  <p className="has-text-centered">
    Não tem uma conta?
    <Link to="/subscribe" className={`has-text-success ${style.subscribe}`}>
      Inscrever-se
    </Link>
  </p>
)

export default Subscribe
