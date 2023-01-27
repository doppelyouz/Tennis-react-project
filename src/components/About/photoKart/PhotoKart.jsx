import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import s from './photoKart.module.scss'
import "swiper/css";
import "swiper/css/navigation";

import swiper1 from './swiper1.png';

import { Navigation } from "swiper";


const PhotoKart = () => {
  return (
    <div className={s.photoKart}>
        <h2 className={s.photoKart_title}>Фото кортов</h2>
        <Swiper navigation={true} modules={[Navigation]} className={s.mySwiper + " " + s.swiper}>
            <SwiperSlide className={s.swiper_slide}>
                <img src={swiper1} alt="swiperPhoto" />
                <div className={s.swiperTitle}>Летний корт</div>
            </SwiperSlide>
            <SwiperSlide className={s.swiper_slide}>Slide 2</SwiperSlide>
            <SwiperSlide className={s.swiper_slide}>Slide 3</SwiperSlide>
            <SwiperSlide className={s.swiper_slide}>Slide 4</SwiperSlide>
        </Swiper>
    </div>
  )
}

export default PhotoKart