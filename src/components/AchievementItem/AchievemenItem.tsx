import React from 'react';
import './AchievementItem.css';

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
      <p>{achievementItem.description}</p>
    </div>
  );
};

export default AchievementItem;
