import React from 'react'
import renderer from 'react-test-renderer'
import {BrowserRouter as Router} from 'react-router-dom'
import UserBaseScreen from './index'

describe('<BaseScreen /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <UserBaseScreen>
            <div>Some content</div>
          </UserBaseScreen>
        </Router>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
