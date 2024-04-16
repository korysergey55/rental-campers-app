import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from '../slice/slice';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist';

const persistConfigFavorites = {
  key: 'favorites',
  storage,
  whitelist: ['campers'],
};

export const store = configureStore({
  reducer: {
    campers: persistReducer(persistConfigFavorites, campersReducer),
  },
});

export const persistor = persistStore(store);
