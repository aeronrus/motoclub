import React from 'react';

import RequestButton from '../../ui-kit/RequestButton/RequestButton';
import './TechnicCard.css';
import PriceSale from '../../ui-kit/PriceSale/PriceSale';
import TechnicSlider from '../TechnicSlider/TechnicSlider';
import Title from '../../ui-kit/Title/Title';
import Description from '../../ui-kit/Description/Description';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const handleRequestClick = () => {
    navigate('/request-rent');
  };
  return (
    <div className="technic">
      <Title title={technicData.title} />
      <p className="technic__subtitle">{technicData.subtitle}</p>

      <div className="slider-wrapper">
        <TechnicSlider data={technicData.img} />
      </div>
      <div className="technic__price">
        <PriceSale prices={technicData.price} />
      </div>
      <div className="technic__description">
        {technicData.description.map((item) => (
          <Description key={item} description={item} />
        ))}
      </div>
      <RequestButton title="Записаться" onClick={handleRequestClick} />
    </div>
  );
};

export default TechnicCard;
