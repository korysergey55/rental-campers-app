import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../../redax/slice/slice';
import { getModalSelector } from '../../../redax/selectors/selectors';

import ReadMore from './readMore/ReadMore';
import CategoriesList from './categoriesList/CategoriesList';
import CamperDetailsPage from '../../../pages/camperDetailsPage/CamperDetailsPage';
import Modal from '../../modal/Modal';

import styles from './styles.module.scss';
import sprite from '../../../sourses/icons/sprite.svg';

const CatalogItem = ({item}) => {
  const modal = useSelector(getModalSelector)
  const dispatch = useDispatch()

  const handleShowMore = ()=>{
    dispatch(setModal())
  }
  // console.log (item);
  return (
    <li className={styles.item}>
      <div className={styles.imageWripper}>
        <img
          className={styles.image}
          src={item.gallery[0]}
          alt={item.name + 'image'}
        />
      </div>
      <div className={styles.contentWripper}>
        <div className={styles.titleWripper}>
          <h2 className={styles.title}>{item.name}</h2>
          <div className={styles.priceWripper}>
            <h2 className={styles.price}>{'\u20AC'}{item.price}.00</h2>
            <svg className={styles.favoriteIcon} aria-label="icon-favorite">
              <use href={sprite + '#icon-favorite'} />
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
        <CategoriesList data={item.details}/>
        <button type='button' className={styles.button} onClick={handleShowMore}>Show more</button>
        {modal && 
        <Modal>
          <CamperDetailsPage item={item}/>
        </Modal>}
      </div>
    </li>
  );
};

export default CatalogItem;
