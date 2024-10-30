import React from 'react';
import styles from './DesktopNav.module.css';
import { NavLink } from 'react-router-dom';

const DesktopNav: React.FC = () => {
  return (
    <nav>
      <div className={styles.nav}>
        <ul className={styles.nav__list}>
          <NavLink className={styles.link} to="/">
            <li className={styles.nav__item}>Главная</li>
          </NavLink>
          <NavLink className={styles.link} to="/technics">
            <li className={styles.nav__item}>Техника</li>
          </NavLink>
          <NavLink className={styles.link} to="/services">
            <li className={styles.nav__item}>Услуги</li>
          </NavLink>
          <NavLink className={styles.link} to="/request-rent">
            <li className={styles.nav__item}>Записаться</li>
          </NavLink>
          <NavLink className={styles.link} to="/sales">
            <li className={styles.nav__item}> Акции</li>
          </NavLink>
          <NavLink className={styles.link} to="/contacts">
            <li className={styles.nav__item}>Контакты</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
export default DesktopNav;
