import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Applications Architect</title>
        <meta property="og:title" content="Dynamic Applications Architect" />
      </Helmet>
    </div>
  )
}

export default Home
