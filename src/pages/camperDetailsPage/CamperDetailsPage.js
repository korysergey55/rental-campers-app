import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getCamperById } from '../../redax/selectors/selectors';
import { setCamperId } from '../../redax/slice/slice';

import CamperDetails from '../../components/camperDetails/CamperDetails';
import styles from './styles.module.scss';

const CamperDetailsPage = () => {
  const { camperId } = useParams();
  const item = useSelector(getCamperById);
  const dispatch = useDispatch();

  useEffect(() => {
    if (camperId) {
      dispatch(setCamperId(camperId));
    }
  }, [camperId, dispatch]);

  return (
    <div className={styles.container}>
      <CamperDetails item={item} />
    </div>
  );
};

export default CamperDetailsPage;
