import React from 'react';
import './Technics.css';
import TechnicList from '../../modules/TechnicList/TechnicList';

export const Technics: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="bikes-nav-title">
          <h1>Выбор техники</h1>
        </div>
        <TechnicList />
      </div>
    </section>
  );
};
