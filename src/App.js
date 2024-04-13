import React, {Suspense, lazy} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import Footer from './components/footer/Footer';

import Header from './components/header/Header';
import Loader from './components/loader/Loader';
const HomePage = lazy (() => import ('./pages/homePage/HomePage'));
const CatalogPage = lazy (() => import ('./pages/catalogPage/CatalogPage'));
const FavoritesPage = lazy (() => import ('./pages/favoritesPage/FavoritesPage'));

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Suspense>
      <Footer/>
    </div>
  );
};

export default App;
