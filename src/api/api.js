import axios from 'axios';

const BASE_URL = 'https://66192f789a41b1b3dfbf27c1.mockapi.io/adverts/';

export const getAllCampersAPI = async (page=1) => {
  try {
    const responce = await axios.get (`${BASE_URL}adverts?page=${page}&limit=4`);
    return responce.data;
  } catch (error) {
    throw new Error (error);
  }
};
