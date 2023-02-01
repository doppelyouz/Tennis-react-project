import React from 'react'

import s from './servicesAndPrices.module.scss';
import Slider from '../../slider';

import { servicesData } from '../../../data/servicesData';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ServicesAndPrices = () => {
  return (
    <div className={s.servicesAndPrices}>
      <div className={s.prices}>
        <div className={s.prices__title}>Цены и абонементы</div>
        <ul className={s.prices__list}>
          <li className={s.prices__item}>Зимний сезон 2021-2022 <ArrowBackIcon/></li>
          <li className={s.prices__item}>Абонементы <ArrowBackIcon/></li>
          <li className={s.prices__item}>Абонементы <ArrowBackIcon/></li>
          <li className={s.prices__item}>Дополнительные услуги <ArrowBackIcon/></li>
        </ul>
      </div>
      <div className={s.services}>
        <Slider title="Услуги" images={servicesData}/>
      </div>
    </div>
  )
}

export default ServicesAndPrices