import React from 'react';
import './Achievements.css';
import AchievementList from '../../modules/AchievementList/AchievementList';
import Title from '../../ui-kit/Title/Title';

const Achievements: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="achievements">
          <Title title="Наши достижения" />
          <AchievementList />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
