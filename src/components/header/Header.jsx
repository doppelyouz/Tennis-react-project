import React from 'react'
import Banner from '../banner/Banner';

import logo from './Logo.png';
import yt from './yt.png';
import vk from './vk.png';

import {Link} from "react-router-dom";

import s from './header.module.scss'

const Header = ({img, title, Component, page}) => {
  console.log(page);
  return (
    <div className={s.header} style={{background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${img}")`}}>
      <div className={s.container}>
        <img src={logo} alt="logo" className={s.logo} />
        <nav>
          <ul className={s.menu}>
            <li className={s.menu_item}><Link to="/" className={s.link + " " + (page === "HomePage" ? s.active : null)}>Главная</Link></li>
            <li className={s.menu_item}><Link to="/about-club" className={s.link + " " + (page === "AboutPage" ? s.active : null)}>О клубе</Link></li>
            <li className={s.menu_item}>Турниры</li>
            <li className={s.menu_item}><Link to="/news" className={s.link + " " + (page === "NewsPage" ? s.active : null)}>Новости</Link></li>
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
      {Component ? <Component title={title}/> : <Banner title={title}/> }
    </div>
  )
}

export default Header