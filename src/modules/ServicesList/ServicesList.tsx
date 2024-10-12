import React from 'react';
import './ServicesList.css';
import kayo2 from '../../assets/kayo k1/kayo2.jpg';
import avantisForester from '../../assets/atvs/avantis forester200/avantis-forester-200.jpg';
import sharmaxSnow from '../../assets/snowmobile/sharmax-280/sharmax-280.jpg';

import ServiceCard from '../../components/ServiceCard/ServiceCard';

const ServicesList: React.FC = () => {
  const data = [
    {
      title: 'Аренда мотоцикла',
      img: kayo2,
      description:
        'Одноместные эндуро-мотоциклы Kayo K1 с механической коробкой передач и питбайки с механической и автоматической коробкой передач для езды по грязи и бездорожью',
      price: ['3999руб', '2300руб'],
    },
    {
      title: 'Аренда квадроцикла',
      img: avantisForester,
      description:
        'Двухместные квадроциклы Avantis forester 200 развивают скорость до 70 км/ч и подходят для преодоления самых интересных маршрутов',
      price: ['4299руб', '2500руб'],
    },
    {
      title: 'Аренда снегохода',
      img: sharmaxSnow,
      description:
        'Двухместные снегоходы SHARMAX SN-280 развивают скорость до 50 км/ч и подходят для преодоления крутых подъемов, спусков и быстрой езды по глубокому снегу',
      price: ['5999руб', '3000руб'],
    },
  ];
  return (
    <div className="services__list">
      {data.map((item, index) => {
        return <ServiceCard key={index} serviceData={item} />;
      })}
    </div>
  );
};

export default ServicesList;
