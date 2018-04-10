import React from 'react'
import {withStepper} from 'react-step'
import style from './style.css'

const StepTitle = withStepper(({pages, currentPage}) => (
  <span className={`has-text-success ${style.title}`}>
    {pages[currentPage].title}
  </span>
))

export default StepTitle
