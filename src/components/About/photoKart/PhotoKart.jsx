import React from 'react'

import Slider from '../../slider';

import s from './photoKart.module.scss'
import "swiper/css";
import "swiper/css/navigation";

import slider1 from './swiper1.png';
import slider2 from './swiper2.png';
const images = [slider1, slider2];

const PhotoKart = () => {
  return (
    <div className={s.photoKart}>
        <Slider title="Фото кортов" images={images} />
    </div>
  )
}

export default PhotoKart