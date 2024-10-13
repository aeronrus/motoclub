import React from 'react';
import './Services.css';
import ServicesList from '../../modules/ServicesList/ServicesList';

const Services: React.FC = () => {
  return (
    <article>
      <div className="container">
        <div className="services">
          <h1 className="services__title">Каталог услуг:</h1>
          <ServicesList />
        </div>
      </div>
    </article>
  );
};

export default Services;
