import React from 'react'
import Banner from '../banner/Banner';

import logo from './Logo.png';
import yt from './yt.png';
import vk from './vk.png';

import s from './header.module.scss'

const Header = ({img, title}) => {
  return (
    <div className={s.header} style={{background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${img}")`}}>
      <div className={s.container}>
        <img src={logo} alt="logo" className={s.logo} />
        <nav>
          <ul className={s.menu}>
            {/* <li className={s.menu_item}><Link to="/" className={s.link}>Главная</Link></li> */}
            {/* <li className={s.menu_item}><Link to="about-club" className={s.link}>О клубе</Link></li> */}
            <li className={s.menu_item}>Главная</li>
            <li className={s.menu_item}>О клубе</li>
            <li className={s.menu_item}>Турниры</li>
            <li className={s.menu_item}>Новости</li>
            {/* <li className={s.menu_item}><Link to="news" className={s.link}>Новости</Link></li> */}
            <li className={s.menu_item}>Детский теннис</li>
            <li className={s.menu_item}>Галерея</li>
            <li className={s.menu_item}>Цены</li>
            <li className={s.menu_item}>Контакты</li>
          </ul>
        </nav>
        <div className={s.icons}>
          <img src={yt} alt="youtube" className={s.youtubeImage}/>
          <img src={vk} alt="vk" className={s.vkImage}/>
        </div>
      </div>
      <div className={s.hr}></div>
      <Banner title={title}/>
    </div>
  )
}

export default Header