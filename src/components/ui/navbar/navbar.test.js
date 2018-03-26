import React from 'react'
import renderer from 'react-test-renderer'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './index'

describe('<Navbar /> component', () => {
  it('should render correctly', () => {
    const links = [
      {href: '/', text: 'Home'},
      {href: '/about', text: 'About'},
      {href: '/topics', text: 'Topics'},
      {href: '/timer', text: 'Timer'}
    ]

    const tree = renderer
      .create(
        <Router>
          <Navbar links={links} />
        </Router>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
