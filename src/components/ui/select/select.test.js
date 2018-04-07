import React from 'react'
import renderer from 'react-test-renderer'
import Select from './index'

const options = [
  {
    value: 0,
    text: 'Pessoa Jurídica'
  },
  {
    value: 1,
    text: 'Pessoa Física'
  }
]

describe('<Field /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Select name="something" label="Some label" options={options} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support label prop', () => {
    const tree = renderer
      .create(<Select name="something" label={false} options={options} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isSmall prop', () => {
    const tree = renderer
      .create(
        <Select name="something" label="Some label" options={options} isSmall />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isMedium prop', () => {
    const tree = renderer
      .create(
        <Select
          name="something"
          label="Some label"
          options={options}
          isMedium
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isLarge prop', () => {
    const tree = renderer
      .create(
        <Select name="something" label="Some label" options={options} isLarge />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isDanger prop', () => {
    const tree = renderer
      .create(
        <Select
          name="something"
          label="Some label"
          options={options}
          isDanger
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isSuccess prop', () => {
    const tree = renderer
      .create(
        <Select
          name="something"
          label="Some label"
          options={options}
          isSuccess
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support a ErroMessage prop', () => {
    const tree = renderer
      .create(
        <Select
          name="something"
          label="Some label"
          options={options}
          isDanger
          errorMessage="Error"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
