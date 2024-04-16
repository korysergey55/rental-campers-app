import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import CatalogItem from '../../components/catalogList/catalogItem/CatalogItem';
import { getFavoritsCamperSelector } from '../../redax/selectors/selectors';

import styles from './styles.module.scss';

const FavoritesPage = () => {
  const favoritesItems = useSelector(getFavoritsCamperSelector);
  console.log(favoritesItems);
  return (
    <div className={styles.container}>
      {favoritesItems.length > 0 ? (
        <ul className={styles.list}>
          {favoritesItems.map(item => (
            <CatalogItem item={item} key={uuidv4()} />
          ))}
        </ul>
      ) : (
        <h2 className={styles.title}>Theare are no favorite campers yet</h2>
      )}
    </div>
  );
};

export default FavoritesPage;
