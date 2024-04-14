import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCampersThunk } from '../../redax/thunks/thunks';
import { getCampersSelector, getResponseLengthSelector } from '../../redax/selectors/selectors';

import CatalogList from '../../components/catalogList/CatalogList';
import styles from './styles.module.scss';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(getCampersSelector);
  const responseLength = useSelector(getResponseLengthSelector);

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page > 1) {
      dispatch(getAllCampersThunk(page));
    }
  }, [dispatch, page]);

  const onChangePage = () => {
    if (responseLength > 3) {
      setPage(prev => prev + 1);
    }
  };

  return (
    <div className={styles.container}>
      {campers.length > 0 && <CatalogList />}
      {responseLength > 3 && (
        <button type="button" className={styles.button} onClick={onChangePage}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
