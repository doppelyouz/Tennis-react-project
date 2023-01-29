import React from 'react'
import OneNews from '../oneNews/OneNews';

import s from './news.module.scss';

import { newsData } from '../../../data/newsData';

const News = () => {
  return (
    <div className={s.news}>
      <div className={s.news_items}>
        {
          newsData.map(n => {
            return <OneNews key={n.id} id={n.id} img={n.img} time={n.time} title={n.title} />
          })
        }
      </div>
    </div>
  )
}

export default News