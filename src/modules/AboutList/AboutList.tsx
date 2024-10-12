import React from 'react';
import './AboutList.css';
import AboutItem from '../../components/AboutItem/AboutItem';
import geo from '../../assets/helpers/geo.jpg';
import like from '../../assets/helpers/like.jpg';
import teacher from '../../assets/helpers/teacher.jpg';
import family from '../../assets/helpers/family.jpg';

const AboutList: React.FC = () => {
  const aboutDataList = [
    { img: geo, description: 'Возможность проката на вашей локации' },
    { img: like, description: 'ЛУЧШИЕ цены' },
    { img: teacher, description: 'Самые спокойные и терпеливые инструкторы' },
    { img: family, description: 'Техника под любой возраст, рост и вес' },
  ];

  return (
    <div className="about__items">
      {aboutDataList.map((item, index) => {
        return <AboutItem key={index} aboutItem={item} />;
      })}
    </div>
  );
};

export default AboutList;
