import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Column = ({
  children,
  isOneThird,
  isTwoThirds,
  isOneQuarter,
  isThreeQuarters,
  isFourFifths,
  isThreeFifths,
  isTwoFifths,
  isOneFifth,
  isHalf,
  is,
  offset
}) => (
  <div
    className={classnames('column', {
      'is-one-third': isOneThird,
      'is-two-thirds': isTwoThirds,
      'is-one-quarter': isOneQuarter,
      'is-three-quarters': isThreeQuarters,
      'is-four-fifths': isFourFifths,
      'is-three-fifths': isThreeFifths,
      'is-two-fifths': isTwoFifths,
      'is-one-fifth': isOneFifth,
      'is-half': isHalf,
      [`is-${is}`]: Boolean(is >= 1 && is <= 12),
      [`is-offset-${offset}`]: Boolean(offset >= 1 && offset <= 12)
    })}
  >
    {children}
  </div>
)

Column.propTypes = {
  children: PropTypes.node.isRequired,
  isOneThird: PropTypes.bool,
  isHalf: PropTypes.bool,
  isTwoThirds: PropTypes.bool,
  isOneQuarter: PropTypes.bool,
  isThreeQuarters: PropTypes.bool,
  isFourFifths: PropTypes.bool,
  isThreeFifths: PropTypes.bool,
  isTwoFifths: PropTypes.bool,
  isOneFifth: PropTypes.bool,
  is: PropTypes.number,
  offset: PropTypes.number
}

Column.defaultProps = {
  isHalf: false,
  isOneThird: false,
  isTwoThirds: false,
  isOneQuarter: false,
  isThreeQuarters: false,
  isFourFifths: false,
  isThreeFifths: false,
  isTwoFifths: false,
  isOneFifth: false,
  is: 0,
  offset: 0
}

export default Column
