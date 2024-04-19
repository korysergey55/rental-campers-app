import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getAllCampersThunk } from './redax/thunks/thunks';

import Headroom from 'react-headroom';
import Header from './components/header/Header';
import Loader from './components/loader/Loader';
import Modal from './components/modal/Modal';

const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/catalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/favoritesPage/FavoritesPage'));
const CamperDetailsPage = lazy(() => import('./pages/camperDetailsPage/CamperDetailsPage'));
const Features = lazy(() => import('./components/features/Features'));
const Reviews = lazy(() => import('./components/reviews/Reviews'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampersThunk(1));
  }, [dispatch]);

  return (
    <div>
      <Headroom>
        <Header />
      </Headroom>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route
            path="/catalog/:camperId"
            element={
              <Modal>
                <CamperDetailsPage />
              </Modal>
            }
          >
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
