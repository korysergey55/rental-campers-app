import React, { useState } from 'react';
import styles from './styles.module.scss';

const ReadMore = ({text, quontyty = 55}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {setIsReadMore(!isReadMore)};

  return (
    <p className={styles.reedMoreText}>
      {isReadMore ? text.slice(0, quontyty): text }
           {text.length > 150 &&
        <span className={styles.reedMoreBtn} onClick={toggleReadMore}>
          {isReadMore ? '...read more' : ' show less'}
        </span>
      }
    </p>
  )
}

export default ReadMore;