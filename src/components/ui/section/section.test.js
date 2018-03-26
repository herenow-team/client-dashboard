import React from 'react'
import renderer from 'react-test-renderer'
import Section from './index'

describe('<Section /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Section>
          <div>Some content</div>
        </Section>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
