const loctionFilter = (arr, text) => arr.filter(el => el?.location.toLowerCase().indexOf(text.toLowerCase()) >= 0);

const multiFilter = (arr, filters) => {
  return arr.filter(item => {
    // Filter by form transmission
    if (filters.transmission && item?.transmission !== 'automatic') {
      return false;
    }

    // Filter by details
    const details = filters.details;
    if (Object.values(details).some(value => value)) {
      for (const key in details) {
        if (details[key] && !item.details[key]) {
          return false;
        }
      }
    }

    // Filter by form
    const form = filters.form;
    if (Object.values(form).some(value => value)) {
      return (
        Object.keys(form)
          .filter(el => form[el])
          .indexOf(item.form) > -1
      );
    }

    return true;
  });
};

export const filterCampers = (arr, filter) => {
  let cnTemp = arr;

  if (filter.location.length) {
    cnTemp = loctionFilter(cnTemp, filter.location);
  }

  if (cnTemp.length) {
    cnTemp = multiFilter(cnTemp, filter);
  }
  // console.log('cnTemp', cnTemp);
  return cnTemp;
};
