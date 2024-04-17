const loctionFilter = (arr, text) => arr.filter(el => el?.location.toLowerCase().indexOf(text.toLowerCase()) >= 0);

const multiFilter = (arr, filters) => {
  return arr.filter(item => {
    // Filter by details
    const details = filters.details;
    if (Object.values(details).some(value => value)) {
      for (const key in details) {
        if (details.hasOwnProperty(key) && details[key] && !item.details[key]) {
          return false;
        }
      }
    }

    // Filter by form
    const form = filters.form;
    if (Object.values(form).some(value => value)) {
      for (const key in form) {
        if (form.hasOwnProperty(key) && form[key] && !item[key]) {
          return false;
        }
      }
    }
    // Filter by form transmission
    if (filters.transmission && item.transmission !== 'automatic') {
      return false;
    }

    return true;
  });
};

export const filterCampers = (arr, filter) => {
  // console.log(arr, filter);
  let cnTemp = arr;

  if (filter.location.length > 0) {
    cnTemp = loctionFilter(cnTemp, filter.location);
  }

  cnTemp = multiFilter(cnTemp, filter);
  console.log(cnTemp);
  return cnTemp;
};
