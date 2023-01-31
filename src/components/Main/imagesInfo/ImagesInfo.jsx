import React from 'react'

import s from './imagesInfo.module.scss';

import tennisImage from './tennisMain.png';
import tennisMain2 from './tennisMain2.png';

const ImagesInfo = () => {
  return (
    <div className={s.imagesInfo}>
      <div className={s.images}>
        <div className={s.image}>
          <img src={tennisImage} alt="tennisImage"/>
          <div className={s.imgTitle}>Зал с покрытием “Искусственная трава”</div>
        </div>
        <div className={s.image}>
          <img src={tennisMain2} alt="tennisMain2" />
          <div className={s.imgTitle}>5 летних грунтовых кортов</div>
        </div>
        <div className={s.image}>
          <img src={tennisMain2} alt="tennisMain2"/>
          <div className={s.imgTitle}>Зал с покрытием “Хард”</div>
        </div>
      </div>
    </div>
  )
}

export default ImagesInfo