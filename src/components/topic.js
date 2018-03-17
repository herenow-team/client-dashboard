import React from 'react'
import PropTypes from 'prop-types'
import Subtitle from './ui/subtitle'

const Topic = ({match}) => (
  <div>
    <Subtitle>{match.params.topicId}</Subtitle>
  </div>
)

Topic.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      topicId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default Topic
