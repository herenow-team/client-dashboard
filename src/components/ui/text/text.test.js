import React from 'react'
import renderer from 'react-test-renderer'
import Text from './index'

describe('<Text /> component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Text>Some cool text</Text>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support the isCentered prop', () => {
    const tree = renderer
      .create(<Text isCentered>Some cool text</Text>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
