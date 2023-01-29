import React from 'react'
import s from './bannerMain.module.scss';
import play from './play.png';
import link from './link.png';

const BannerMain = ({title}) => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.video}>
        <div className={s.video__play}>
          <div className={s.video__circle}>
            <img src={play} alt="play" />
          </div>
        </div>
        <div className={s.video__title}>Посмотрите видео о нашем клубе</div>
      </div>
      <div className={s.informationCards}>
        <ul className={s.informationCards__menu}>
          <li className={s.informationCards__item}>
            <div className={s.item__title}>Услуги</div>
            <div className={s.item__desc}>Аренда корта</div>
            <div className={s.item__link}>
              <img src={link} alt="link" className={s.item__imgLink} />
            </div>
          </li>
          <li className={s.informationCards__item}>
            <div className={s.item__title}>Услуги</div>
            <div className={s.item__desc}>Детский теннис</div>
            <div className={s.item__link}>
              <img src={link} alt="link" className={s.item__imgLink} />
            </div>
          </li> 
          <li className={s.informationCards__item}>
            <div className={s.item__title}>Услуги</div>
            <div className={s.item__desc}>Сборы команд</div>
            <div className={s.item__link}>
              <img src={link} alt="link" className={s.item__imgLink} />
            </div>
          </li> 
          <li className={s.informationCards__item}>
            <div className={s.item__title}>Новости</div>
            <div className={s.item__desc}>Расписание</div>
            <div className={s.item__link}>
              <img src={link} alt="link" className={s.item__imgLink} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BannerMain;