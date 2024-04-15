import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles.module.scss';

const CategoriesList = ({ data = {} }) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(Object.entries(data));
  }, [data]);

  return (
    <ul className={styles.list}>
      {state.length && state?.map(item => {
        if (item[1]) {
          return (
            <li className={styles.item} key={uuidv4()}>
              <h3 className={styles.text}>
                {item[1]} {item[0]}
              </h3>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default CategoriesList;
