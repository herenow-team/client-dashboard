import React from 'react'
import {Helmet} from 'react-helmet'
import BaseScreen from '../../containers/base-screen'
import Title from '../../components/ui/title'

const Home = () => (
  <BaseScreen>
    <Helmet>
      <title>Dashboard - HereNow</title>
    </Helmet>
    <div>
      <Title>Home</Title>
    </div>
  </BaseScreen>
)

export default Home
