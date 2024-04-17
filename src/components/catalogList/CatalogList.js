import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { getFilteredCampersSelector } from '../../redax/selectors/selectors';

import CatalogItem from './catalogItem/CatalogItem';
import styles from './styles.module.scss';

const CatalogList = () => {
  const filteredCampers = useSelector(getFilteredCampersSelector);
  return (
    <ul className={styles.list}>
      {filteredCampers.length > 0 ? filteredCampers?.map(item => <CatalogItem item={item} key={uuidv4()} />) : null}
    </ul>
  );
};

export default CatalogList;
