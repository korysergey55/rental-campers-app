import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCampersThunk } from '../../redax/thunks/thunks';
import { getFilteredCampersSelector, getResponseLengthSelector } from '../../redax/selectors/selectors';

import CatalogList from '../../components/catalogList/CatalogList';
import Filters from '../../components/filters/Filters';
import Footer from '../../components/footer/Footer';

import styles from './styles.module.scss';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filteredCampers = useSelector(getFilteredCampersSelector);
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
    <section className={styles.catalogPage}>
      <div className={styles.container}>
        <div className={styles.wripper}>
          <Filters />
          {filteredCampers.length ? <CatalogList /> : null}
        </div>

        {filteredCampers.length
          ? responseLength > 3 && (
              <button type="button" className={styles.button} onClick={onChangePage}>
                Load more
              </button>
            )
          : null}
      </div>
      <Footer />
    </section>
  );
};

export default CatalogPage;
