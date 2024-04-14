import React from 'react'
import {useSelector} from 'react-redux';
import { getCamperById } from '../../../redax/selectors/selectors';
import styles from './styles.module.scss';

const Features = () => {
  const item = useSelector (getCamperById);
  return (
    <div className={styles.container}>
      <p>Features......</p>
    </div>
  );
}

export default Features;