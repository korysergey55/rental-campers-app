import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setFavorite } from '../../../redax/slice/slice';
import { getFavoritsIdSelector } from '../../../redax/selectors/selectors';

import CategoriesList from '../../categoriesList/CategoriesList';
import ReadMore from '../../readMore/ReadMore';

import styles from './styles.module.scss';
import sprite from '../../../sourses/icons/sprite.svg';

const CatalogItem = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector(getFavoritsIdSelector);

  const handleShowMore = () => {
    navigate(`/catalog/${item._id}`);
  };

  const onChangeFavorite = () => {
    dispatch(setFavorite(item._id));
  };

  return (
    <li className={styles.item}>
      <div className={styles.imageWripper}>
        <img className={styles.image} src={item.gallery[0]} alt={item.name + 'image'} />
      </div>
      <div className={styles.contentWripper}>
        <div className={styles.titleWripper}>
          <h2 className={styles.title}>{item.name}</h2>
          <div className={styles.priceWripper}>
            <h2 className={styles.price}>
              {'\u20AC'}
              {item.price}.00
            </h2>
            <svg
              className={favorites.includes(item._id) ? styles.favoriteIconActive : styles.favoriteIcon}
              aria-label="icon-favorite"
            >
              <use href={sprite + '#icon-favorite'} onClick={onChangeFavorite} />
            </svg>
          </div>
        </div>
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
        <ReadMore text={item.description} />
        <CategoriesList data={item.details} />
        <button type="button" className={styles.button} onClick={handleShowMore}>
          Show more
        </button>
      </div>
    </li>
  );
};

export default CatalogItem;
