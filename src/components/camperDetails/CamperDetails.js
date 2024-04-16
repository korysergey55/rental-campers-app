import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import styles from './styles.module.scss';
import sprite from '../../sourses/icons/sprite.svg';

const CamperDetails = ({ item }) => {
  return (
    <>
      {item && (
        <li className={styles.item}>
          <div className={styles.contentWripper}>
            <h2 className={styles.title}>{item.name}</h2>
            <div className={styles.wripper}>
              <div className={styles.reviewsWripper}>
                <svg className={styles.reviewsIcon} aria-label="icon-star">
                  <use href={sprite + '#icon-star'} />
                </svg>
                <p className={styles.reviewsText}>
                  {item.rating}({item.reviews.length} Reviews)
                </p>
              </div>
              <div className={styles.locationWripper}>
                <svg className={styles.locationIcon} aria-label="icon-location">
                  <use href={sprite + '#icon-location'} />
                </svg>
                <p className={styles.locationText}>{item.location}</p>
              </div>
            </div>
            <h2 className={styles.price}>
              {'\u20AC'}
              {item.price}.00
            </h2>
            <ul className={styles.imageList}>
              {item?.gallery?.map(image => (
                <li className={styles.imageWripper} key={uuidv4()}>
                  <img className={styles.image} src={image} alt={item.name + 'image'} />
                </li>
              ))}
            </ul>
            <p className={styles.description}>{item.description}</p>
            <ul className={styles.navLinkList}>
              <li className={styles.item}>
                <NavLink className={navData => (navData.isActive ? styles.active : styles.navLink)} to="features">
                  Features
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink className={navData => (navData.isActive ? styles.active : styles.navLink)} to="reviews">
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        </li>
      )}
    </>
  );
};

export default CamperDetails;
