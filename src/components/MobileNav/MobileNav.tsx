import React, { useState } from 'react';
import styles from './MobileNav.module.css';
import { NavLink } from 'react-router-dom';

const MobileNav: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className={styles.nav}>
        <div
          data-testid="iconNav"
          className={styles.nav__toggle}
          onClick={() => {
            setOpen(!open);
          }}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul
          onClick={() => setOpen(false)}
          className={`${styles.nav__list} ${open ? styles.active : ''}`}>
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
export default MobileNav;
