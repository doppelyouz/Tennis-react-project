import React from 'react'

import s from './footer.module.scss';

import yt from './ytP.png';
import vk from './vkP.png';
import telega from './telegramP.png';

const Footer = () => {
  return (
    <footer className={s.footer}>
        <div className={s.container}>
            <div className={s.rights}>2022 © Все права защищены.</div>
            <nav>
                <ul className={s.menu}>
                    <li className={s.menu_item}>Главная</li>
                    <li className={s.menu_item}>О клубе</li>
                    <li className={s.menu_item}>Турниры</li>
                    <li className={s.menu_item}>Услуги</li>
                    <li className={s.menu_item}>Детский теннис</li>
                    <li className={s.menu_item}>Галерея</li>
                    <li className={s.menu_item}>Цены</li>
                    <li className={s.menu_item}>Контакты</li>
                </ul>
            </nav>
            <div className={s.icons}>
                <img src={yt} alt="youtube" className={s.youtubeImage}/>
                <img src={vk} alt="vk" className={s.vkImage}/>
                <img src={telega} alt="vk" className={s.telegaImage}/>
            </div>
        </div>
    </footer>
  )
}

export default Footer