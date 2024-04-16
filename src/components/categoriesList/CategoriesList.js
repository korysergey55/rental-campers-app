import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './styles.module.scss';
import sprite from '../../sourses/icons/sprite.svg';

const CategoriesList = ({ data = {} }) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(Object.entries(data));
  }, [data]);

  const findIcon = (iconName = []) => {
    if (iconName) {
      return iconName;
    } else return '';
  };

  return (
    <ul className={styles.list}>
      {state.length &&
        state?.map(item => {
          if (item[1]) {
            return (
              <li className={styles.item} key={uuidv4()}>
                <svg className={styles.categoryIcon} aria-label="icon">
                  <use href={sprite + '#' + findIcon(item[0])} />
                </svg>
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
