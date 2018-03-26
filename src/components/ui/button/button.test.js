import React from 'react'
import renderer from 'react-test-renderer'
import Button from './index'

describe('<Button /> component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Button type="submit">Name</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
