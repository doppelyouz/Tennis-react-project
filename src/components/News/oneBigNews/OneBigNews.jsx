import React from 'react'
import s from './oneBigNews.module.scss';


const OneBigNews = ({title, img, titleInfo, time}) => {
  return (
    <div className={s.news_item + " " + s.big}>
        <div className={s.img}>
          <img src={img} alt={title} className={s.imgBig}/>
        </div>
        <p className={s.time}>{time}</p>
        <div className={s.title}>{title}</div>
        <p className={s.titleInfo}>{titleInfo}</p>
    </div>
  )
}

export default OneBigNews