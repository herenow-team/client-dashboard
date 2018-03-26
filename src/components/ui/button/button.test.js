import React from 'react'
import renderer from 'react-test-renderer'
import Button from './index'

describe('<Button /> component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Button type="submit">Name</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support the isSuccess prop', () => {
    const tree = renderer
      .create(
        <Button type="submit" isSuccess>
          Name
        </Button>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support the isFullWidth prop', () => {
    const tree = renderer
      .create(
        <Button type="submit" isFullWidth>
          Name
        </Button>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support the isOutlined prop', () => {
    const tree = renderer
      .create(
        <Button type="submit" isOutlined>
          Name
        </Button>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support the isRounded prop', () => {
    const tree = renderer
      .create(
        <Button type="submit" isRounded>
          Name
        </Button>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support the isMedium prop', () => {
    const tree = renderer
      .create(
        <Button type="submit" isMedium>
          Name
        </Button>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
