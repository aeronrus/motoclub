import React from 'react';
import ServicesList from '../../modules/ServicesList/ServicesList';
import Title from '../../ui-kit/Title/Title';

const Services: React.FC = () => {
  return (
    <article>
      <div className="container">
        <div className="services">
          <Title title="Каталог услуг:" />
          <ServicesList />
        </div>
      </div>
    </article>
  );
};

export default Services;
