import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter, setItemsFiltered } from '../../redax/slice/slice';
import { categoriesDataDetails } from '../../sourses/data/categoriesData';

import styles from './styles.module.scss';
import sprite from '../../sourses/icons/sprite.svg';

const initialState = {
  transmission: false,
  details: {
    airConditioner: false,
    bathroom: false,
    kitchen: false,
    beds: false,
    TV: false,
    CD: false,
    radio: false,
    shower: false,
    toilet: false,
    freezer: false,
    hob: false,
    microwave: false,
    gas: false,
    water: false,
  },
  form: {
    panelTruck: false,
    fullyIntegrated: false,
    alcove: false,
  },
};

const Filters = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState({ location: '' });

  const [btnSelected, setBtnSelected] = useState(initialState);

  const handleChangeLocation = evt => {
    const { value, name } = evt.target;
    setLocation(prev => ({ ...prev, [name]: value }));
  };

  const handleEquipment = name => {
    if (name === 'transmission') {
      setBtnSelected(prev => ({
        ...prev,
        [name]: !prev[name],
      }));
    } else {
      setBtnSelected(prev => ({
        ...prev,
        details: { ...prev.details, [name]: !prev.details[name] },
      }));
    }
  };

  const handleVinicleForm = name => {
    setBtnSelected(prev => ({
      ...prev,
      form: { ...prev.form, [name]: !prev.form[name] },
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(setFilter({ ...location, ...btnSelected }));
    dispatch(setItemsFiltered({ ...location, ...btnSelected }));
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} id="filterForm" onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="location">
            Location
          </label>
          <input
            className={styles.input}
            name="location"
            type="text"
            value={location.location}
            required
            placeholder="Kyiv, Ukraine"
            onChange={handleChangeLocation}
          />
        </div>
        <p className={styles.subtitle}>Filters</p>
        <h2 className={styles.title}>Vehicle equipment</h2>
        <ul className={styles.list}>
          {categoriesDataDetails?.map((item, index) => (
            <li className={styles.item} key={index}>
              <button
                className={btnSelected.details[item] ? styles.buttonActive : styles.button}
                type="button"
                name={item}
                onClick={() => handleEquipment(item)}
              >
                <svg className={styles.btnIcon} aria-label={item}>
                  <use href={sprite + `#${item}`} />
                </svg>
                {item}
              </button>
            </li>
          ))}
        </ul>
        <h2 className={styles.title2}>Vehicle type</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button
              className={btnSelected.form.panelTruck ? styles.buttonActive : styles.button}
              type="button"
              name="panelTruck"
              onClick={() => handleVinicleForm('panelTruck')}
            >
              <svg className={styles.btnIcon} aria-label="van">
                <use href={sprite + '#icon-van'} />
              </svg>
              Van
            </button>
          </li>
          <li className={styles.item}>
            <button
              className={btnSelected.form.fullyIntegrated ? styles.buttonActive : styles.button}
              type="button"
              name="fullyIntegrated"
              onClick={() => handleVinicleForm('fullyIntegrated')}
            >
              <svg className={styles.btnIcon} aria-label="fullyIntegrated">
                <use href={sprite + '#icon-fullyIntegrated'} />
              </svg>
              Fully Integrated
            </button>
          </li>
          <li className={styles.item}>
            <button
              className={btnSelected.form.alcove ? styles.buttonActive : styles.button}
              type="button"
              name="alcove"
              onClick={() => handleVinicleForm('alcove')}
            >
              <svg className={styles.btnIcon} aria-label="alcove">
                <use href={sprite + '#icon-alcove'} />
              </svg>
              Alcove
            </button>
          </li>
        </ul>
        <button type="submit" htmlFor="filterForm" className={styles.button} onClick={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Filters;
