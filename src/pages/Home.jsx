import React from 'react'
import BannerMain from '../components/bannerMain/BannerMain';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

import mainImage from '../images/mainImage.png';

import './pages.scss';

const AboutClubPage = () => {
  return (
    <>
        <Header img={mainImage} title="Петербургский теннисный клуб имени М.А. Пасечникова" Component={BannerMain}/>
        <div className="container">
            
        </div>
        <Footer />
    </>
  )
}

export default AboutClubPage