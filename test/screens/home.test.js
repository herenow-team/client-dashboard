import React from 'react'
import renderer from 'react-test-renderer'
import Home from '../../src/screens/home'

describe('<Home /> component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
