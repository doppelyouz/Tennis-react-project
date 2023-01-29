import React from "react";
import s from "./oneNews.module.scss";

import { Link } from "react-router-dom";

const OneNews = ({ img, time, title, id, getId }) => {
  return (
    <div className={s.news_item}>
      <div className={s.img}>
        <img src={img} alt={title} />
      </div>
      <p className={s.time}>{time}</p>
      <div className={s.title}>{title}</div>
      <button className={s.info}>
        <Link to={`/news/${id}`} className={s.link}>Подробнее</Link>
      </button>
    </div>
  );
};

export default OneNews;
