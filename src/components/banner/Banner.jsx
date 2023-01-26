import React from 'react'
import s from './banner.module.scss';

const Banner = ({title}) => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>{title}</h1>
    </div>
  )
}

export default Banner;