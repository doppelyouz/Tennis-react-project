import React from 'react'

import {News, OneBigNews} from '../components/News';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';


import NewsImage from '../images/news.png';

import { newsData } from '../data/newsData';
import { useParams } from 'react-router-dom';

import './pages.scss';

const OneNewsPage = () => {
  const { id } = useParams();
  const news = newsData.find(n => {
    if(n.id == id) {
      return n;
    }
  })
  const {title, img, titleInfo, time} = news;
  return (
    <>
      <Header img={NewsImage} title={title} page="NewsPage" />
      <div className="container">
        <OneBigNews img={img} titleInfo={titleInfo} time={time} title={title} />
        <News />
      </div>
      <Footer page="NewsPage" />
  </>
  )
}

export default OneNewsPage