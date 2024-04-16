import { createSelector } from '@reduxjs/toolkit';

export const getCampersSelector = state => state.campers.campers.items;
export const getResponseLengthSelector = state => state.campers.campers.responseLength;
export const getModalSelector = state => state.campers.modal;
export const getCamperIdSelector = state => state.campers.campers.itemId;
export const getFavoritsIdSelector = state => state.campers.campers.favorites;

export const getCamperById = createSelector(
  [getCampersSelector, getCamperIdSelector],
  (getCampersSelector, getCamperIdSelector) => {
    return getCampersSelector?.find(item => item._id === getCamperIdSelector);
  }
);

export const getFavoritsCamperSelector = createSelector(
  [getCampersSelector, getFavoritsIdSelector],
  (getCampersSelector, getFavoritsIdSelector) => {
    return getCampersSelector?.filter(camper => getFavoritsIdSelector.includes(camper._id));
  }
);
