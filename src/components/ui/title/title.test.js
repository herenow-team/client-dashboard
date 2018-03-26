import React from 'react'
import renderer from 'react-test-renderer'
import Title from './index'

describe('<Title /> component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Title>Some cool title</Title>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support the isCentered prop', () => {
    const tree = renderer
      .create(<Title isCentered>Some cool title</Title>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
