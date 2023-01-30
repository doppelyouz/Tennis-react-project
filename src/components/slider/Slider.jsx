import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import "swiper/css";
import s from "./slider.module.scss";

function Slider({title, images}) {
  const [swiper, setSwiper] = useState(null);
  const back = () => {
    swiper?.slideNext();
  };
  const next = () => {
    swiper?.slidePrev();
  };

  return (
    <div className={s.slider}>
      <div className={s.container}>
        <div className={s.head}>
          <h2 className={s.description}>{title}</h2>
          <div className={s.sliderButts}>
            <button onClick={next} className={s.button}>
              <ArrowBackIcon />
            </button>
            <button onClick={back} className={s.button}>
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
        <div className={s.slideContainer}>
          <Swiper onSwiper={(instance) => setSwiper(instance)} loop>
            {images.map((i) => {
              return (
                <SwiperSlide>
                  <div className={s.slide}>
                    <img src={i} alt={i} className={s.img} />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Slider;
