import React from 'react';
import './AchievementList.css';
import AchievementItem from '../../components/AchievementItem/AchievemenItem';

const AchievementList: React.FC = () => {
  const aboutDataList = [
    { count: '32', description: 'Среднее количество улыбок наших клиентов за 1 час катания' },
    { count: '176', description: 'Человек мы научили управлять техникой с нуля' },
    { count: '1019', description: 'Самые спокойные и терпеливые инструкторы' },
  ];

  return (
    <div className="achievements___list">
      {aboutDataList.map((item, index) => {
        return <AchievementItem key={index} achievementItem={item} />;
      })}
    </div>
  );
};

export default AchievementList;
