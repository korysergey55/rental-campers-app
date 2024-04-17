import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCampersThunk } from '../../redax/thunks/thunks';
import {
  getCampersSelector,
  getResponseLengthSelector,
  getFilteredCampersSelector,
} from '../../redax/selectors/selectors';

import CatalogList from '../../components/catalogList/CatalogList';
import Filters from '../../components/filters/Filters';
import Footer from '../../components/footer/Footer';

import styles from './styles.module.scss';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(getCampersSelector);
  const filteredCampers = useSelector(getFilteredCampersSelector);
  const responseLength = useSelector(getResponseLengthSelector);

  const [page, setPage] = useState(1);

  console.log('filteredCampers', filteredCampers);

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
    <section className={styles.catalogPage}>
      <div className={styles.container}>
        {campers.length > 0 && (
          <div className={styles.wripper}>
            <Filters />
            <CatalogList />
          </div>
        )}

        {responseLength > 3 && (
          <button type="button" className={styles.button} onClick={onChangePage}>
            Load more
          </button>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default CatalogPage;
