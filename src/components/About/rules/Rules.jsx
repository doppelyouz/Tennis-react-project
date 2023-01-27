import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import EastIcon from "@mui/icons-material/East";

import s from "./rules.module.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ marginLeft: "74px" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Rules = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={s.rules}>
      <h2 className={s.rules_title}>Правила</h2>
      <Box sx={{ display: "flex" }} className={s.tab}>
        <Tabs orientation="vertical" value={value} onChange={handleChange}>
          <Tab
            label="1. Общие положения"
            {...a11yProps(0)}
            className={
              s.list_item + " " + (value === 0 ? s.list_item__active : null)
            }
          />
          <Tab
            label="2. Основные определения"
            {...a11yProps(1)}
            className={
              s.list_item + " " + (value === 1 ? s.list_item__active : null)
            }
          />
          <Tab
            label="3. Порядок предоставления игрового времени на кортах"
            {...a11yProps(2)}
            className={
              s.list_item + " " + (value === 2 ? s.list_item__active : null)
            }
          />
          <Tab
            label="4. Оплата услуг"
            {...a11yProps(3)}
            className={
              s.list_item + " " + (value === 3 ? s.list_item__active : null)
            }
          />
          <Tab
            label="5. Правила поведения на территории и кортах"
            {...a11yProps(4)}
            className={
              s.list_item + " " + (value === 4 ? s.list_item__active : null)
            }
          />
          <Tab
            label="6. Прочие положения"
            {...a11yProps(5)}
            className={
              s.list_item + " " + (value === 5 ? s.list_item__active : null)
            }
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className={s.list3_31}>
            <p className={s.list_item__title}>
              3.1. ТК предоставляет Членам клуба:
            </p>
            <ul>
              <li className={s.list3__ul_item}>
                <div className={s.strip}>
                  <EastIcon />
                </div>
                <p>Разовое посещение;</p>
              </li>
              <li className={s.list3__ul_item}>
                <div className={s.strip}>
                  <EastIcon />
                </div>
                <p>Абонементы с фиксированным временем;</p>
              </li>
              <li className={s.list3__ul_item}>
                <div className={s.strip}>
                  <EastIcon />
                </div>
                <p>Абонементы на 30 и 50 часов;</p>
              </li>
              <li className={s.list3__ul_item}>
                <div className={s.strip}>
                  <EastIcon />
                </div>
                <p>Индивидуальные занятия с тренером;</p>
              </li>
              <li className={s.list3__ul_item}>
                <div className={s.strip}>
                  <EastIcon />
                </div>
                <p>«Клуб любителей тенниса»;</p>
              </li>
              <li className={s.list3__ul_item}>
                <div className={s.strip}>
                  <EastIcon />
                </div>
                <p>Детские группы разных возрастов и уровня подготовки;</p>
              </li>
              <li className={s.list3__ul_item}>
                <div className={s.strip}>
                  <EastIcon />
                </div>
                <p>Взрослые группы</p>
              </li>
            </ul>
          </div>
          <div className={s.list3_32}>
            <p className={s.list_item__title}>3.2. Минимальное время:</p>
            <ul>
              <li className={s.list3__ul_item}>
                <div className={s.strip}>
                  <EastIcon />
                </div>
                <p>Разового посещения — 60 минут;</p>
              </li>
              <li className={s.list3__ul_item}>
                <div className={s.strip}>
                  <EastIcon />
                </div>
                <p>Разового посещения на летних кортах — 55 минут;</p>
              </li>
              <li className={s.list3__ul_item}>
                <div className={s.strip}>
                  <EastIcon />
                </div>
                <p>Абонемента — 30 часов;</p>
              </li>
              <li className={s.list3__ul_item}>
                <div className={s.strip}>
                  <EastIcon />
                </div>
                <p>Индивидуальное занятие с тренером — 1 час;</p>
              </li>
              <li className={s.list3__ul_item}>
                <div className={s.strip}>
                  <EastIcon />
                </div>
                <p>
                  Занятия с тренером в группах (детских/взрослых) — согласно
                  действующего расписания групп.
                </p>
              </li>
            </ul>
          </div>
          <div className={s.list3_33}>
            <p className={s.list_item__title}>
              3.3. Игровое время на основании заявок (брони)
            </p>
            <p className={s.list3_33__info}>
              ТК предоставляет игровое время на основании заявок (брони) Членов
              клуба с учетом расписания работы корта, проведения соревнований,
              клубных мероприятий, производства ремонтно-профилактических работ.
              Бронирование игрового времени осуществляется через администратора
              ТК. Бронирование может производиться непосредственно в Комплексе,
              либо по телефону. 3.4 ТК не несет ответственности за сохранение
              расписания игрового времени за Членом клуба после окончания срока
              действия абонемента, а также в случае нарушения срока оплаты
              услуг. 3.5 Абонемент имеют право приобретать только Члены ТК.
              Приобретение абонементов тренерами запрещено. 3.6. Отмена игрового
              времени может производится не позднее 24 часов до начала занятия и
              отыгрываться в течение сезона на равноценном времени, либо, при
              желании, на более дорогом, с доплатой. Не отмененное вовремя
              занятие считается состоявшимся и оплачивается по текущему тарифу.
              3.7. При проведении соревнований, Клубных мероприятиях,
              технических неисправностях, не позволяющих эксплуатацию кортов, ТК
              имеет право производить изменения в расписании. При этом ТК
              обязуется заблаговременно уведомить Члена клуба по телефону об
              изменении в расписании, а также предоставить возможность
              равнозначно компенсировать пропущенное игровое время в удобное для
              Члена клуба время с учетом занятости кортов. 3.8. Компенсация
              (обоюдно согласованное равноценное игровое время) для занятий в ТК
              предоставляется также в случаях:
            </p>
            <ul>
              <li className={s.list3__ul_item}>
                <div className={s.strip}>
                  <EastIcon />
                </div>
                <p>
                  когда Член клуба заблаговременно (не менее суток) известил
                  администратора ТК о невозможности посещения занятия;
                </p>
              </li>
              <li className={s.list3__ul_item}>
                <div className={s.strip}>
                  <EastIcon />
                </div>
                <p>
                  неблагоприятных погодных условий для игры на открытых кортах,
                  и невозможности предоставления закрытой площадки;
                </p>
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Box>
    </div>
  );
};

export default Rules;
