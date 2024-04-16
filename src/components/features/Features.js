import React from 'react';
import { useSelector } from 'react-redux';
import { getCamperById } from '../../redax/selectors/selectors';

import CategoriesList from '../categoriesList/CategoriesList';
import BookForm from '../bookForm/BookForm';

import styles from './styles.module.scss';

const Features = () => {
  const item = useSelector(getCamperById);
  return (
    <div className={styles.container}>
      <div className={styles.wripper}>
        <CategoriesList data={item.details} />
        <h3 className={styles.title}>Vehicle details</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <p className={styles.text}>Form</p>
            <p className={styles.text}>{item.form}</p>
          </li>
          <li className={styles.item}>
            <p className={styles.text}>Length</p>
            <p className={styles.text}>{item.length}</p>
          </li>
          <li className={styles.item}>
            <p className={styles.text}>Width</p>
            <p className={styles.text}>{item.width}</p>
          </li>
          <li className={styles.item}>
            <p className={styles.text}>Height</p>
            <p className={styles.text}>{item.height}</p>
          </li>
          <li className={styles.item}>
            <p className={styles.text}>Tank</p>
            <p className={styles.text}>{item.tank}</p>
          </li>
          <li className={styles.item}>
            <p className={styles.text}>Consumption</p>
            <p className={styles.text}>{item.consumption}</p>
          </li>
        </ul>
      </div>
      <BookForm />
    </div>
  );
};

export default Features;
