import React from 'react'
import { Link } from 'react-router-dom'

import {Header, PhotoKart} from '../components/About'

const AboutClubPage = () => {
  return (
    <>
        <Header />
        <PhotoKart />
        <Link to="/">Main</Link>
    </>
  )
}

export default AboutClubPage