import React from 'react'
import renderer from 'react-test-renderer'
import Field from '.'

describe('<Field /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Field
          name="something"
          label="Some label"
          placeholder="Some placeholder"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support label prop', () => {
    const tree = renderer
      .create(
        <Field
          name="password"
          type="password"
          label={false}
          placeholder="Some placeholder"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support type prop', () => {
    const tree = renderer
      .create(
        <Field
          name="password"
          type="password"
          label="Some label"
          placeholder="Some placeholder"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should support isSmall prop', () => {
    const tree = renderer
      .create(
        <Field
          name="password"
          type="password"
          label="Some label"
          placeholder="Some placeholder"
          isSmall
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isMedium prop', () => {
    const tree = renderer
      .create(
        <Field
          name="password"
          type="password"
          label="Some label"
          placeholder="Some placeholder"
          isMedium
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isLarge prop', () => {
    const tree = renderer
      .create(
        <Field
          name="password"
          type="password"
          label="Some label"
          placeholder="Some placeholder"
          isLarge
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
