import React from 'react'

import s from './aboutClub.module.scss';

import arena from './arena.png';

const AboutClub = () => {
  return (
    <div className={s.about}>
        <h2 className={s.about_title}>О клубе</h2>
        <div className={s.about_info}>
            <img src={arena} alt="arena" className={s.arenaPhoto} />
            <div className={s.tennisInfo}>
                <h2 className={s.tennisInfo_title}>Петербургский теннисный клуб имени М.А. Пасечникова</h2>
                <div className={s.tennisInfo_description}>
                    <p>Feugiat gravida proin arcu tellus ipsum posuere nisl, consectetur scelerisque.
                         Posuere ipsum tellus dignissim etiam lorem ultrices risus viverra. Purus volutpat phasellus viverra vestibulum quis. Gravida pretium odio enim ut id tempus semper. Urna cum at in iaculis mauris at. 
                        Tellus, a euismod tincidunt eu orci faucibus. Mi faucibus pellentesque molestie nunc, et, tellus. 
                        Neque cras mattis dolor id. Maecenas vivamus tristique donec neque id convallis. 
                        Feugiat fusce at est at.</p><br />
                    <p>Vitae nec eget blandit id nisl. Sit ac dictum lorem mauris posuere sit. Gravida commodo egestas pharetra, 
                        mi interdum. Ullamcorper pulvinar hac risus egestas fusce nunc. Vel auctor proin integer ut lacus, sed neque id dictum. 
                        At enim quis eu, mattis aliquet varius in eu venenatis.</p><br />
                    <p>Quisque diam elit donec orci sed dolor. Neque sed sit tortor eget urna magna interdum feugiat ut. 
                        In purus rhoncus egestas euismod morbi. Ut velit facilisi in cras tempus turpis sapien ipsum, mattis. 
                        Tempor sit nulla ac lorem placerat congue. Nulla purus vestibulum suscipit pellentesque risus non.</p>
                </div>
                <div className={s.numberOf}>
                    <div className={s.courts}><div className={s.number}>7</div><div className={s.number_desc + " " + s.summerCourts}>Летних грунтовых кортов</div></div> 
                    <div className={s.courts}><div className={s.number}>4</div><div className={s.number_desc}>Зимних корта с покрытием «искусственная трава»</div></div> 
                    <div className={s.courts}><div className={s.number}>3</div><div className={s.number_desc}>Зимних корта с покрытием «hard»</div></div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutClub