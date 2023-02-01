import React from 'react'

import s from './sportClub.module.scss';
import t from './t.png';

import SquareIcon from '@mui/icons-material/Square';

const SportClub = () => {
  return (
    <div className={s.sportClub}>
      <div className={s.sportClub__image}>
        <img src={t} alt="tennis" className={s.sportClub__tennisImage}/>
      </div>
      <div className={s.infoAboutSportClub}>
        <div className={s.containerSportClub}>
          <div className={s.sportClub__title}>Спортивный клуб</div>
          <p className={s.sportClub__desc}>
            Imperdiet lorem ipsum, pulvinar aliquet sit ultricies in sit turpis. Ultricies erat pretium risus quam
            tincidunt non viverra porttitor. Sollicitudin enim nunc in nisi donec vel. Blandit mauris vitae amet aliquet ultrices 
            mauris pellentesque. Non ipsum commodo, sit mi sit netus aenean nisl. <br/><br/>
            Donec sit pellentesque enim, vestibulum. 
            Condimentum hac adipiscing purus in augue nisi. Convallis ut nisi.
          </p>
          <div className={s.sportClub__list}>
            <div className={s.list__title}>Ornare orci ut dictum nulla fames. </div>
            <ul>
              <li className={s.list__item}><SquareIcon className={s.square}/>Euismod diam, vel venenatis bibendum sodales sem hendrerit vulputate sagittis.</li>
              <li className={s.list__item}><SquareIcon className={s.square}/>Euismod diam, vel venenatis bibendum sodales sem hendrerit vulputate sagittis.</li>
              <li className={s.list__item}><SquareIcon className={s.square}/>Euismod diam, vel venenatis bibendum sodales sem hendrerit vulputate sagittis.</li>
              <li className={s.list__item}><SquareIcon className={s.square}/>Euismod diam, vel venenatis bibendum sodales sem hendrerit vulputate sagittis.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SportClub