import React from 'react';
import './Technics.css';
import TechnicList from '../../modules/TechnicList/TechnicList';
import Title from '../../ui-kit/Title/Title';

export const Technics: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="technics">
          <Title title="Выбор техники" />
          <TechnicList />
        </div>
      </div>
    </section>
  );
};
