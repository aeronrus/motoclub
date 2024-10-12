import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="nav">
        <ul className="nav__list">
          <NavLink className="link" to="/">
            <li className="nav__item">Главная</li>
          </NavLink>
          <NavLink className="link" to="/technics">
            <li className="nav__item">Техника</li>
          </NavLink>
          <NavLink className="link" to="/services">
            <li className="nav__item">Услуги</li>
          </NavLink>
          <NavLink className="link" to="/request-rent">
            <li className="nav__item">Записаться</li>
          </NavLink>
          <NavLink className="link" to="/sales">
            <li className="nav__item"> Акции</li>{' '}
          </NavLink>
          <NavLink className="link" to="/contacts">
            <li className="nav__item">Контакты</li>
          </NavLink>
        </ul>
        <div className="contacts"></div>
      </div>
    </nav>
  );
};
export default NavBar;
