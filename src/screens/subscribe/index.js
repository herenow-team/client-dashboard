import React from 'react'
import {
  Stepper,
  StepperView,
  ReverseButton,
  AdvanceButton,
  DotTracker
} from 'react-step'
import StepOne from './step-one'
import StepTwo from './step-two'
import StepThree from './step-three'
import StepTitle from './components/title'
import style from './style.css'

const pages = [
  {
    title: 'Dados Básicos',
    component: StepOne
  },
  {
    title: 'Onde te encontrar?',
    component: StepTwo
  },
  {
    title: 'Confirme a localização',
    component: StepThree
  }
]

const Subscribe = () => (
  <Stepper pages={pages}>
    <div className={style.title}>
      <StepTitle />
    </div>
    <div className={style.tracker}>
      <span className={style.separator}>
        <DotTracker />
      </span>
    </div>

    <div className={style.content}>
      <div>
        <StepperView />
      </div>
      <div className={style.bottom}>
        <ReverseButton className="button is-success">Voltar</ReverseButton>
        <span className={style.separator} />
        <AdvanceButton className="button is-success">Continuar</AdvanceButton>
      </div>
    </div>
  </Stepper>
)

export default Subscribe
