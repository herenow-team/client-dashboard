import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Message = ({text, isDanger, isInfo}) => (
  <article
    className={classnames('message', {
      'is-danger': isDanger,
      'is-info': isInfo
    })}
  >
    <div className="message-body">{text}</div>
  </article>
)

Message.propTypes = {
  text: PropTypes.string.isRequired,
  isInfo: PropTypes.bool,
  isDanger: PropTypes.bool
}

Message.defaultProps = {
  isInfo: false,
  isDanger: false
}

export default Message
