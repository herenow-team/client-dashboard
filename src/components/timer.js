import React from 'react'
import PropTypes from 'prop-types'
import Title from './ui/title'

const Timer = ({onResetClick, seconds}) => (
  <div>
    <Title>Timer</Title>
    <p>
      Seconds:
      {seconds}
    </p>
    <button type="button" onClick={onResetClick}>
      Reset
    </button>
  </div>
)

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  onResetClick: PropTypes.func.isRequired
}

export default Timer
