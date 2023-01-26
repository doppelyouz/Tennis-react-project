import React from 'react'
import { Link } from 'react-router-dom'

import {Header, PhotoKart,AboutClub} from '../components/About'

import './aboutPage.scss';

const AboutClubPage = () => {
  return (
    <>
        <Header />
        <div className="contaier">
          <PhotoKart />
          <AboutClub />
        </div>
        <Link to="/">Main</Link>
    </>
  )
}

export default AboutClubPage