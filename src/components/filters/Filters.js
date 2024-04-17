import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter, setItemsFiltered } from '../../redax/slice/slice';

import styles from './styles.module.scss';
import sprite from '../../sourses/icons/sprite.svg';

const Filters = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState({ location: '' });

  const [btnSelected, setBtnSelected] = useState({
    transmission: false,
    details: { airConditioner: false, kitchen: false, TV: false, shower: false },
    form: {
      van: false,
      fullyIntegrated: false,
      alcove: false,
    },
  });

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
          <li className={styles.item}>
            <button
              className={btnSelected.details.airConditioner ? styles.buttonActive : styles.button}
              type="button"
              name="airConditioner"
              onClick={() => handleEquipment('airConditioner')}
            >
              <svg className={styles.btnIcon} aria-label="icon-airConditioner">
                <use href={sprite + '#icon-ac'} />
              </svg>
              AC
            </button>
          </li>
          <li className={styles.item}>
            <button
              className={btnSelected.transmission ? styles.buttonActive : styles.button}
              type="button"
              name="transmission"
              onClick={() => handleEquipment('transmission')}
            >
              <svg className={styles.btnIcon} aria-label="icon-transmission">
                <use href={sprite + '#icon-automatic'} />
              </svg>
              Automatic
            </button>
          </li>
          <li className={styles.item}>
            <button
              className={btnSelected.details.kitchen ? styles.buttonActive : styles.button}
              type="button"
              name="kitchen"
              onClick={() => handleEquipment('kitchen')}
            >
              <svg className={styles.btnIcon} aria-label="icon-kitchen">
                <use href={sprite + '#icon-kitchen'} />
              </svg>
              Kitchen
            </button>
          </li>
          <li className={styles.item}>
            <button
              className={btnSelected.details.TV ? styles.buttonActive : styles.button}
              type="button"
              name="TV"
              onClick={() => handleEquipment('TV')}
            >
              <svg className={styles.btnIcon} aria-label="icon-TV">
                <use href={sprite + '#icon-tv'} />
              </svg>
              TV
            </button>
          </li>
          <li className={styles.item}>
            <button
              className={btnSelected.details.shower ? styles.buttonActive : styles.button}
              type="button"
              name="shower"
              onClick={() => handleEquipment('shower')}
            >
              <svg className={styles.btnIcon} aria-label="icon-shower">
                <use href={sprite + '#icon-showerWc'} />
              </svg>
              Shower/WC
            </button>
          </li>
        </ul>
        <h2 className={styles.title2}>Vehicle type</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button
              className={btnSelected.form.van ? styles.buttonActive : styles.button}
              type="button"
              name="van"
              onClick={() => handleVinicleForm('van')}
            >
              <svg className={styles.btnIcon} aria-label="icon-van">
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
              <svg className={styles.btnIcon} aria-label="icon-fullyIntegrated">
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
              <svg className={styles.btnIcon} aria-label="icon-alcove">
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
