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
              <div className="slider">
                <img id="slide-1" src={bse1101} alt="bse1101" />
                <img id="slide-2" src={bse1102} alt="bse1102" />
              </div>
              <div className="slider_nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
              </div>
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
              <div className="slider">
                <img id="slide-3" src={bse1251} alt="bse1251" />
                <img id="slide-4" src={bse1252} alt="bse1252" />
              </div>
              <div className="slider_nav">
                <a href="#slide-3"></a>
                <a href="#slide-4"></a>
              </div>
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
              <div className="slider">
                <img id="slide-7" src={pitrace1401} alt="pitrace1401" />
                <img id="slide-8" src={pitrace1402} alt="pitrace1402" />
              </div>
              <div className="slider_nav">
                <a href="#slide-7"></a>
                <a href="#slide-8"></a>
              </div>
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
              <div className="slider">
                <img id="slide-5" src={kayo1} alt="kayo k1(1)" />
                <img id="slide-6" src={kayo2} alt="kayo k1(2)" />
              </div>
              <div className="slider_nav">
                <a href="#slide-5"></a>
                <a href="#slide-6"></a>
              </div>
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
