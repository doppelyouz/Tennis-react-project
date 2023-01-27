import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Link to="about-club">About Club</Link>
      <Link to="news">News</Link>
    </>
  )
}

export default Home