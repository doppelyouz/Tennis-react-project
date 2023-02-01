import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import "swiper/css";
import s from './coachingStaff.module.scss';

const CoachingStaff = ({title, images}) => {
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
          <Swiper 
            slidesPerView={6}
            onSwiper={(instance) => setSwiper(instance)} 
            spaceBetween={50}
            loop
          >
            {
            images.map((i) => {
              return (
                <SwiperSlide>
                  <div className={s.slide}>
                    <img src={i.img} alt={i} className={s.img} />
                    <div className={s.slide__personName}>{i.name}</div>
                    <div className={s.slide__personBio}>{i.bio}</div>
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

export default CoachingStaff