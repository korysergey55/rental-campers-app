import { createSlice } from '@reduxjs/toolkit';
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
  filter: '',
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
    setFavorite: (state, { payload }) => {
      state.campers.campers.favorites.push(payload);
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
      state.filter = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCampersThunk.fulfilled, handleFulfildAllCampers)
      .addCase(getAllCampersThunk.pending, handlePanding)
      .addCase(getAllCampersThunk.rejected, handleRejected);
  },
});
export const { setCampers, setModal, setCamperId, setBookFormData, setFilter, resetFilter } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
