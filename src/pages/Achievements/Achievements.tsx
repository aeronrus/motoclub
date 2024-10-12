import React from 'react';
import './Achievements.css';
import AchievementList from '../../modules/AchievementList/AchievementList';

const Achievements: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="achievements">
          <h2>Наши достижения</h2>
          <AchievementList />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
