import React from 'react';

import RequestButton from '../../ui-kit/RequestButton/RequestButton';
import './TechnicCard.css';
import PriceSale from '../../ui-kit/PriceSale/PriceSale';
import TechnicSlider from '../TechnicSlider/TechnicSlider';

interface ITechnicCardProps {
  technicData: {
    title: string;
    img: string[];
    subtitle: string;
    description: string[];
    price: string[];
  };
}

const TechnicCard: React.FC<ITechnicCardProps> = ({ technicData }) => {
  return (
    <div className="bike">
      <div className="bike__title">{technicData.title}</div>
      <p className="bike__subtitle">{technicData.subtitle}</p>

      <div className="slider-wrapper">
        <TechnicSlider data={technicData.img} />
      </div>

      <PriceSale prices={technicData.price} />
      <div className="bike__description">
        {technicData.description.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <RequestButton title="Записаться" />
    </div>
  );
};

export default TechnicCard;
