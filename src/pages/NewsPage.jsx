import React from 'react'

import {News} from '../components/News';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

import NewsImage from '../images/news.png';

import './pages.scss';

const NewsPage = () => {
  return (
    <>
      <Header img={NewsImage} title="Новости" page="NewsPage"/>
      <div className="container">
        <News />
      </div>
        <Footer page="NewsPage"/>
    </>
  )
}

export default NewsPage