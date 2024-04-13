import {createAsyncThunk} from '@reduxjs/toolkit';
import {getAllCampersAPI} from '../../api/api';

export const getAllCampersThunk = createAsyncThunk (
  'campers/getAllCampers',
  async (page, thunkAPI) => {
    try {
      const response = await getAllCampersAPI (page);
      return response;
    } catch (evt) {
      return thunkAPI.rejectWithValue (evt.message);
    }
  }
);
