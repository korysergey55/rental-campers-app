import React, { useState } from 'react';

import styles from './styles.module.scss';
import sprite from '../../sourses/icons/sprite.svg';

const Filters = () => {
  const [location, setLocation] = useState({ location: '' });
  const [btnSelected, setbtnSelected] = useState({
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    showerWc: false,
    van: false,
    fullyIntegrated: false,
    alcove: false,
  });

  const handleChangeLocation = evt => {
    const { value, name } = evt.target;
    setLocation(prev => ({ ...prev, [name]: value }));
  };

  const handleEquipment = name => {
    setbtnSelected(prev => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(btnSelected, location);
    console.log(evt);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} name="filterForm" onSubmit={handleSubmit}>
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
              className={btnSelected.ac ? styles.buttonActive : styles.button}
              type="button"
              name="ac"
              onClick={() => handleEquipment('ac')}
            >
              <svg className={styles.btnIcon} aria-label="icon-ac">
                <use href={sprite + '#icon-ac'} />
              </svg>
              AC
            </button>
          </li>
          <li className={styles.item}>
            <button
              className={btnSelected.automatic ? styles.buttonActive : styles.button}
              type="button"
              name="automatic"
              onClick={() => handleEquipment('automatic')}
            >
              <svg className={styles.btnIcon} aria-label="icon-automatic">
                <use href={sprite + '#icon-automatic'} />
              </svg>
              Automatic
            </button>
          </li>
          <li className={styles.item}>
            <button
              className={btnSelected.kitchen ? styles.buttonActive : styles.button}
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
              className={btnSelected.tv ? styles.buttonActive : styles.button}
              type="button"
              name="tv"
              onClick={() => handleEquipment('tv')}
            >
              <svg className={styles.btnIcon} aria-label="icon-tv">
                <use href={sprite + '#icon-tv'} />
              </svg>
              TV
            </button>
          </li>
          <li className={styles.item}>
            <button
              className={btnSelected.showerWc ? styles.buttonActive : styles.button}
              type="button"
              name="showerWc"
              onClick={() => handleEquipment('showerWc')}
            >
              <svg className={styles.btnIcon} aria-label="icon-showerWc">
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
              className={btnSelected.van ? styles.buttonActive : styles.button}
              type="button"
              name="van"
              onClick={() => handleEquipment('van')}
            >
              <svg className={styles.btnIcon} aria-label="icon-van">
                <use href={sprite + '#icon-van'} />
              </svg>
              Van
            </button>
          </li>
          <li className={styles.item}>
            <button
              className={btnSelected.fullyIntegrated ? styles.buttonActive : styles.button}
              type="button"
              name="fullyIntegrated"
              onClick={() => handleEquipment('fullyIntegrated')}
            >
              <svg className={styles.btnIcon} aria-label="icon-fullyIntegrated">
                <use href={sprite + '#icon-fullyIntegrated'} />
              </svg>
              Fully Integrated
            </button>
          </li>
          <li className={styles.item}>
            <button
              className={btnSelected.alcove ? styles.buttonActive : styles.button}
              type="button"
              name="alcove"
              onClick={() => handleEquipment('alcove')}
            >
              <svg className={styles.btnIcon} aria-label="icon-alcove">
                <use href={sprite + '#icon-alcove'} />
              </svg>
              Alcove
            </button>
          </li>
        </ul>
        <button type="submit" className={styles.button} onClick={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Filters;
