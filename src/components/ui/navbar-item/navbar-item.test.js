import React from 'react'
import renderer from 'react-test-renderer'
import {BrowserRouter as Router} from 'react-router-dom'
import NavbarItem from '.'

describe('<NavbarItem /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <NavbarItem href="/home" text="Home" />
        </Router>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
