import React from 'react';
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
      <img src={aboutItem.img} alt={aboutItem.description} />
      <p>{aboutItem.description}</p>
    </div>
  );
};

export default AboutItem;
