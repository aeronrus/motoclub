import React from 'react';
import RequestButton from '../../ui-kit/RequestButton/RequestButton';
import './AboutItem.css';

interface IAboutItemProps {
  aboutItem: {
    img: string;
    description: string;
  };
}
const AboutItem: React.FC<IAboutItemProps> = ({ aboutItem }) => {
  return (
    <div className="about__item">
      <img src={aboutItem.img} />
      <p>{aboutItem.description}</p>
    </div>
  );
};

export default AboutItem;
