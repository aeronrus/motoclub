import React from 'react';
import './AboutItem.css';
import Description from '../../ui-kit/Description/Description';

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
      <Description description={aboutItem.description} />
    </div>
  );
};

export default AboutItem;
