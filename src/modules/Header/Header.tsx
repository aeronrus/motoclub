import React from 'react';
import './Header.css';
import RequestButton from '../../ui-kit/RequestButton/RequestButton';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleRequestClick = () => {
    navigate('/request-rent');
  };
  return (
    <header>
      <div className="container">
        <div className="header">
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
          <RequestButton title="Хочу на прокат!" onClick={handleRequestClick} />
        </div>
      </div>
    </header>
  );
};
export default Header;
