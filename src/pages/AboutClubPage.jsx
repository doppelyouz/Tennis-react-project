import React from 'react'
import { Link } from 'react-router-dom'

import {Header, PhotoKart, AboutClub, Rules} from '../components/About'

import './aboutPage.scss';

const AboutClubPage = () => {
  return (
    <>
        <Header />
        <div className="contaier">
          <PhotoKart />
          <AboutClub />
          <Rules />
        </div>
        <Link to="/">Main</Link>
    </>
  )
}

export default AboutClubPage