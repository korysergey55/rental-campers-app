import { createSlice, current } from '@reduxjs/toolkit';
import { filterCampers } from '../../utiles';
import { getAllCampersThunk } from '../thunks/thunks';

const initialState = {
  campers: {
    items: [],
    isLoading: false,
    error: null,
    responseLength: 0,
    itemId: '',
    favorites: [],
  },
  itemsFiltered: [],
  filter: null,
  modal: false,
  bookFormData: {},
};

const handleFulfildAllCampers = (state, { payload, meta }) => {
  if (meta.arg === 1) {
    state.campers.items = payload;
    state.campers.isLoading = false;
    state.campers.responseLength = payload.length;
  } else {
    state.campers.items.push(...payload);
    state.campers.isLoading = false;
    state.campers.responseLength = payload.length;
  }
};

const handlePanding = state => {
  state.campers.isLoading = true;
};
const handleRejected = (state, { error }) => {
  state.campers.isLoading = false;
  state.campers.error = error.message;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    setItemsFiltered: (state, { payload }) => {
      console.log(payload);
      state.campers.itemsFiltered = filterCampers(current(state.campers.items), payload);
    },

    setFavorite: (state, { payload }) => {
      if (state.campers.favorites.includes(payload)) {
        state.campers.favorites = state.campers.favorites.filter(item => item !== payload);
      } else {
        state.campers.favorites.push(payload);
      }
    },

    setCamperId: (state, { payload }) => {
      state.campers.itemId = payload;
    },

    setBookFormData: (state, { payload }) => {
      state.bookFormData = payload;
    },

    setModal: state => {
      state.modal = !state.modal;
    },

    setFilter: (state, { payload }) => {
      state.filter = payload;
    },

    resetFilter: state => {
      state.filter = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCampersThunk.fulfilled, handleFulfildAllCampers)
      .addCase(getAllCampersThunk.pending, handlePanding)
      .addCase(getAllCampersThunk.rejected, handleRejected);
  },
});
export const {
  setCampers,
  setModal,
  setCamperId,
  setBookFormData,
  setFavorite,
  setFilter,
  resetFilter,
  setItemsFiltered,
} = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
