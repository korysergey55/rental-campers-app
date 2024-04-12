import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to={'/'} className={navData => (navData.isActive ? styles.active : styles.navLink)}>
            Home
          </NavLink>
        </li>
        <li className={styles}>
          <NavLink to={'/catalog'} className={navData => (navData.isActive ? styles.active : styles.navLink)}>
            Catalog
          </NavLink>
        </li>
        <li className={styles}>
          <NavLink to={'/favorites'} className={navData => (navData.isActive ? styles.active : styles.navLink)}>
            Favorites
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
