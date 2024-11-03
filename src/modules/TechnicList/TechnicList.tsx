import React from 'react';
import './TechnicList.css';
import bse1101 from '../../assets/bse110/bse110.jpg';
import bse1102 from '../../assets/bse110/bse110(2).jpg';

import bse1251 from '../../assets/bse 125/bse125.jpg';
import bse1252 from '../../assets/bse 125/bse125(2).jpg';

import pitrace1401 from '../../assets/pitrace 140/pitrace 140.jpg';
import pitrace1402 from '../../assets/pitrace 140/pitrace140(2).jpg';

import kayo1 from '../../assets/kayo k1/kayo1.jpg';
import kayo2 from '../../assets/kayo k1/kayo2.jpg';

import TechnicCard from '../../components/TechnicCard/TechnicCard';

const TechnicList: React.FC = () => {
  const data = [
    {
      title: 'Детский питбайк 110см3',
      img: [bse1101, bse1102],
      subtitle: 'Устройте праздник вашему ребенку!',
      description: [
        'Идеален для детей и новичков',
        'Автоматическая КПП',
        'Подходит для роста 140-165',
      ],
      price: ['1999руб', '1500руб'],
    },
    {
      title: 'Подростковый питбайк 125см3',
      img: [bse1251, bse1252],
      subtitle: 'Лучший способ освоить азы управления',
      description: [
        'Любимец новичков',
        'Механическая КПП',
        'Идеален для подростков от 12 лет, девушек и новичков',
        'На рост от 155см до 180см',
      ],
      price: ['1999руб', '1500руб'],
    },
    {
      title: 'Подростковый питбайк 140см3',
      img: [pitrace1401, pitrace1402],
      subtitle: 'Подарит эмоции как детям, так и взрослым',
      description: [
        'Любимец новичков',
        'Механическая КПП',
        'Идеален для подростков от 12 лет, девушек и новичков',
        'На рост от 155см до 180см',
      ],
      price: ['2400руб', '1700руб'],
    },
    {
      title: 'Эндуро 250см3',
      img: [kayo1, kayo2],
      subtitle: 'Не оставит равнодушным новичков и опытных райдеров',
      description: [
        'Подходит для взрослых и подростков от 15 лет',
        'Механическая КПП',
        'Подходит для роста 170-190',
      ],
      price: ['3000руб', '2300руб'],
    },
  ];
  return (
    <div className="bikes-list">
      {data.map((item, index) => {
        return <TechnicCard key={index} technicData={item} />;
      })}
    </div>
  );
};

export default TechnicList;
