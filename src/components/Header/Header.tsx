import React from 'react';
import './Header.css';
import RequestButton from '../../ui-kit/RequestButton/RequestButton';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <div className="header__title">
          <h1>
            Прокат мотоциклов в <br />
            Московской области
          </h1>
        </div>
        <div className="header__list">
          <ul className="header__items">
            <li>Опытные инструкторы</li>
            <li>Приемлемые цены</li>
            <li>Незабываемые эмоции</li>
          </ul>
        </div>
        <Link className="link" to="/request">
          <RequestButton title="Хочу на прокат!" />
        </Link>
      </div>
    </header>
  );
};
export default Header;
