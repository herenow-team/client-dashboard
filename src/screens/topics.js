import React from 'react'
import PropTypes from 'prop-types'
import {Route, Link} from 'react-router-dom'
import Topic from '../components/topic'
import Title from '../components/ui/title'
import Subtitle from '../components/ui/subtitle'

const DefaultTopic = () => <Subtitle>Please select a topic.</Subtitle>

const Topics = ({match}) => (
  <div>
    <Title>Topics</Title>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={DefaultTopic} />
  </div>
)

Topics.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
}

export default Topics
