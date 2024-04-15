import React from 'react';
import { useSelector } from 'react-redux';
import { getCamperById } from '../../redax/selectors/selectors';
import { v4 as uuidv4 } from 'uuid';

import styles from './styles.module.scss';
import sprite from '../../sourses/icons/sprite.svg';

const Reviews = () => {
  const item = useSelector(getCamperById);

  const cauntRearingStars = arrLength => {
    let arr = [];
    for (let i = 0; i < arrLength; i += 1) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <div className={styles.container}>
      <div className={styles.wripper}>
        {item.reviews.map(review => (
          <div className={styles.review}>
            <div className={styles.reviewerWripper}>
              <div className={styles.avatar}>
                <p className={styles.text}>{review.reviewer_name.slice(0, 1)}</p>
              </div>
              <div className={styles.ratingWripper}>
                <h3 className={styles.name}>{review.reviewer_name}</h3>
                <ul className={styles.starlist}>
                  {cauntRearingStars(review.reviewer_rating).map(() => (
                    <li className={styles.item} key={uuidv4()}>
                      <svg className={styles.starIcon} aria-label="icon-star">
                        <use href={sprite + '#icon-star'} />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className={styles.comment}>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
