import React from 'react'
import PropTypes from 'prop-types'
import style from './style.css'

const Radio = ({name, options}) => (
  <div className={`control ${style.container}`}>
    {options.map(({text, value, checked}) => (
      <label key={`${text}-${value}`} className="radio">
        <input
          className={style.input}
          defaultChecked={checked}
          name={name}
          type="radio"
          value={value}
        />
        {text}
      </label>
    ))}
  </div>
)

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
}

export default Radio
