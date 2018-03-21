import React from 'react'
import renderer from 'react-test-renderer'
import Container from '../../../src/components/ui/container'

describe('<Container /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Container>
          <div>
Some content
          </div>
        </Container>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})