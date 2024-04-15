import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { getCampersSelector } from '../../redax/selectors/selectors';

import CatalogItem from './catalogItem/CatalogItem';
import styles from './styles.module.scss';

const CatalogList = () => {
  const campers = useSelector(getCampersSelector);
  return (
    <ul className={styles.list}>
      {campers.length && campers?.map(item => <CatalogItem item={item} key={uuidv4()} />)}
    </ul>
  );
};

export default CatalogList;
