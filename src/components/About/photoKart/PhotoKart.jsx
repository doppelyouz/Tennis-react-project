import React from 'react'

import Slider from '../../slider';

import s from './photoKart.module.scss'
import "swiper/css";
import "swiper/css/navigation";

import {photoCartData} from '../../../data/photoCartData';

const PhotoKart = () => {
  return (
    <div className={s.photoKart}>
        <Slider title="Фото кортов" images={photoCartData} />
    </div>
  )
}

export default PhotoKart