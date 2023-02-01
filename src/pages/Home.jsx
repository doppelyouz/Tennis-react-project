import React from 'react'
import BannerMain from '../components/bannerMain/BannerMain';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

import {CoachingStaff, ImagesInfo, ServicesAndPrices, SportClub} from '../components/Main';
import { peopleData } from '../data/peopleData';

import mainImage from '../images/mainImage.png';

import './pages.scss';

const AboutClubPage = () => {
  return (
    <>
        <Header img={mainImage} title="Петербургский теннисный клуб имени М.А. Пасечникова" Component={BannerMain} page="HomePage"/>
        <div className="container">
            <ImagesInfo />
            <SportClub />
            <CoachingStaff title="Тренерский состав" images={peopleData}/>
            <ServicesAndPrices />
        </div>
        <Footer page="HomePage"/>
    </>
  )
}

export default AboutClubPage