import React from 'react'
import renderer from 'react-test-renderer'
import {BrowserRouter as Router} from 'react-router-dom'
import BaseScreen from '../../src/containers/base-screen'

describe('<BaseScreen /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <BaseScreen>
            <div>Some content</div>
          </BaseScreen>
        </Router>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
