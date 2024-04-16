import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import image from '../../sourses/images/home-1.jpg';
import image2 from '../../sourses/images/home-4.jpg';
import image3 from '../../sourses/images/home-3.jpg';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.hero}>
        <h1 className={styles.title}>Your vacation starts with Worldwide Campers</h1>
      </div>
      <div className={styles.container}>
        <h2 className={styles.subtitle}>Why choose Worldwide Campers?</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.imageWripper}>
              <img className={styles.img} src={image} alt="image" />
            </div>
            <h3 className={styles.discription}>Free quote without obligations</h3>
            <p className={styles.text}>
              Request a free and no-obligation quote. This way you can easily compare our rental rates and vehicles.
            </p>
            <button
              className={styles.button}
              onClick={() => {
                navigate('/catalog');
              }}
            >
              Check our rental vehicles
            </button>
          </li>
          <li className={styles.item}>
            <div className={styles.imageWripper}>
              <img className={styles.img} src={image2} alt="image" />
            </div>
            <h3 className={styles.discription}>Something for every travel budget</h3>
            <p className={styles.text}>
              We have parterships with 40 RV & camper suppliers worldwide. This means there is always a suitable rental
              for your trip.
            </p>
            <button
              className={styles.button}
              onClick={() => {
                navigate('/catalog');
              }}
            >
              Check our rental vehicles
            </button>
          </li>
          <li className={styles.item}>
            <div className={styles.imageWripper}>
              <img className={styles.img} src={image3} alt="image" />
            </div>
            <h3 className={styles.discription}>Leave all your worries at home</h3>
            <p className={styles.text}>
              With our NoRisk Warranty you will be reimbursed for any personal liability that is not already covered,
              for only $8,50 per day.
            </p>
            <button
              className={styles.button}
              onClick={() => {
                navigate('/catalog');
              }}
            >
              Check our rental vehicles
            </button>
          </li>
        </ul>
        <h2 className={styles.subtitle}>Enjoy ultimate freedom traveling by RV</h2>
        <p className={styles.text}>
          An RV trip gives you the freedom to travel at your own pace to wherever you want to go. Whether you always
          wanted to visit the national parks, go camping with the whole family, or just want some peace and quiet. With
          RV rental you can make your dream RV road trip possible. Are you still searching for some itinerary
          inspiration? Check out our blogs for the best RV road trips, planning an RV road trip in your own country and
          abroad. In addition, our experts have many first time RV rental tips. Do not hesitate to contact our customer
          service team for more information.
        </p>
        <div className={styles.viev}></div>
      </div>
    </>
  );
};

export default HomePage;
