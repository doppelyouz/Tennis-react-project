import React from 'react'

import { PhotoKart, AboutClub, Rules} from '../components/About'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

import aboutClubImage from '../images/about.png';

import './pages.scss';

const AboutClubPage = () => {
  return (
    <>
        <Header img={aboutClubImage} title="О клубе" page="AboutPage"/>
        <div className="container">
          <PhotoKart />
          <AboutClub />
          <Rules />
        </div>
        <Footer />
    </>
  )
}

export default AboutClubPage