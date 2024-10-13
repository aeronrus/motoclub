import React from 'react';
import bse1101 from '../../assets/bse110/bse110.jpg';
import bse1102 from '../../assets/bse110/bse110(2).jpg';

import bse1251 from '../../assets/bse 125/bse125.jpg';
import bse1252 from '../../assets/bse 125/bse125(2).jpg';

import pitrace1401 from '../../assets/pitrace 140/pitrace 140.jpg';
import pitrace1402 from '../../assets/pitrace 140/pitrace140(2).jpg';

import kayo1 from '../../assets/kayo k1/kayo1.jpg';
import kayo2 from '../../assets/kayo k1/kayo2.jpg';

import RequestButton from '../../ui-kit/RequestButton/RequestButton';

import './Technics.css';
import TechnicSlider from '../../components/TechnicSlider/TechnicSlider';

export const Technics: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="bikes-nav-title">
          <h1>Выбор техники</h1>
        </div>
        <div className="bikes-list">
          <div className="bike">
            <div className="bike__title">Детский питбайк 110см3</div>
            <p className="bike__subtitle">Устройте праздник вашему ребенку!</p>

            <div className="slider-wrapper">
              <TechnicSlider data={[{ img: bse1101 }, { img: bse1102 }]} />
            </div>

            <div className="bike__price">
              <p>1999руб</p>
              <p>1500руб</p>
            </div>
            <div className="bike__description">
              <p>Идеален для детей новичков</p>
              <p>Автоматическая КПП</p>
              <p>Подходит для роста 140-165</p>
            </div>
            <RequestButton title="Записаться" />
          </div>
          <div className="bike">
            <div className="bike__title">Подростковый питбайк 125см3</div>
            <p className="bike__subtitle">Лучший способ освоить азы управления</p>
            <div className="slider-wrapper">
              <TechnicSlider data={[{ img: bse1251 }, { img: bse1252 }]} />
            </div>
            <div className="bike__price">
              <p>2100руб</p>
              <p>1500руб</p>
            </div>
            <div className="bike__description">
              <p>Любимец новичков.</p>
              <p>Механическая КПП</p>
              <p>Идеален для подростков от 12 лет, девушек и новичков</p>
              <p>На рост от 155см до 180см</p>
            </div>
            <RequestButton title="Записаться" />
          </div>
          <div className="bike">
            <div className="bike__title">Подростковый питбайк 140см3</div>
            <p className="bike__subtitle">Подарит эмоции как детям, так и взрослым</p>
            <div className="slider-wrapper">
              <TechnicSlider data={[{ img: pitrace1401 }, { img: pitrace1402 }]} />
            </div>
            <div className="bike__price">
              <p>2400руб</p>
              <p>1700руб</p>
            </div>
            <div className="bike__description">
              <p>Любимец новичков.</p>
              <p>Механическая КПП</p>
              <p>Идеален для подростков от 12 лет, девушек и новичков</p>
              <p>На рост от 155см до 180см</p>
            </div>
            <RequestButton title="Записаться" />
          </div>
          <div className="bike">
            <div className="bike__title">Эндуро 250см3</div>
            <p className="bike__subtitle">Не оставит равнодушным новичков и опытных райдеров</p>
            <div className="slider-wrapper">
              <TechnicSlider data={[{ img: kayo1 }, { img: kayo2 }]} />
            </div>
            <div className="bike__price">
              <p>3000руб</p>
              <p>2300руб</p>
            </div>
            <div className="bike__description">
              <p>Подходит для взрослых и подростков от 15 лет</p>
              <p>Механическая КПП</p>
              <p>Подходит для роста 170-190</p>
            </div>
            <RequestButton title="Записаться" />
          </div>
        </div>
      </div>
    </section>
  );
};
