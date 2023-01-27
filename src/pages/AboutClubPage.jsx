import React from 'react'

import {Header, PhotoKart, AboutClub, Rules} from '../components/About'
import Footer from '../components/footer/Footer';

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
        <Footer />
    </>
  )
}

export default AboutClubPage