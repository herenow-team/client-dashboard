import React from 'react'
import renderer from 'react-test-renderer'
import Radio from './index'

describe('<Field /> component', () => {
  it('should render correctly', () => {
    const options = [
      {text: 'Sim', value: true, checked: true},
      {text: 'Não', value: false, checked: false}
    ]
    const tree = renderer
      .create(<Radio name="something" options={options} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
