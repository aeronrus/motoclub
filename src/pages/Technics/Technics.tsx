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
import TechnicList from '../../modules/TechnicList/TechnicList';

export const Technics: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="bikes-nav-title">
          <h1>Выбор техники</h1>
        </div>
        <TechnicList />
      </div>
    </section>
  );
};
