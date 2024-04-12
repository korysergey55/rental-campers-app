import React from 'react';
import { Audio } from 'react-loader-spinner';
import styles from './styles.module.scss';

const Loader = () => {
  return (
    <div className={styles.container}>
    <Audio
      height="80"
      width="80"
      radius="9"
      color="#FFC531"
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass={styles.loader}
      />
      </div>
  );
};

export default Loader;
