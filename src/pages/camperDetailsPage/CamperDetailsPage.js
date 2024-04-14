import React from 'react';

import styles from './styles.module.scss';
import sprite from '../../sourses/icons/sprite.svg';

const CamperDetailsPage = ({item}) => {
  console.log (item);
  return (
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
        <h2 className={styles.price}>{'\u20AC'}{item.price}.00</h2>
        <ul className={styles.imageList}>
          {item.gallery.map (image => (
            <li className={styles.imageWripper}>
              <img
                className={styles.image}
                src={image}
                alt={item.name + 'image'}
              />
            </li>
          ))}
        </ul>
        <p className={styles.description}>{item.description}</p>
        <div className={styles.routsWripper}>
          <h2 className={styles.routsTitle}>Features</h2>
          <h2 className={styles.routsTitle}>Reviews</h2>
        </div>
      </div>
    </li>
  );
};

export default CamperDetailsPage;
