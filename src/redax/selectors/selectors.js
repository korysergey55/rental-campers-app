import { createSelector } from "@reduxjs/toolkit";

export const getAllCampersSelector = state => state.campers.campers.items
export const getResponseLengthSelector = state => state.campers.campers.responseLength
