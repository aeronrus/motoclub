import React from 'react';
import './AchievementItem.css';
import Description from '../../ui-kit/Description/Description';

interface IAchievementItemProps {
  achievementItem: {
    count: string;
    description: string;
  };
}
const AchievementItem: React.FC<IAchievementItemProps> = ({ achievementItem }) => {
  return (
    <div className="achievements__item">
      <p>{achievementItem.count}</p>
      <Description description={achievementItem.description} />
    </div>
  );
};

export default AchievementItem;
