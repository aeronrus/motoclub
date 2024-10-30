import React from 'react';

import RequestButton from '../../ui-kit/RequestButton/RequestButton';
import './ServiceCard.css';
import PriceSale from '../../ui-kit/PriceSale/PriceSale';
import { useNavigate } from 'react-router-dom';

interface IServiceCardProps {
  serviceData: {
    img: string;
    title: string;
    description: string;
    price: string[];
  };
}
const ServiceCard: React.FC<IServiceCardProps> = ({ serviceData }) => {
  const navigate = useNavigate();
  const handleRequestClick = () => {
    navigate('/request-rent');
  };
  return (
    <div className="service">
      <img src={serviceData.img} alt="kayo k1" className="service__img" />
      <div className="service__title">{serviceData.title}</div>
      <p className="service__description">{serviceData.description}</p>
      <div className="service__price">
        <PriceSale prices={serviceData.price} />
      </div>
      <div>
        <RequestButton title="Записаться" onClick={handleRequestClick} />
      </div>
    </div>
  );
};

export default ServiceCard;
